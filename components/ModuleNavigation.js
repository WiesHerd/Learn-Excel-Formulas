import Link from 'next/link';

export default function ModuleNavigation({ title, description }) {
  return (
    <>
      {/* Back Navigation Banner */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/basics" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Excel Basics
          </Link>
        </div>
      </div>

      {/* Module Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
} 