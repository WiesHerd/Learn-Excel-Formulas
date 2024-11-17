import Link from 'next/link';

export default function TablesAndStructure() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation - In its own section */}
      <div>
        <Link 
          href="/basics" 
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
            Back to Excel Basics
          </div>
        </Link>
      </div>

      {/* Title Section - Separate from navigation */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Tables & Structure</h1>
        <p className="text-xl text-gray-600">Transform raw data into organized, filterable tables</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">Why Use Excel Tables?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📊</span>
                <h3 className="font-medium">Auto-Formatting</h3>
              </div>
              <p className="text-gray-600">Consistent styling and formatting that updates automatically</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📐</span>
                <h3 className="font-medium">Dynamic Ranges</h3>
              </div>
              <p className="text-gray-600">Tables expand automatically when adding new data</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔍</span>
                <h3 className="font-medium">Built-in Features</h3>
              </div>
              <p className="text-gray-600">Sorting, filtering, and totals row</p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide - Left aligned */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-8">Step-by-Step Guide</h2>
          <div className="space-y-6">
            {/* Steps content */}
          </div>
        </section>
      </div>
    </div>
  );
} 