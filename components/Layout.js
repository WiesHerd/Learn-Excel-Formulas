import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto my-8 bg-white rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}
