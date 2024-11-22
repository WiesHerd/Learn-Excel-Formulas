import Link from 'next/link';
import { basicsContentData } from '../../data/basicsContentData';

export default function ExcelInterface() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Shortcuts Banner - Add this at the top after the title */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-2">Excel Shortcuts Guide</h2>
            <p className="text-blue-700">Download our comprehensive guide to Excel shortcuts</p>
          </div>
          <Link href="/resources/shortcuts">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Shortcuts PDF
            </button>
          </Link>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">Excel Interface</h1>
      <p className="text-gray-600 mb-8">Master Excel's interface and essential shortcuts</p>

      {/* Rest of your existing content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started with Excel's Interface</h2>
        {/* Your existing content */}
      </section>

      {/* Navigation Fundamentals section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Excel Navigation Fundamentals</h2>
        {/* Your existing content */}
      </section>

      {/* Advanced Navigation Shortcuts section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Navigation Shortcuts</h2>
        <p className="mb-4">Power user shortcuts for faster navigation:</p>
        
        {/* Add this new section */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Want All Excel Shortcuts?</h3>
              <p className="text-blue-700">Download our comprehensive shortcuts guide covering all Excel commands</p>
            </div>
            <Link href="/resources/shortcuts">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Get Complete Shortcuts PDF
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Excel Shortcuts Reference section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Excel Shortcuts Reference</h2>
        
        <p>Here are some essential Excel shortcuts to help you work more efficiently:</p>

        <div className="grid grid-cols-2 gap-4 mt-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2">
              <li><code className="bg-white px-2 py-1 rounded">Arrow Keys</code> - Move one cell</li>
              <li><code className="bg-white px-2 py-1 rounded">Ctrl + Arrow</code> - Jump to edge</li>
              <li><code className="bg-white px-2 py-1 rounded">Page Up/Down</code> - Move one screen</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Editing</h3>
            <ul className="space-y-2">
              <li><code className="bg-white px-2 py-1 rounded">Ctrl + C</code> - Copy</li>
              <li><code className="bg-white px-2 py-1 rounded">Ctrl + V</code> - Paste</li>
              <li><code className="bg-white px-2 py-1 rounded">Ctrl + Z</code> - Undo</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need More Shortcuts?</h3>
              <p className="text-blue-700">Get our complete Excel shortcuts PDF guide</p>
            </div>
            <Link href="/resources/shortcuts">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                Download PDF Guide
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
    </div>
  );
} 