import Image from 'next/image';
import { useState } from 'react';

export default function SafeImage({ src, alt, className = '', width = 600, height = 400 }) {
  const [error, setError] = useState(false);

  const fallbackStyle = `
    flex items-center justify-center 
    bg-gray-100 border border-gray-200 rounded-lg
    text-gray-400 text-sm p-4
  `;

  if (error) {
    return (
      <div className={`${fallbackStyle} ${className}`}>
        <div className="text-center">
          <p>Image not found</p>
          <p className="text-xs mt-1">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  );
} 