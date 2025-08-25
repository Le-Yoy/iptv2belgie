'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { Order } from '@/lib/supabase';

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [notes, setNotes] = useState('');
  const router = useRouter();

  // Stats
  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === 'pending').length,
    paid: orders.filter((o) => o.payment_verified).length,
    active: orders.filter((o) => o.status === 'active').length,
    revenue: orders
      .filter((o) => o.payment_verified)
      .reduce((sum, o) => sum + Number(o.plan_price), 0),
    todayOrders: orders.filter(
      (o) => new Date(o.created_at).toDateString() === new Date().toDateString()
    ).length,
  };

  useEffect(() => {
    checkAuth();
    fetchOrders();

    // Set up real-time subscription
    const subscription = supabase
      .channel('orders')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'orders' },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, filter, searchTerm]);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session || session.user.email !== 'payments@iptv2belgie.be') {
      router.push('/admin/login');
    }
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterOrders = () => {
    let filtered = [...orders];

    // Status filter
    if (filter !== 'all') {
      filtered = filtered.filter((o) => o.status === filter);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (o) =>
          o.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          o.customer_number.toString().includes(searchTerm) ||
          o.phone?.includes(searchTerm)
      );
    }

    setFilteredOrders(filtered);
  };

  const updateOrderStatus = async (
    orderId: number,
    updates: Partial<Order>
  ) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', orderId);

      if (!error) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const saveNotes = async (orderId: number) => {
    await updateOrderStatus(orderId, { notes });
    setSelectedOrder(null);
    setNotes('');
  };

  const exportToCSV = () => {
    const headers = [
      'Customer #',
      'Email',
      'Phone',
      'Plan',
      'Devices',
      'Price',
      'Status',
      'Payment',
      'Date',
    ];
    const csvData = filteredOrders.map((o) => [
      o.customer_number,
      o.email,
      o.phone || '',
      o.plan_duration,
      o.device_count,
      o.plan_price,
      o.status,
      o.payment_verified ? 'Paid' : 'Pending',
      new Date(o.created_at).toLocaleDateString(),
    ]);

    const csv = [headers, ...csvData].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iptv2belgie-orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-500',
      contacted: 'bg-blue-500',
      paid: 'bg-green-500',
      active: 'bg-emerald-500',
      cancelled: 'bg-red-500',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white mt-4">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">
                IPTV2Belgie Admin
              </h1>
              <p className="text-gray-400 text-sm">
                Manage your orders and customers
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchOrders}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                🔄 Refresh
              </button>
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                📥 Export CSV
              </button>
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push('/admin/login');
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <p className="text-gray-400 text-sm">Total Orders</p>
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <p className="text-gray-400 text-sm">Today</p>
            <p className="text-2xl font-bold text-sky-400">
              {stats.todayOrders}
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <p className="text-gray-400 text-sm">Pending</p>
            <p className="text-2xl font-bold text-yellow-400">
              {stats.pending}
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <p className="text-gray-400 text-sm">Paid</p>
            <p className="text-2xl font-bold text-green-400">{stats.paid}</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <p className="text-gray-400 text-sm">Active</p>
            <p className="text-2xl font-bold text-emerald-400">
              {stats.active}
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
            <p className="text-gray-400 text-sm">Revenue</p>
            <p className="text-2xl font-bold text-white">€{stats.revenue}</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Status Filter */}
            <div className="flex gap-2 flex-wrap">
              {[
                'all',
                'pending',
                'contacted',
                'paid',
                'active',
                'cancelled',
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === s
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                  {s !== 'all' && (
                    <span className="ml-2 text-xs">
                      ({orders.filter((o) => o.status === s).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by email, phone, or customer #..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="text-white font-medium">
                        #{order.customer_number}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {order.language}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-white flex items-center gap-2">
                        {order.email}
                        <button
                          onClick={() => copyToClipboard(order.email)}
                          className="text-gray-400 hover:text-white"
                          title="Copy email"
                        >
                          📋
                        </button>
                      </div>
                      {order.phone && (
                        <div className="text-gray-400 text-sm flex items-center gap-2">
                          {order.phone}
                          <button
                            onClick={() => copyToClipboard(order.phone!)}
                            className="text-gray-400 hover:text-white"
                            title="Copy phone"
                          >
                            📋
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-white">{order.plan_duration}</div>
                      <div className="text-gray-400 text-sm">
                        {order.device_count} device(s)
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white font-medium">
                      €{order.plan_price}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(order.status)}`}
                        >
                          {order.status}
                        </span>
                        <div className="flex gap-1">
                          {order.payment_verified && (
                            <span className="text-xs text-green-400">
                              ✓ Paid
                            </span>
                          )}
                          {order.credentials_sent && (
                            <span className="text-xs text-blue-400">
                              ✓ Sent
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-sm">
                      {new Date(order.created_at).toLocaleDateString()}
                      <br />
                      {new Date(order.created_at).toLocaleTimeString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-2">
                        {/* Status Dropdown */}
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateOrderStatus(order.id, {
                              status: e.target.value as Order['status'],
                            })
                          }
                          className="bg-slate-700 text-white text-sm rounded px-2 py-1"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="paid">Paid</option>
                          <option value="active">Active</option>
                          <option value="cancelled">Cancelled</option>
                        </select>

                        {/* Action Buttons */}
                        <div className="flex gap-1">
                          {!order.payment_verified && (
                            <button
                              onClick={() =>
                                updateOrderStatus(order.id, {
                                  payment_verified: true,
                                  status: 'paid',
                                })
                              }
                              className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
                              title="Mark as paid"
                            >
                              💰
                            </button>
                          )}
                          {!order.credentials_sent && (
                            <button
                              onClick={() =>
                                updateOrderStatus(order.id, {
                                  credentials_sent: true,
                                  status: 'active',
                                })
                              }
                              className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                              title="Mark credentials sent"
                            >
                              📧
                            </button>
                          )}
                          <button
                            onClick={() => {
                              setSelectedOrder(order);
                              setNotes(order.notes || '');
                            }}
                            className="px-2 py-1 bg-slate-600 text-white text-xs rounded hover:bg-slate-500"
                            title="Add notes"
                          >
                            📝
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredOrders.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No orders found matching your filters
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notes Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-white font-semibold mb-4">
              Add Notes for #{selectedOrder.customer_number}
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-32 px-3 py-2 bg-slate-700 text-white rounded-lg"
              placeholder="Add notes about this order..."
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => saveNotes(selectedOrder.id)}
                className="px-4 py-2 bg-sky-500 text-white rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setSelectedOrder(null);
                  setNotes('');
                }}
                className="px-4 py-2 bg-slate-600 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
