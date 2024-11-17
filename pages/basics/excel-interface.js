import Link from 'next/link';
import { basicsContentData } from '../../data/basicsContentData';

export default function ExcelInterface() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <Link 
            href="/basics"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Excel Basics
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">Excel Interface</h1>
          <p className="text-xl text-gray-600 mb-8">Master Excel's interface and essential shortcuts</p>
        </div>

        {/* Navigation Shortcuts Section */}
        <div className="max-w-7xl mx-auto space-y-12">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Navigation Shortcuts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-4">Essential Movement</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-200 rounded mr-3">Ctrl + →</kbd>
                    <span>Move to last cell in row</span>
                  </div>
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-200 rounded mr-3">Ctrl + ↓</kbd>
                    <span>Move to last cell in column</span>
                  </div>
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-200 rounded mr-3">Ctrl + Home</kbd>
                    <span>Go to beginning of worksheet</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-4">Selection Shortcuts</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-200 rounded mr-3">Ctrl + Space</kbd>
                    <span>Select entire column</span>
                  </div>
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-200 rounded mr-3">Shift + Space</kbd>
                    <span>Select entire row</span>
                  </div>
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-gray-200 rounded mr-3">Ctrl + A</kbd>
                    <span>Select all cells</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ribbon Interface Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Ribbon Interface Overview</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Common Tabs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Home Tab</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Formatting options</li>
                      <li>• Cell styles</li>
                      <li>• Find & Select</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Insert Tab</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Charts</li>
                      <li>• Tables</li>
                      <li>• Illustrations</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Data Tab</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Sort & Filter</li>
                      <li>• Data validation</li>
                      <li>• Data tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Access Toolbar Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Access Toolbar</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Customization Tips:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Add frequently used commands</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Organize commands in order of use</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Remove rarely used commands</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 