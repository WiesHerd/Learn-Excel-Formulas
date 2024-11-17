import Link from 'next/link';

export default function BasicsIndex() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Excel Basics</h1>
          <p className="text-xl text-gray-600">
            Master the fundamentals before diving into formulas
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/basics/excel-interface"
            className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Excel Interface</h3>
            <p className="text-gray-600">Learn the basic layout and tools</p>
          </Link>

          <Link 
            href="/basics/tables"
            className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Tables & Structure</h3>
            <p className="text-gray-600">Organize your data effectively</p>
          </Link>
        </div>
      </main>
    </div>
  );
} 