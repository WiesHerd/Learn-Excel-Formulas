import { useState } from 'react';
import Link from 'next/link';
import * as XLSX from 'xlsx';

export default function DataTypes() {
  const [activeExample, setActiveExample] = useState('numbers');
  const [selectedType, setSelectedType] = useState(null);
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  const [practiceAnswers, setPracticeAnswers] = useState({
    currency: false,
    textToNumber: false,
    dateFormat: false
  });
  const [showHints, setShowHints] = useState({
    currency: false,
    textToNumber: false,
    dateFormat: false
  });

  const examples = {
    numbers: [
      { value: '1234.56', format: 'General', display: '1234.56' },
      { value: '1234.56', format: 'Currency', display: '$1,234.56' },
      { value: '0.15', format: 'Percentage', display: '15%' },
      { value: '1234.56', format: 'Scientific', display: '1.23E+03' }
    ],
    dates: [
      { value: '44987', format: 'Short Date', display: '3/15/2024' },
      { value: '44987', format: 'Long Date', display: 'March 15, 2024' },
      { value: '44987', format: 'Custom', display: '2024-03-15' },
      { value: '44987.5', format: 'Date Time', display: '3/15/2024 12:00 PM' }
    ],
    text: [
      { value: "'123", format: 'Text', display: '123 (stored as text)' },
      { value: 'ABC123', format: 'General', display: 'ABC123' },
      { value: ' Text ', format: 'Trimmed', display: 'Text (spaces removed)' },
      { value: 'HELLO', format: 'Proper', display: 'Hello (case formatted)' }
    ]
  };

  const dataTypeDefinitions = {
    numbers: {
      integers: {
        title: "Integers",
        definition: "Whole numbers without decimal points",
        examples: ["1", "-5", "1000"],
        usage: "Used for counting, indexing, and whole number calculations",
        tips: [
          "Can be positive or negative",
          "No decimal points",
          "Maximum value: 2,147,483,647",
          "Minimum value: -2,147,483,648"
        ]
      },
      decimals: {
        title: "Decimals",
        definition: "Numbers with decimal points for precise values",
        examples: ["1.5", "3.14159", "-0.25"],
        usage: "Used for precise measurements and calculations",
        tips: [
          "Up to 15 significant digits",
          "Can use scientific notation",
          "Avoid using for currency (use Currency format instead)"
        ]
      },
      percentages: {
        title: "Percentages",
        definition: "Numbers displayed as portions of 100",
        examples: ["15%", "100%", "3.5%"],
        usage: "Used for ratios, proportions, and relative values",
        tips: [
          "Enter as decimal (0.15 for 15%)",
          "Can exceed 100%",
          "Useful for growth rates and comparisons"
        ]
      },
      currency: {
        title: "Currency",
        definition: "Numbers formatted with monetary symbols and decimal places",
        examples: ["$1,234.56", "€100.00", "¥1000"],
        usage: "Used for financial values and monetary calculations",
        tips: [
          "Always shows 2 decimal places",
          "Includes thousand separators",
          "Respects regional settings",
          "Prevents rounding errors common with regular decimals"
        ]
      }
    },
    dates: {
      shortDate: {
        title: "Short Date Format",
        definition: "Compact date representation",
        examples: ["1/1/2024", "31/12/2024"],
        usage: "Quick date entry and display",
        tips: [
          "Format varies by region",
          "Can be entered in various ways",
          "Automatically converts to system format"
        ]
      },
      timeFormats: {
        title: "Time Formats",
        definition: "Hours, minutes, and seconds representation",
        examples: ["13:45", "2:30 PM", "09:15:30"],
        usage: "Time tracking and duration calculations",
        tips: [
          "12 or 24-hour format",
          "Can include milliseconds",
          "Supports time zone information"
        ]
      },
      customFormats: {
        title: "Custom Date/Time Formats",
        definition: "User-defined date and time display formats",
        examples: ["DD-MMM-YYYY", "YYYY-MM-DD HH:mm"],
        usage: "Specialized date/time display needs",
        tips: [
          "Use format codes (YYYY, MM, DD)",
          "Can combine date and time",
          "Supports localization"
        ]
      }
    },
    text: {
      strings: {
        title: "Text Strings",
        definition: "Any combination of characters, numbers, and symbols",
        examples: ["Hello", "ABC123", "User #42"],
        usage: "Labels, names, descriptions, and identifiers",
        tips: [
          "Can include any characters",
          "Maximum 32,767 characters",
          "Can't be used in calculations"
        ]
      },
      forcedText: {
        title: "Forced Text",
        definition: "Numbers stored as text (starts with ')",
        examples: ["'001", "'12345"],
        usage: "Preserving leading zeros and special formatting",
        tips: [
          "Start with single quote (')",
          "Prevents automatic number conversion",
          "Useful for codes and IDs"
        ]
      }
    }
  };

  const downloadPracticeFile = () => {
    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Create practice data
      const practiceData = [
        ['Data Types Practice Exercises'],
        [''],
        ['Exercise 1: Number Formatting'],
        ['Original Value', 'Format As'],
        [1234.5678, 'Currency with 2 decimal places'],
        [''],
        ['Exercise 2: Text to Number Conversion'],
        ['Original Value', 'Format As'],
        ["'123", 'Number'],
        [''],
        ['Exercise 3: Date Formatting'],
        ['Original Value', 'Format As'],
        [new Date(), 'YYYY-MM-DD'],
        [''],
        ['Instructions:'],
        ['1. Format cell A5 as currency with 2 decimal places'],
        ['2. Convert the text in cell A9 to a number'],
        ['3. Format the date in cell A13 as YYYY-MM-DD'],
        [''],
        ['Solutions:'],
        ['Exercise 1:', '$1,234.57'],
        ['Exercise 2:', '123'],
        ['Exercise 3:', '2024-03-14'], // Example date
        [''],
        ['Detailed Steps:'],
        [''],
        ['Exercise 1 - Currency Format:'],
        ['1. Select the cell'],
        ['2. Press Ctrl + 1 or right-click → Format Cells'],
        ['3. Choose Currency'],
        ['4. Set decimal places to 2'],
        [''],
        ['Exercise 2 - Text to Number:'],
        ['1. Method 1: Use formula =VALUE(cell)'],
        ['2. Method 2: Multiply by 1'],
        ['3. Method 3: Use Text to Columns'],
        [''],
        ['Exercise 3 - Date Format:'],
        ['1. Select the cell'],
        ['2. Press Ctrl + 1 or right-click → Format Cells'],
        ['3. Choose Custom'],
        ['4. Type "yyyy-mm-dd"']
      ];

      // Create worksheet
      const ws = XLSX.utils.aoa_to_sheet(practiceData);

      // Set column widths
      ws['!cols'] = [{ wch: 30 }, { wch: 40 }];

      // Add some basic styling
      ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }, // Merge title cells
      ];

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Practice Exercises');

      // Create solutions worksheet
      const solutionsData = [
        ['Solutions'],
        [''],
        ['Exercise 1:', '$1,234.57'],
        ['Exercise 2:', '123'],
        ['Exercise 3:', '2024-03-14'], // Example date
        [''],
        ['Detailed Steps:'],
        [''],
        ['Exercise 1 - Currency Format:'],
        ['1. Select the cell'],
        ['2. Press Ctrl + 1 or right-click → Format Cells'],
        ['3. Choose Currency'],
        ['4. Set decimal places to 2'],
        [''],
        ['Exercise 2 - Text to Number:'],
        ['1. Method 1: Use formula =VALUE(cell)'],
        ['2. Method 2: Multiply by 1'],
        ['3. Method 3: Use Text to Columns'],
        [''],
        ['Exercise 3 - Date Format:'],
        ['1. Select the cell'],
        ['2. Press Ctrl + 1 or right-click → Format Cells'],
        ['3. Choose Custom'],
        ['4. Type "yyyy-mm-dd"']
      ];

      // Create solutions worksheet
      const wsSolutions = XLSX.utils.aoa_to_sheet(solutionsData);
      XLSX.utils.book_append_sheet(wb, wsSolutions, 'Solutions');

      // Download the file
      XLSX.writeFile(wb, 'excel-data-types-practice.xlsx');
    } catch (error) {
      console.error('Error creating practice file:', error);
      alert('There was an error creating the practice file. Please try again.');
    }
  };

  const handleCheckTask = (task) => {
    setPracticeAnswers(prev => ({
      ...prev,
      [task]: !prev[task]
    }));
  };

  const checkAnswers = () => {
    const allCompleted = Object.values(practiceAnswers).every(answer => answer);
    
    if (allCompleted) {
      alert("Great job! You've completed all the exercises! 🎉\n\nTry practicing these in Excel now using the downloaded practice file.");
    } else {
      alert("Keep going! Make sure to complete all exercises before checking answers.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Navigation - Aligned with content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link 
          href="/basics" 
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
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
        </Link>
      </div>

      {/* Page Header - Same max width and padding as navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Data Types</h1>
        <p className="text-gray-600">Master Excel's different data types and formatting options</p>
      </div>

      {/* Main Content - Same max width and padding */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Overview Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Understanding Data Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-blue-50 p-6 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedType('numbers')}
            >
              <h3 className="font-medium text-lg mb-3">📊 Numbers</h3>
              <p className="text-gray-600 text-sm mb-2">Values you can calculate with:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="hover:text-blue-600">• Integers</li>
                <li className="hover:text-blue-600">• Decimals</li>
                <li className="hover:text-blue-600">• Percentages</li>
                <li className="hover:text-blue-600">• Currency</li>
              </ul>
            </div>
            <div 
              className="bg-green-50 p-6 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedType('dates')}
            >
              <h3 className="font-medium text-lg mb-3">📅 Dates & Times</h3>
              <p className="text-gray-600 text-sm mb-2">Calendar and clock values:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="hover:text-green-600">• Short/Long dates</li>
                <li className="hover:text-green-600">• Time formats</li>
                <li className="hover:text-green-600">• Custom formats</li>
                <li className="hover:text-green-600">• Regional settings</li>
              </ul>
            </div>
            <div 
              className="bg-purple-50 p-6 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedType('text')}
            >
              <h3 className="font-medium text-lg mb-3">📝 Text</h3>
              <p className="text-gray-600 text-sm mb-2">Labels and identifiers:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="hover:text-purple-600">• Strings</li>
                <li className="hover:text-purple-600">• Forced text</li>
                <li className="hover:text-purple-600">• Special characters</li>
                <li className="hover:text-purple-600">• Text functions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detail Modal */}
        {selectedType && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">
                  {selectedType === 'numbers' && '📊 Number Types'}
                  {selectedType === 'dates' && '📅 Date & Time Types'}
                  {selectedType === 'text' && '📝 Text Types'}
                </h3>
                <button 
                  onClick={() => setSelectedType(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                {Object.entries(dataTypeDefinitions[selectedType]).map(([key, data]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">{data.title}</h4>
                    <p className="text-gray-600 mb-3">{data.definition}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Examples:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {data.examples.map((example, i) => (
                            <li key={i} className="font-mono bg-white px-2 py-1 rounded">{example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Tips:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {data.tips.map((tip, i) => (
                            <li key={i}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Format Examples Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Format Examples</h2>
            <div className="flex space-x-4">
              {['numbers', 'dates', 'text'].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveExample(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${activeExample === type 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {examples[activeExample].map((example, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-1/3">
                  <div className="text-sm font-medium text-gray-700">Value</div>
                  <div className="font-mono text-gray-600">{example.value}</div>
                </div>
                <div className="w-1/3">
                  <div className="text-sm font-medium text-gray-700">Format</div>
                  <div className="text-gray-600">{example.format}</div>
                </div>
                <div className="w-1/3">
                  <div className="text-sm font-medium text-gray-700">Display</div>
                  <div className="text-gray-600">{example.display}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Common Issues & Solutions</h2>

          {/* Numbers Stored as Text */}
          <div className="mb-8">
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600">⚠️</span>
              </div>
              <div>
                <h3 className="font-medium text-lg text-red-600">Numbers Stored as Text</h3>
                <p className="text-gray-600 mb-4">When Excel stores numbers as text, calculations won't work properly</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-3">How to Fix:</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Method 1: Using VALUE Function</h5>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">1. In a new cell, type:</p>
                    <code className="block bg-gray-50 p-2 rounded text-sm">
                      =VALUE(A1)  {/* Replace A1 with your cell reference */}
                    </code>
                    <p className="text-sm text-gray-600">2. Copy the formula down for all affected cells</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Method 2: Text to Columns</h5>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Select the problematic cells</li>
                    <li>2. Go to Data → Text to Columns</li>
                    <li>3. Choose 'Delimited' → Next → Next</li>
                    <li>4. Select 'General' under Column data format</li>
                    <li>5. Click Finish</li>
                  </ol>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Method 3: Paste Special</h5>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Select an empty cell and type 1</li>
                    <li>2. Copy this cell</li>
                    <li>3. Select your text numbers</li>
                    <li>4. Right-click → Paste Special</li>
                    <li>5. Choose 'Multiply' → OK</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Incorrect Date Formats */}
          <div>
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600">⚠️</span>
              </div>
              <div>
                <h3 className="font-medium text-lg text-red-600">Incorrect Date Formats</h3>
                <p className="text-gray-600 mb-4">When dates are in inconsistent formats, sorting and calculations fail</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-3">How to Fix:</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Method 1: Standardize Format</h5>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Select the date columns</li>
                    <li>2. Right-click → Format Cells</li>
                    <li>3. Choose 'Date' category</li>
                    <li>4. Select your preferred format</li>
                    <li>5. Click OK</li>
                  </ol>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Method 2: Using TEXT Function</h5>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">For consistent formatting, use:</p>
                    <code className="block bg-gray-50 p-2 rounded text-sm">
                      =TEXT(A1, "mm/dd/yyyy")  {/* Or your preferred format */}
                    </code>
                    <p className="text-sm text-gray-600">Common format codes:</p>
                    <ul className="list-disc ml-5 text-sm text-gray-600">
                      <li>"mm/dd/yyyy" - 12/31/2024</li>
                      <li>"dd-mmm-yyyy" - 31-Dec-2024</li>
                      <li>"yyyy-mm-dd" - 2024-12-31</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Method 3: Regional Settings</h5>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Go to Windows Settings</li>
                    <li>2. Time & Language → Region</li>
                    <li>3. Set your preferred date format</li>
                    <li>4. Restart Excel</li>
                    <li>5. Re-enter problematic dates</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercise Section */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl">✍️</span>
            <h2 className="text-xl font-semibold">Practice Exercises</h2>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Let's Practice Data Types!</h3>
            
            <div className="space-y-6 mb-6">
              {/* Numbers Exercise */}
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-3">1. Number Formatting</h4>
                <div className="space-y-3">
                  <p className="text-gray-600">Format these values:</p>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500 mb-1">Original:</p>
                      <code className="text-gray-700">1234.5678</code>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500 mb-1">Goal:</p>
                      <code className="text-gray-700">$1,234.57</code>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Steps:</p>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Select the cell</li>
                      <li>Use Currency format</li>
                      <li>Set to 2 decimal places</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Text to Number Exercise */}
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-3">2. Converting Text to Numbers</h4>
                <div className="space-y-3">
                  <p className="text-gray-600">Convert this text to a number:</p>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500 mb-1">Original:</p>
                      <code className="text-gray-700">'123'</code>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500 mb-1">Goal:</p>
                      <code className="text-gray-700">123</code>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Try these methods:</p>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Use the VALUE function</li>
                      <li>Or multiply by 1</li>
                      <li>Or use Text to Columns</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Date Exercise */}
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-3">3. Date Formatting</h4>
                <div className="space-y-3">
                  <p className="text-gray-600">Format today's date:</p>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500 mb-1">Original:</p>
                      <code className="text-gray-700">3/14/2024</code>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500 mb-1">Goal:</p>
                      <code className="text-gray-700">2024-03-14</code>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">Steps:</p>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Select the cell</li>
                      <li>Open Format Cells</li>
                      <li>Choose Custom format</li>
                      <li>Enter "yyyy-mm-dd"</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setShowPracticeModal(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Practice
              </button>
              <button 
                onClick={downloadPracticeFile}
                className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                Download Practice File
              </button>
            </div>
          </div>
        </section>

        {/* Practice Modal */}
        {showPracticeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6">
              <h3 className="text-xl font-bold mb-4">Interactive Practice Mode</h3>
              <p className="text-gray-600 mb-6">
                Open Excel and follow along with these exercises. Click "Need a hint?" if you get stuck.
              </p>
              
              <div className="space-y-6 mb-6">
                {/* Currency Exercise */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        checked={practiceAnswers.currency}
                        onChange={() => handleCheckTask('currency')}
                        className="form-checkbox h-5 w-5 text-green-600" 
                      />
                      <span>Format 1234.5678 as currency with 2 decimal places</span>
                    </div>
                    <button
                      onClick={() => setShowHints(prev => ({ ...prev, currency: !prev.currency }))}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Need a hint?
                    </button>
                  </div>
                  {showHints.currency && (
                    <div className="mt-2 bg-blue-50 p-3 rounded-lg text-sm">
                      <p className="font-medium text-blue-800 mb-2">💡 Hint:</p>
                      <ol className="text-blue-700 space-y-1 list-decimal ml-4">
                        <li>Select the cell with 1234.5678</li>
                        <li>Press Ctrl + 1 or right-click → Format Cells</li>
                        <li>Choose "Currency" category</li>
                        <li>Set "Decimal places" to 2</li>
                        <li>Click OK</li>
                      </ol>
                    </div>
                  )}
                </div>

                {/* Text to Number Exercise */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        checked={practiceAnswers.textToNumber}
                        onChange={() => handleCheckTask('textToNumber')}
                        className="form-checkbox h-5 w-5 text-green-600" 
                      />
                      <span>Convert text '123' to a number using VALUE function</span>
                    </div>
                    <button
                      onClick={() => setShowHints(prev => ({ ...prev, textToNumber: !prev.textToNumber }))}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Need a hint?
                    </button>
                  </div>
                  {showHints.textToNumber && (
                    <div className="mt-2 bg-blue-50 p-3 rounded-lg text-sm">
                      <p className="font-medium text-blue-800 mb-2">💡 Hint:</p>
                      <ol className="text-blue-700 space-y-1 list-decimal ml-4">
                        <li>In a new cell, type: =VALUE("123")</li>
                        <li>Or multiply the cell by 1: =A1*1</li>
                        <li>Or use Text to Columns: Data → Text to Columns</li>
                      </ol>
                    </div>
                  )}
                </div>

                {/* Date Format Exercise */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        checked={practiceAnswers.dateFormat}
                        onChange={() => handleCheckTask('dateFormat')}
                        className="form-checkbox h-5 w-5 text-green-600" 
                      />
                      <span>Format today's date in YYYY-MM-DD format</span>
                    </div>
                    <button
                      onClick={() => setShowHints(prev => ({ ...prev, dateFormat: !prev.dateFormat }))}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Need a hint?
                    </button>
                  </div>
                  {showHints.dateFormat && (
                    <div className="mt-2 bg-blue-50 p-3 rounded-lg text-sm">
                      <p className="font-medium text-blue-800 mb-2">💡 Hint:</p>
                      <ol className="text-blue-700 space-y-1 list-decimal ml-4">
                        <li>Select the cell with the date</li>
                        <li>Press Ctrl + 1 or right-click → Format Cells</li>
                        <li>Choose "Custom" category</li>
                        <li>Type this format: yyyy-mm-dd</li>
                        <li>Click OK</li>
                      </ol>
                    </div>
                  )}
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
                  onClick={checkAnswers}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    Object.values(practiceAnswers).every(answer => answer)
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!Object.values(practiceAnswers).every(answer => answer)}
                >
                  Check Answers
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 