import Link from 'next/link';

export default function ExcelBasics() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Banner */}
      <div>
        <Link 
          href="/" 
          className="inline-block px-4 py-3 text-gray-600 hover:text-gray-800"
        >
          <div className="flex items-center">
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Home
          </div>
        </Link>
      </div>

      {/* Rest of your content remains the same */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Excel Basics</h1>
        <p className="text-gray-600">Master the fundamentals before diving into formulas</p>
        {/* ... rest of the content ... */}
      </div>
    </div>
  );
} 