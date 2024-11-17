import Link from 'next/link';
import { useState } from 'react';
import { utils as XLSXUtils, write as XLSXWrite } from 'xlsx';

export default function DataOrganization() {
  const [isLoading, setIsLoading] = useState({ practice: false });

  const startPractice = async () => {
    setIsLoading(prev => ({ ...prev, practice: true }));
    try {
      const wb = XLSXUtils.book_new();
      const practiceData = [
        ['Name', 'Region', 'Start Date', 'Quarter', 'Sales'],
        ['John Smith', 'North', '2024-01-15', 'Q1', 45000],
        ['Jane Doe', 'South', '2024-02-01', 'Q1', 52000],
        ['Bob Wilson', 'East', '2024-03-01', 'Q1', 38000],
        [''],
        ['Raw Data (To Be Organized):'],
        ['John Smith - North Region | Q1 Sales: $45,000 (Started Jan 15)'],
        ['Jane Doe from South Region - Joined Feb 1st | Q1 Sales: $52,000'],
        ['Bob Wilson (East) started March 1 | Sales this quarter: $38,000'],
      ];

      const ws = XLSXUtils.aoa_to_sheet(practiceData);
      XLSXUtils.book_append_sheet(wb, ws, 'Practice Exercise');
      const wbout = XLSXWrite(wb, { bookType: 'xlsx', type: 'binary' });
      const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'excel-practice-exercise.xlsx';
      a.click();
      URL.revokeObjectURL(url);

      setTimeout(() => {
        alert('Practice file has been downloaded! Please open it in Excel to begin the exercise.');
      }, 1000);

    } catch (error) {
      console.error('Failed to generate practice file:', error);
      alert('Failed to download practice file. Please try again.');
    } finally {
      setIsLoading(prev => ({ ...prev, practice: false }));
    }
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  };

  const openPracticeExercise = () => {
    startPractice();
  };

  // Add this new component for expandable sections
  const ExpandableSection = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
      <div className="border rounded-lg mb-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
        >
          <span className="font-medium">{title}</span>
          <svg 
            className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded && (
          <div className="p-4 border-t">
            {children}
          </div>
        )}
      </div>
    );
  };

  const ExpandableCard = ({ title, icon, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="border rounded-lg">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center space-x-2">
            <span>{icon}</span>
            <span className="font-medium">{title}</span>
          </div>
          <svg 
            className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="p-4 border-t">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Banner */}
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

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Data Organization</h1>
          <p className="text-xl text-gray-600">Learn how to structure your data effectively</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Data Organization Principles</h2>

          <div className="space-y-6">
            {/* Quick Overview Panel - Always Visible */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-medium mb-4">Key Data Organization Principles:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Structure */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <span>📝</span>
                    <h4 className="font-medium">Structure</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• One header row</li>
                    <li>• Consistent data types</li>
                    <li>• No merged cells</li>
                  </ul>
                </div>

                {/* Data Entry */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <span>✍️</span>
                    <h4 className="font-medium">Data Entry</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• One piece per cell</li>
                    <li>• Consistent formatting</li>
                    <li>• Complete records</li>
                  </ul>
                </div>

                {/* Goals */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <span>🎯</span>
                    <h4 className="font-medium">Goals</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Easy analysis</li>
                    <li>• Error prevention</li>
                    <li>• Data integrity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Sections - Collapsible */}
            <div className="space-y-4">
              {/* 1. Basic Table Structure */}
              <ExpandableSection title="1. Basic Table Structure">
                <div className="space-y-4">
                  {/* Header Row Requirements */}
                  <ExpandableCard
                    title="Header Row Requirements"
                    icon="📝"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Why It Matters:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Makes sorting and filtering work correctly</li>
                          <li>Enables proper PivotTable creation</li>
                          <li>Allows Excel to auto-detect your table structure</li>
                          <li>Makes formulas more reliable and easier to write</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <ul className="list-disc ml-4 space-y-2">
                            <li>Clear, descriptive column names</li>
                            <li>No blank header cells (use meaningful names)</li>
                            <li>Unique names for each column</li>
                            <li>Keep headers in row 1 whenever possible</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Best Practices:</h4>
                          <ul className="list-disc ml-4 space-y-2">
                            <li>Keep names simple and clear</li>
                            <li>Use underscores instead of spaces</li>
                            <li>Be consistent with naming patterns</li>
                            <li>Consider using prefixes for related columns</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Consistent Data Types */}
                  <ExpandableCard
                    title="Consistent Data Types"
                    icon="🔤"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Why Consistent Data Types:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Prevent calculation errors (Excel can't add text!)</li>
                          <li>Enable proper sorting (mixed types sort unpredictably)</li>
                          <li>Allow for accurate filtering and analysis</li>
                          <li>Make data validation possible</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-medium mb-2">Examples:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium text-sm mb-1">Numbers:</h5>
                            <div className="text-sm space-y-1">
                              <p>✅ 1000.00</p>
                              <p>✅ 1500.00</p>
                              <p>❌ "1,000 USD"</p>
                              <p>❌ "~1500"</p>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">Dates:</h5>
                            <div className="text-sm space-y-1">
                              <p>✅ 2024-01-15</p>
                              <p>✅ 2024-02-01</p>
                              <p>❌ "Jan 15th"</p>
                              <p>❌ "Next Month"</p>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">Text:</h5>
                            <div className="text-sm space-y-1">
                              <p>✅ ABC123</p>
                              <p>✅ Product_A</p>
                              <p>❌ "100 units"</p>
                              <p>❌ "See notes"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* No Merged Cells */}
                  <ExpandableCard
                    title="No Merged Cells in Data Area"
                    icon="⚠️"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Why Merged Cells are Problematic:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Break sorting and filtering functionality</li>
                          <li>Make formulas extremely complicated and error-prone</li>
                          <li>Prevent proper copy/paste operations</li>
                          <li>Cause issues with data imports/exports</li>
                          <li>Make programmatic data access difficult</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Instead of Merging Cells:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Repeat values in each row if needed</li>
                          <li>Use proper column structure</li>
                          <li>Save formatting for reports, not data storage</li>
                          <li>Consider using Excel's grouping features</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Continue with more cards for:
                      - No blank rows or columns
                      - Complete records
                      Each with full details from original content */}
                </div>
              </ExpandableSection>

              {/* 2. Data Entry Guidelines */}
              <ExpandableSection title="2. Data Entry Guidelines">
                <div className="space-y-4">
                  {/* One Piece of Information Per Cell */}
                  <ExpandableCard
                    title="One Piece of Information Per Cell"
                    icon="📊"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Why This is Crucial:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Enables proper data analysis and sorting</li>
                          <li>Makes data extraction and manipulation easier</li>
                          <li>Allows for detailed filtering</li>
                          <li>Improves data quality and usability</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded">
                          <h4 className="font-medium mb-2">❌ Poor Structure:</h4>
                          <ul className="list-disc ml-4 space-y-2 text-sm">
                            <li>"John Smith"
                              <p className="text-gray-600 ml-2">Combines first and last name</p>
                            </li>
                            <li>"123 Main St, City, State 12345"
                              <p className="text-gray-600 ml-2">Multiple address components</p>
                            </li>
                            <li>"$1,000 (20% discount)"
                              <p className="text-gray-600 ml-2">Price and discount combined</p>
                            </li>
                            <li>"Jan 2024 - March 2024"
                              <p className="text-gray-600 ml-2">Date range in one cell</p>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded">
                          <h4 className="font-medium mb-2">✅ Good Structure:</h4>
                          <ul className="list-disc ml-4 space-y-2 text-sm">
                            <li>Separate name columns
                              <p className="text-gray-600 ml-2">First_Name: "John" | Last_Name: "Smith"</p>
                            </li>
                            <li>Address components
                              <p className="text-gray-600 ml-2">Street, City, State, ZIP in separate columns</p>
                            </li>
                            <li>Price and discount separated
                              <p className="text-gray-600 ml-2">Amount: 1000 | Discount_Percent: 20</p>
                            </li>
                            <li>Date range split
                              <p className="text-gray-600 ml-2">Start_Date: 2024-01-01 | End_Date: 2024-03-31</p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Benefits of Proper Data Separation:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Create targeted filters (e.g., by city or state)</li>
                          <li>Sort by individual components</li>
                          <li>Perform calculations on clean numerical data</li>
                          <li>Generate accurate reports and analytics</li>
                          <li>Enable proper data relationships</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Consistent Formatting */}
                  <ExpandableCard
                    title="Consistent Formatting"
                    icon="🎨"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Why Consistency Matters:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Ensures accurate sorting and filtering</li>
                          <li>Prevents calculation errors</li>
                          <li>Makes data validation possible</li>
                          <li>Improves data reliability</li>
                          <li>Simplifies data maintenance</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Date Formatting:</h4>
                          <div className="bg-white p-4 rounded border">
                            <div className="text-red-600 mb-2">❌ Inconsistent:</div>
                            <ul className="list-disc ml-4 text-sm space-y-1">
                              <li>Jan 1, 2024</li>
                              <li>2024-01-02</li>
                              <li>1/3/24</li>
                              <li>January 4th 2024</li>
                            </ul>
                            <div className="text-green-600 mt-3 mb-2">✅ Consistent:</div>
                            <ul className="list-disc ml-4 text-sm space-y-1">
                              <li>2024-01-01</li>
                              <li>2024-01-02</li>
                              <li>2024-01-03</li>
                              <li>2024-01-04</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Number Formatting:</h4>
                          <div className="bg-white p-4 rounded border">
                            <div className="text-red-600 mb-2">❌ Inconsistent:</div>
                            <ul className="list-disc ml-4 text-sm space-y-1">
                              <li>1000</li>
                              <li>1,500.00</li>
                              <li>2k</li>
                              <li>$2,500</li>
                            </ul>
                            <div className="text-green-600 mt-3 mb-2">✅ Consistent:</div>
                            <ul className="list-disc ml-4 text-sm space-y-1">
                              <li>1000.00</li>
                              <li>1500.00</li>
                              <li>2000.00</li>
                              <li>2500.00</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Pro Tips for Consistency:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Use Data Validation to enforce formats
                            <ul className="list-circle ml-4 text-sm mt-1">
                              <li>Set up allowed values or patterns</li>
                              <li>Prevent invalid entries</li>
                            </ul>
                          </li>
                          <li>Create input forms for data entry
                            <ul className="list-circle ml-4 text-sm mt-1">
                              <li>Standardize the entry process</li>
                              <li>Reduce human error</li>
                            </ul>
                          </li>
                          <li>Document your formatting standards
                            <ul className="list-circle ml-4 text-sm mt-1">
                              <li>Create a style guide</li>
                              <li>Share with all users</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Continue with more cards... */}
                </div>
              </ExpandableSection>

              {/* 3. Formatting Standards */}
              <ExpandableSection title="3. Formatting Standards">
                <div className="space-y-4">
                  {/* Date Formatting */}
                  <ExpandableCard
                    title="Date Formatting Standards"
                    icon="📅"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Why Date Formatting Matters:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Ensures proper sorting and filtering</li>
                          <li>Prevents regional format conflicts</li>
                          <li>Enables accurate date calculations</li>
                          <li>Maintains data consistency across systems</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded border">
                          <h4 className="font-medium mb-2">Recommended Format: YYYY-MM-DD</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="text-green-600">✅ Good Examples:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>2024-01-15</li>
                                <li>2024-02-01</li>
                                <li>2024-12-31</li>
                              </ul>
                            </div>
                            <div>
                              <div className="text-red-600">❌ Avoid:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>15/01/24 (ambiguous)</li>
                                <li>Jan 15, 2024 (text format)</li>
                                <li>15-Jan-24 (mixed format)</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded">
                          <h4 className="font-medium mb-2">Pro Tips:</h4>
                          <ul className="list-disc ml-4 space-y-2">
                            <li>Use Excel's date format: yyyy-mm-dd</li>
                            <li>Store dates as actual date values</li>
                            <li>Use data validation for date entries</li>
                            <li>Consider time zones for international data</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Number Formatting */}
                  <ExpandableCard
                    title="Number Formatting Standards"
                    icon="🔢"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Key Principles:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Store raw numbers without formatting</li>
                          <li>Use consistent decimal places</li>
                          <li>Avoid mixing units in the same column</li>
                          <li>Separate currency symbols from values</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Common Number Types:</h4>
                          <div className="space-y-4">
                            <div className="bg-white p-3 rounded border">
                              <h5 className="font-medium mb-1">Currency</h5>
                              <div className="text-red-600">❌ Wrong:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>$1,234.56</li>
                                <li>1234.56 USD</li>
                              </ul>
                              <div className="text-green-600 mt-2">✅ Right:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>1234.56 (use formatting for display)</li>
                                <li>Separate currency column if needed</li>
                              </ul>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <h5 className="font-medium mb-1">Percentages</h5>
                              <div className="text-red-600">❌ Wrong:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>50%</li>
                                <li>"50 percent"</li>
                              </ul>
                              <div className="text-green-600 mt-2">✅ Right:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>0.50 (for 50%)</li>
                                <li>Use percentage formatting for display</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Best Practices:</h4>
                          <div className="space-y-4">
                            <div className="bg-blue-50 p-3 rounded">
                              <h5 className="font-medium mb-1">Decimal Places</h5>
                              <ul className="list-disc ml-4 text-sm">
                                <li>Be consistent within columns</li>
                                <li>Consider data precision needs</li>
                                <li>Document rounding rules</li>
                              </ul>
                            </div>

                            <div className="bg-blue-50 p-3 rounded">
                              <h5 className="font-medium mb-1">Units</h5>
                              <ul className="list-disc ml-4 text-sm">
                                <li>Use separate columns for units</li>
                                <li>Convert to standard units</li>
                                <li>Document unit conventions</li>
                              </ul>
                            </div>

                            <div className="bg-yellow-50 p-3 rounded">
                              <h5 className="font-medium mb-1">Common Pitfalls:</h5>
                              <ul className="list-disc ml-4 text-sm">
                                <li>Mixing text and numbers</li>
                                <li>Inconsistent decimal places</li>
                                <li>Using commas in numbers</li>
                                <li>Embedding units in values</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Text Formatting */}
                  <ExpandableCard
                    title="Text Formatting Standards"
                    icon="📝"
                  >
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Text Formatting Principles:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Maintain consistent case formatting</li>
                          <li>Remove unnecessary whitespace</li>
                          <li>Standardize special characters</li>
                          <li>Handle missing values properly</li>
                          <li>Use clear naming conventions</li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded border">
                          <h4 className="font-medium mb-2">Case Formatting Examples:</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="font-medium text-sm">Product Codes:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li className="text-green-600">✅ UPPER CASE: "ABC123"</li>
                                <li className="text-red-600">❌ Mixed Case: "Abc123"</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-medium text-sm">Names:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li className="text-green-600">✅ Proper Case: "John Smith"</li>
                                <li className="text-red-600">❌ Inconsistent: "john SMITH"</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-medium text-sm">Categories:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li className="text-green-600">✅ Title Case: "Office Supplies"</li>
                                <li className="text-red-600">❌ Mixed: "OFFICE supplies"</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded border">
                          <h4 className="font-medium mb-2">Special Characters & Spaces:</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="text-red-600">❌ Problematic:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>Smart quotes: "", ''</li>
                                <li>Em dashes: —</li>
                                <li>Multiple spaces</li>
                                <li>Leading/trailing spaces</li>
                                <li>Non-breaking spaces</li>
                              </ul>
                            </div>
                            <div>
                              <div className="text-green-600">✅ Recommended:</div>
                              <ul className="list-disc ml-4 text-sm">
                                <li>Straight quotes: ", '</li>
                                <li>Regular hyphens: -</li>
                                <li>Single spaces only</li>
                                <li>Trimmed text</li>
                                <li>Standard spaces</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Missing Value Standards:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-sm mb-1">❌ Avoid Using:</h5>
                            <ul className="list-disc ml-4 text-sm">
                              <li>"N/A" or "NA"</li>
                              <li>"None" or "nil"</li>
                              <li>0 (for non-numeric)</li>
                              <li>Spaces or dashes</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-1">✅ Instead Use:</h5>
                            <ul className="list-disc ml-4 text-sm">
                              <li>Leave cell empty</li>
                              <li>Use consistent NULL indicator</li>
                              <li>Document missing value policy</li>
                              <li>Use data validation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Pro Tips:</h4>
                        <ul className="list-disc ml-4 space-y-2">
                          <li>Use Excel's CLEAN function to remove non-printing characters</li>
                          <li>Apply TRIM function to standardize spaces</li>
                          <li>Create data validation rules for text formatting</li>
                          <li>Document text formatting standards in a style guide</li>
                          <li>Use conditional formatting to highlight inconsistencies</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableCard>

                  {/* Continue with more formatting standards... */}
                </div>
              </ExpandableSection>

              {/* New Getting Started Section */}
              <ExpandableCard title="Getting Started Steps" icon="1️⃣">
                <div className="space-y-4">
                  <ol className="list-decimal ml-4 space-y-2">
                    <li className="font-medium">Start with a clean sheet
                      <p className="font-normal text-gray-600 mt-1">Remove any existing data or formatting</p>
                    </li>
                    <li className="font-medium">Create clear column headers in Row 1
                      <p className="font-normal text-gray-600 mt-1">Use simple, descriptive names without spaces</p>
                    </li>
                    <li className="font-medium">Enter data consistently row by row
                      <p className="font-normal text-gray-600 mt-1">Keep similar data in the same format</p>
                    </li>
                    <li className="font-medium">Keep one type of information per column
                      <p className="font-normal text-gray-600 mt-1">Don't mix different types of data</p>
                    </li>
                    <li className="font-medium">Avoid empty rows between data
                      <p className="font-normal text-gray-600 mt-1">Keep your data continuous</p>
                    </li>
                  </ol>
                </div>
              </ExpandableCard>

              {/* New Common Mistakes Section */}
              <ExpandableCard title="Common Excel Mistakes to Avoid" icon="⚠️">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded">
                      <h4 className="font-medium mb-2">❌ What Not to Do:</h4>
                      <ul className="list-disc ml-4 space-y-2">
                        <li>Merging cells
                          <p className="text-sm text-gray-600 mt-1">Makes sorting and filtering impossible</p>
                        </li>
                        <li>Using spaces in column names
                          <p className="text-sm text-gray-600 mt-1">Causes formula errors</p>
                        </li>
                        <li>Mixing data types
                          <p className="text-sm text-gray-600 mt-1">Breaks calculations</p>
                        </li>
                        <li>Using color coding instead of data
                          <p className="text-sm text-gray-600 mt-1">Can't be filtered or analyzed</p>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-medium mb-2">✅ Do This Instead:</h4>
                      <ul className="list-disc ml-4 space-y-2">
                        <li>Keep cells separate
                          <p className="text-sm text-gray-600 mt-1">Use proper columns for organization</p>
                        </li>
                        <li>Use underscores in names
                          <p className="text-sm text-gray-600 mt-1">Example: First_Name</p>
                        </li>
                        <li>Keep consistent data types
                          <p className="text-sm text-gray-600 mt-1">Numbers with numbers, text with text</p>
                        </li>
                        <li>Use actual data columns
                          <p className="text-sm text-gray-600 mt-1">Add status or category columns</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ExpandableCard>

              {/* New Practice Exercise Section */}
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📝</span>
                  <div>
                    <h3 className="font-medium mb-2">Practice Exercise</h3>
                    <p className="text-gray-600 mb-4">
                      Download this simple practice sheet and try organizing it using the principles you've learned:
                    </p>
                    <button
                      onClick={openPracticeExercise}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Download Practice Sheet
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue with your existing sections... */}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl">📚</span>
            <h2 className="text-xl font-semibold">Additional Learning Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Official Documentation */}
            <div className="border rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">📖</span>
                <h3 className="font-medium">Official Microsoft Resources</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://support.microsoft.com/en-us/excel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    Excel Help & Learning
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    Excel Video Training
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Free Online Courses */}
            <div className="border rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">🎓</span>
                <h3 className="font-medium">Free Online Courses</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.coursera.org/courses?query=microsoft%20excel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    Excel Basics (Coursera)
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/learning/excel-essential-training-office-365-microsoft-365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    LinkedIn Learning Excel Courses
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Community & Forums */}
            <div className="border rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">💬</span>
                <h3 className="font-medium">Community & Help</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://answers.microsoft.com/en-us/msoffice/forum/excel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    Microsoft Excel Community
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.reddit.com/r/excel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    Reddit Excel Community
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <span className="text-xl">💡</span>
              <div>
                <h4 className="font-medium mb-1">Pro Tip</h4>
                <p className="text-sm text-gray-600">
                  Bookmark these resources for quick reference. The Microsoft Excel Community and Reddit Excel Community are 
                  especially helpful for getting answers to specific questions from experienced users.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 