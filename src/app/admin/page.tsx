'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchOrders();
  }, []);

  const checkAuth = () => {
    if (localStorage.getItem('admin_authenticated') !== 'true') {
      router.push('/admin/login');
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      if (data.success) {
        setOrders(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        
        <div className="bg-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Orders ({orders.length})</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="p-3 text-left">Customer #</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Plan</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: any) => (
                  <tr key={order.id} className="border-b border-slate-700">
                    <td className="p-3">#{order.customer_number}</td>
                    <td className="p-3">{order.email}</td>
                    <td className="p-3">{order.plan_duration}</td>
                    <td className="p-3">€{order.plan_price}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-yellow-500 text-black rounded text-sm">
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3">{new Date(order.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {orders.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No orders yet
              </div>
            )}
          </div>
        </div>
        
        <button
          onClick={() => {
            localStorage.removeItem('admin_authenticated');
            router.push('/admin/login');
          }}
          className="mt-8 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
