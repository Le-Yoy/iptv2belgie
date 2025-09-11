// src/lib/imageOptimization.ts - New File
export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  // If using Vercel, it handles optimization automatically
  return src;
};

export const getOptimizedImageProps = (
  src: string,
  alt: string,
  priority: boolean = false
) => {
  return {
    src,
    alt,
    loading: priority ? ('eager' as const) : ('lazy' as const),
    priority,
    quality: priority ? 90 : 75,
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...', // Generate with plaiceholder
  };
};

// Preload critical images
export const preloadImages = (imagePaths: string[]) => {
  if (typeof window !== 'undefined') {
    imagePaths.forEach((path) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      document.head.appendChild(link);
    });
  }
};
