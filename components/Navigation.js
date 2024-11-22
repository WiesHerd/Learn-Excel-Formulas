import Link from 'next/link';

export default function Navigation({ currentPage }) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/tracks" className="inline-flex items-center text-gray-600 py-4 hover:text-gray-800">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tracks
        </Link>
        <Link href="/shortcuts" className="text-gray-600 hover:text-gray-900">
          Excel Shortcuts
        </Link>
      </div>
    </div>
  );
} 