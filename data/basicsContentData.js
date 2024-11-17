export const basicsContentData = {
  dataOrganization: {
    title: "Data Organization",
    description: "Learn how to structure your data effectively in Excel",
    sections: [
      {
        title: "Proper Table Structure",
        key: "tableStructure",
        content: {
          principles: [
            "Every column should have a clear, descriptive header",
            "Headers should be in a single row (no stacked headers)",
            "No blank rows or columns within your data",
            "Consistent data type in each column",
            "No merged cells in your data range"
          ],
          examples: {
            good: {
              title: "✅ Good Structure Example",
              data: [
                ["Date", "Product", "Quantity", "Price"],
                ["2024-02-01", "Widget A", "5", "$10.00"],
                ["2024-02-01", "Widget B", "3", "$15.00"]
              ],
              explanation: "Clear headers, consistent format, one piece of data per cell"
            },
            bad: {
              title: "❌ Bad Structure Example",
              data: [
                ["Sales Data 2024", "", "", ""],
                ["Products", "Info", "", ""],
                ["Widget A, 5 units", "Feb 1st - $10.00 each", "", ""],
                ["Widget B", "3 units @ $15.00 (Feb 1)", "", ""]
              ],
              explanation: "Merged cells, mixed data types, multiple pieces of information in one cell"
            }
          },
          tips: [
            "Use Excel's 'Format as Table' feature to automatically apply good structure",
            "Keep raw data in a separate sheet from your analysis",
            "Use data validation to prevent incorrect data entry"
          ]
        }
      },
      {
        title: "One Piece of Data Per Cell",
        key: "oneDataPerCell",
        content: {
          principles: [
            "Split combined information into separate columns",
            "Use formulas to combine data when needed",
            "Make data analysis-friendly"
          ],
          examples: {
            good: {
              title: "✅ Good Data Structure",
              data: [
                ["First Name", "Last Name", "City", "State"],
                ["John", "Smith", "Seattle", "WA"],
                ["Mary", "Johnson", "Portland", "OR"]
              ]
            },
            bad: {
              title: "❌ Poor Data Structure",
              data: [
                ["Full Name", "Location"],
                ["John Smith", "Seattle, WA"],
                ["Mary Johnson", "Portland, OR"]
              ]
            }
          }
        }
      }
    ]
  },

  excelInterface: {
    title: "Excel Interface",
    description: "Master Excel's interface and essential shortcuts",
    sections: [
      {
        title: "Navigation Shortcuts",
        content: {
          essential: [
            { keys: "Ctrl + →", description: "Move to last cell in row" },
            { keys: "Ctrl + ↓", description: "Move to last cell in column" },
            { keys: "Ctrl + Home", description: "Go to beginning of worksheet" },
            { keys: "Ctrl + End", description: "Go to last used cell" }
          ],
          selection: [
            { keys: "Ctrl + Space", description: "Select entire column" },
            { keys: "Shift + Space", description: "Select entire row" },
            { keys: "Ctrl + A", description: "Select all cells" },
            { keys: "Shift + Arrow", description: "Extend selection" }
          ]
        }
      },
      {
        title: "Ribbon Interface",
        content: {
          commonTabs: [
            {
              name: "Home",
              features: ["Formatting options", "Cell styles", "Find & Select"]
            },
            {
              name: "Insert",
              features: ["Charts", "Tables", "Illustrations"]
            },
            {
              name: "Data",
              features: ["Sort & Filter", "Data validation", "Data tools"]
            }
          ]
        }
      },
      {
        title: "Quick Access Toolbar",
        content: {
          tips: [
            "Add frequently used commands",
            "Organize commands in order of use",
            "Remove rarely used commands"
          ]
        }
      }
    ]
  },

  tablesAndStructure: {
    title: "Tables & Structure",
    description: "Learn how to use Excel tables effectively",
    sections: [
      {
        title: "Converting Ranges to Tables",
        key: "convertToTable",
        content: {
          steps: [
            "Select your data range",
            "Press Ctrl + T or click 'Format as Table'",
            "Verify header row selection",
            "Choose a table style"
          ],
          benefits: [
            "Automatic formatting",
            "Dynamic ranges that expand with data",
            "Easy sorting and filtering",
            "Structured references in formulas"
          ]
        }
      },
      {
        title: "Sorting and Filtering",
        key: "sortFilter",
        content: {
          sortingTypes: [
            "Single column sort",
            "Multi-level sort",
            "Custom sort lists"
          ],
          filteringOptions: [
            "Text filters",
            "Number filters",
            "Date filters",
            "Custom filters"
          ]
        }
      }
    ]
  },

  dataTypes: {
    title: "Data Types",
    description: "Understanding different types of data in Excel",
    sections: [
      {
        title: "Numbers vs Text",
        key: "numbersText",
        content: {
          numbers: {
            description: "Values you can calculate with",
            examples: ["1", "1.5", "-10", "1E+5"],
            formatting: ["General", "Number", "Scientific", "Accounting"]
          },
          text: {
            description: "Labels and identifiers",
            examples: ["ABC", "'123", "ID001"],
            formatting: ["General", "Text", "@"]
          }
        }
      },
      {
        title: "Dates and Times",
        key: "datesTimes",
        content: {
          dates: {
            formats: [
              "Short Date (1/1/2024)",
              "Long Date (January 1, 2024)",
              "Custom formats"
            ],
            tips: [
              "Excel stores dates as numbers",
              "Use consistent date formats",
              "Be aware of regional settings"
            ]
          }
        }
      }
    ]
  }
}; 