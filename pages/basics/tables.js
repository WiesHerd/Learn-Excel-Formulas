import Link from 'next/link';

export default function TablesAndStructure() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <Link href="/basics" className="inline-flex items-center text-gray-600 p-4 hover:text-gray-800">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Excel Basics
      </Link>

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Tables & Structure</h1>
          <p className="text-xl text-gray-600">Transform raw data into organized, filterable tables</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Why Use Excel Tables Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Use Excel Tables?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">📊</span>
                <h3 className="font-semibold">Auto-Formatting</h3>
              </div>
              <p className="text-gray-700">Consistent styling and formatting that updates automatically</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🔄</span>
                <h3 className="font-semibold">Dynamic Ranges</h3>
              </div>
              <p className="text-gray-700">Tables expand automatically when adding new data</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🔍</span>
                <h3 className="font-semibold">Built-in Features</h3>
              </div>
              <p className="text-gray-700">Sorting, filtering, and totals row included</p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>
          <div className="space-y-4">
            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">1</div>
              <div>
                <h3 className="font-semibold mb-2">Select Your Data</h3>
                <p className="text-gray-600">Click any cell within your data range</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">2</div>
              <div>
                <h3 className="font-semibold mb-2">Create Table</h3>
                <p className="text-gray-600">Press Ctrl + T or click "Format as Table" on the Home tab</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">3</div>
              <div>
                <h3 className="font-semibold mb-2">Verify Headers</h3>
                <p className="text-gray-600">Ensure "My table has headers" is checked if you have header row</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">4</div>
              <div>
                <h3 className="font-semibold mb-2">Choose Style</h3>
                <p className="text-gray-600">Select a table style from the gallery</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 