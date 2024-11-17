import Link from 'next/link';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { interfacePracticeWorkbook } from '../../data/practiceWorkbooks/interface-practice';

export default function ExcelInterface() {
  const [activeTab, setActiveTab] = useState('navigation');
  const [showPracticeModal, setShowPracticeModal] = useState(false);

  const downloadWorkbook = (type) => {
    try {
      const wb = XLSX.utils.book_new();
      const practiceData = interfacePracticeWorkbook.sheets[0].data;
      
      // Create the main practice sheet
      const ws = XLSX.utils.aoa_to_sheet(practiceData);
      XLSX.utils.book_append_sheet(wb, ws, "Practice Sheet");
      
      // Create the tasks sheet
      const tasksWs = XLSX.utils.aoa_to_sheet([
        ["Practice Tasks"],
        [""],
        ...interfacePracticeWorkbook.sheets[0].tasks.map(task => [task])
      ]);
      XLSX.utils.book_append_sheet(wb, tasksWs, "Tasks");

      // Generate and download the file
      XLSX.writeFile(wb, `excel-practice-${type}.xlsx`);
    } catch (error) {
      console.error('Error generating workbook:', error);
      alert('There was an error generating the practice file. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
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

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Excel Interface</h1>
          <p className="text-xl text-gray-600">Master Excel's interface and essential shortcuts</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Getting Started with Excel's Interface</h2>
          <p className="text-gray-600 mb-6">
            Understanding Excel's interface is crucial for efficient spreadsheet work. We'll cover three main areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">1. Basic Navigation</h3>
              <p className="text-sm text-gray-600">Learn how to move around quickly using keyboard shortcuts</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">2. The Ribbon</h3>
              <p className="text-sm text-gray-600">Understand Excel's command center and its organization</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">3. Quick Access Tools</h3>
              <p className="text-sm text-gray-600">Set up your workspace for maximum efficiency</p>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Excel Navigation Fundamentals</h2>
          
          {/* Basic Movement */}
          <div className="mb-8">
            <h3 className="font-medium text-lg mb-4">Basic Cell Movement</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-600 mb-4">The most common ways to move around in Excel:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <kbd className="bg-white px-2 py-1 rounded border shadow-sm">Arrow Keys</kbd>
                  <span className="ml-3 text-gray-600">Move one cell at a time</span>
                </div>
                <div className="flex items-center">
                  <kbd className="bg-white px-2 py-1 rounded border shadow-sm">Tab</kbd>
                  <span className="ml-3 text-gray-600">Move one cell right</span>
                </div>
                <div className="flex items-center">
                  <kbd className="bg-white px-2 py-1 rounded border shadow-sm">Enter</kbd>
                  <span className="ml-3 text-gray-600">Move one cell down</span>
                </div>
                <div className="flex items-center">
                  <kbd className="bg-white px-2 py-1 rounded border shadow-sm">Page Up/Down</kbd>
                  <span className="ml-3 text-gray-600">Move one screen up/down</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Navigation */}
          <div className="mb-8">
            <h3 className="font-medium text-lg mb-4">Advanced Navigation Shortcuts</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-4">Power user shortcuts for faster navigation:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <div className="flex items-center mb-2">
                    <kbd className="bg-gray-100 px-2 py-1 rounded border shadow-sm">Ctrl + ↑</kbd>
                    <span className="ml-3 text-gray-600">Jump to top of column</span>
                  </div>
                  <p className="text-sm text-gray-500">Useful for quickly reaching the beginning of data</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="flex items-center mb-2">
                    <kbd className="bg-gray-100 px-2 py-1 rounded border shadow-sm">Ctrl + ↓</kbd>
                    <span className="ml-3 text-gray-600">Jump to bottom of column</span>
                  </div>
                  <p className="text-sm text-gray-500">Great for finding the last row of data</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="flex items-center mb-2">
                    <kbd className="bg-gray-100 px-2 py-1 rounded border shadow-sm">Ctrl + Home</kbd>
                    <span className="ml-3 text-gray-600">Go to cell A1</span>
                  </div>
                  <p className="text-sm text-gray-500">Return to the start of your worksheet</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="flex items-center mb-2">
                    <kbd className="bg-gray-100 px-2 py-1 rounded border shadow-sm">Ctrl + End</kbd>
                    <span className="ml-3 text-gray-600">Go to last used cell</span>
                  </div>
                  <p className="text-sm text-gray-500">Jump to the end of your data range</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ribbon Interface Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Understanding the Ribbon</h2>
          
          <div className="space-y-6">
            {/* What is the Ribbon */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">What is the Ribbon?</h3>
              <p className="text-gray-600 mb-4">
                The Ribbon is Excel's main command center, organized into tabs and groups of related commands.
                Each tab contains specific tools for different tasks.
              </p>
            </div>

            {/* Main Ribbon Tabs */}
            <div>
              <h3 className="font-medium mb-4">Main Ribbon Tabs Explained</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-blue-600 mb-2">Home Tab</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clipboard operations (cut, copy, paste)</li>
                    <li>• Font formatting</li>
                    <li>• Number formatting</li>
                    <li>• Cell styles and formatting</li>
                    <li>• Basic data operations</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-green-600 mb-2">Insert Tab</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tables and PivotTables</li>
                    <li>• Charts and graphs</li>
                    <li>• Illustrations and shapes</li>
                    <li>• Links and text boxes</li>
                    <li>• Headers and footers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Toolbar Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Customizing Your Quick Access Toolbar</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">What is the Quick Access Toolbar?</h3>
              <p className="text-gray-600 mb-4">
                The Quick Access Toolbar (QAT) is a customizable toolbar that gives you instant access to your most-used commands,
                regardless of which Ribbon tab is currently active.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">How to Customize Your QAT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-purple-600 mb-2">Adding Commands</h4>
                  <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                    <li>Right-click any Ribbon command</li>
                    <li>Select "Add to Quick Access Toolbar"</li>
                    <li>The command now appears in your QAT</li>
                  </ol>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-purple-600 mb-2">Recommended Commands</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Save</li>
                    <li>• Undo/Redo</li>
                    <li>• Sort A to Z</li>
                    <li>• Filter</li>
                    <li>• Format Painter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Practice What You've Learned</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Exercise 1: Navigation Challenge</h3>
              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li className="text-gray-700">Open a new Excel workbook</li>
                <li className="text-gray-700">Navigate to cell Z100 using keyboard shortcuts</li>
                <li className="text-gray-700">Return to cell A1 with a single shortcut</li>
                <li className="text-gray-700">Move to the last cell in column A</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Exercise 2: Ribbon Exploration</h3>
              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li className="text-gray-700">Find the "Format Painter" in the Home tab</li>
                <li className="text-gray-700">Locate the "PivotTable" command</li>
                <li className="text-gray-700">Find where to insert a chart</li>
                <li className="text-gray-700">Identify all cell alignment options</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Exercise 3: Quick Access Toolbar Setup</h3>
              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li className="text-gray-700">Add "Sort A to Z" to your Quick Access Toolbar</li>
                <li className="text-gray-700">Add "Filter" to your Quick Access Toolbar</li>
                <li className="text-gray-700">Rearrange the order of your QAT commands</li>
                <li className="text-gray-700">Remove a command from the QAT</li>
              </ol>
            </div>

            <button
              onClick={() => setShowPracticeModal(true)}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
            >
              Start Practicing
            </button>
          </div>
        </section>

        {/* Practice Materials */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Practice Materials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Navigation Practice */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-4">Navigation Practice Workbook</h3>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  This workbook contains 100 products to help you practice Excel navigation. Here's what you'll learn:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">1</span>
                    <div>
                      <h4 className="font-medium mb-1">Navigation Practice</h4>
                      <p className="text-sm text-gray-600">Learn to quickly move through large datasets using:</p>
                      <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                        <li>Ctrl + Arrow keys to jump between data</li>
                        <li>Ctrl + Home to return to start</li>
                        <li>Ctrl + End to find last cell</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">2</span>
                    <div>
                      <h4 className="font-medium mb-1">Sorting & Filtering</h4>
                      <p className="text-sm text-gray-600">Practice organizing data by:</p>
                      <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                        <li>Sorting products by price</li>
                        <li>Filtering by category</li>
                        <li>Finding specific items</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">3</span>
                    <div>
                      <h4 className="font-medium mb-1">Format Painter</h4>
                      <p className="text-sm text-gray-600">Learn to copy formatting by:</p>
                      <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                        <li>Formatting one cell as an example</li>
                        <li>Using Format Painter to copy styles</li>
                        <li>Applying consistent formatting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => downloadWorkbook('navigation')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Navigation Practice
              </button>
            </div>

            {/* Ribbon Practice */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-4">Ribbon Commands Practice</h3>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  This workbook contains sales data to help you practice using Excel's ribbon commands. You'll learn:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mr-3">1</span>
                    <div>
                      <h4 className="font-medium mb-1">Table Formatting</h4>
                      <p className="text-sm text-gray-600">Transform raw data into a professional table:</p>
                      <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                        <li>Apply table styles from the Home tab</li>
                        <li>Format numbers as currency</li>
                        <li>Add totals row and averages</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mr-3">2</span>
                    <div>
                      <h4 className="font-medium mb-1">Chart Creation</h4>
                      <p className="text-sm text-gray-600">Visualize the sales data:</p>
                      <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                        <li>Create a column chart of quarterly sales</li>
                        <li>Add chart title and labels</li>
                        <li>Customize chart colors and style</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mr-3">3</span>
                    <div>
                      <h4 className="font-medium mb-1">Conditional Formatting</h4>
                      <p className="text-sm text-gray-600">Highlight important data:</p>
                      <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                        <li>Highlight top 10% of sales</li>
                        <li>Use color scales for trends</li>
                        <li>Add data bars to compare values</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => downloadWorkbook('ribbon')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Ribbon Practice
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Practice Modal */}
      {showPracticeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6">
            <h3 className="text-xl font-bold mb-4">Interactive Practice Mode</h3>
            <p className="text-gray-600 mb-6">
              Open Excel and follow along with these exercises. Check off each task as you complete it.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span>Navigate to cell Z100 using Ctrl + Arrow keys</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span>Return to A1 using Ctrl + Home</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span>Add Sort A-Z to Quick Access Toolbar</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span>Find and use the Format Painter</span>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowPracticeModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Mark All Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 