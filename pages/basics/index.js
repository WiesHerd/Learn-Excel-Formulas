import Link from 'next/link';

export default function BasicsIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Excel Basics</h1>
          <p className="text-xl text-gray-600">
            Master the fundamentals before diving into formulas
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/basics/excel-interface">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Excel Interface</h3>
              <p className="text-gray-600">Learn the basic layout and tools</p>
            </div>
          </Link>

          <Link href="/basics/tables">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Tables & Structure</h3>
              <p className="text-gray-600">Organize your data effectively</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
} 