import { useState } from 'react';
import Link from 'next/link';

export default function ShortcutsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('pc');

  const handleDownload = () => {
    // For now, let's create a simple text file
    const content = `Excel Shortcuts Guide

Windows Shortcuts:
Copy: Ctrl + C
Paste: Ctrl + V
Save: Ctrl + S
Undo: Ctrl + Z

Mac Shortcuts:
Copy: ⌘ + C
Paste: ⌘ + V
Save: ⌘ + S
Undo: ⌘ + Z`;

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'excel-shortcuts.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">Excel Shortcuts</h1>

          {/* Download Button */}
          <div className="mb-8">
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Shortcuts Guide
            </button>
          </div>

          {/* Rest of your shortcuts display code */}
          {/* ... */}
        </div>
      </main>
    </div>
  );
}
