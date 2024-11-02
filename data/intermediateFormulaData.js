export const intermediateFormulaData = {
    // Lookup Functions
    "VLOOKUP": {
        syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
        description: "Looks up a value in the first column of a table and returns a value in the same row from another column.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1",
        whenToUse: [
            "Finding matching values in datasets",
            "Looking up prices from a product list",
            "Finding employee details by ID",
            "Getting grades from student IDs",
            "Finding customer information"
        ],
        bestPractices: [
            "Always put lookup values in leftmost column",
            "Use FALSE for exact matches",
            "Ensure lookup values match exactly",
            "Count columns carefully from left to right",
            "Include headers in table range"
        ],
        commonMistakes: [
            "Looking up values not in first column",
            "Forgetting FALSE for exact matches",
            "Incorrect column counting",
            "Not sorting for approximate matches",
            "Wrong lookup array size"
        ],
        tipsAndTricks: [
            "Use FALSE for exact matches",
            "Sort data for approximate matches",
            "Double-check column numbers",
            "Consider XLOOKUP for more flexibility",
            "Use structured references when possible"
        ],
        examples: [
            {
                title: "Student Grade Lookup",
                data: [
                    ["", "A", "B"],
                    ["1", "Student ID", "Grade"],
                    ["2", "S101", "85"],
                    ["3", "S102", "92"],
                    ["4", "S103", "78"]
                ],
                formula: "=VLOOKUP(\"S102\", A2:B4, 2, FALSE)",
                result: "92",
                explanation: "Looks up student S102 and returns their grade from column B"
            }
        ],
        practice: {
            question: "Find Tom White's grade using his Student ID (S102)",
            data: [
                ["", "A", "B"],
                ["1", "Student ID", "Grade"],
                ["2", "S101", "85"],
                ["3", "S102", "92"],
                ["4", "S103", "78"]
            ],
            answer: "=VLOOKUP(\"S102\", A2:B4, 2, FALSE)",
            hint: "Look for S102 in column A and return the corresponding grade from column B"
        }
    },

    "HLOOKUP": {
        syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
        description: "HLOOKUP works like VLOOKUP but searches horizontally instead of vertically. It looks across the first row to find what you want, then moves down to get related information.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/hlookup-function-a3034eec-b719-4ba3-bb65-e1ad662ed95f",
        
        whenToUse: [
            "When your lookup values are in the top row instead of first column",
            "Working with wide tables where data is organized horizontally",
            "Finding data in financial statements (quarters across top, metrics down)",
            "Looking up values in calendar-style tables (months across top)",
            "Analyzing data where categories are columns, not rows"
        ],

        bestPractices: [
            "Always put your lookup value in the top row",
            "Use FALSE for exact matches (like finding a specific month)",
            "Make sure your lookup value matches exactly (e.g., 'Jan' vs 'January')",
            "Double-check your row count - count from top to bottom starting at 1",
            "Include all necessary rows in your table range"
        ],

        commonMistakes: [
            "Trying to look up values that aren't in the first row",
            "Counting rows wrong (remember to start at 1, not 0)",
            "Forgetting to use FALSE for exact matches",
            "Looking for text when the cell contains a number (or vice versa)",
            "Using HLOOKUP when data would be better structured for VLOOKUP"
        ],

        tipsAndTricks: [
            "Think 'Horizontal' - HLOOKUP searches across, then moves down",
            "Consider if your data could be better organized vertically",
            "Use cell references instead of typing values directly",
            "If you're getting errors, check if your lookup value exists exactly as typed",
            "When in doubt, use FALSE for exact matching"
        ],

        examples: [
            {
                title: "Quarterly Sales Lookup",
                data: [
                    ["Category", "Q1", "Q2", "Q3", "Q4"],
                    ["Sales", "10000", "12000", "15000", "18000"],
                    ["Expenses", "8000", "9000", "11000", "12000"],
                    ["Profit", "2000", "3000", "4000", "6000"]
                ],
                formula: "=HLOOKUP(\"Q2\", A1:E4, 2, FALSE)",
                result: "12000",
                explanation: "Example Formula: =HLOOKUP(\"Q2\", A1:E4, 2, FALSE)\n" +
                    "Returns: 12000\n\n" +
                    "Breaking down the formula:\n" +
                    "1. \"Q2\" - Looking for Q2 (second quarter)\n" +
                    "2. A1:E4 - Our table including headers\n" +
                    "3. 2 - Get value from row 2 (Sales row)\n" +
                    "4. FALSE - Need exact match\n\n" +
                    "The formula searches across row 1 for 'Q2', then moves down to row 2 to find the Sales value 12000"
            },
            {
                title: "Monthly Performance Metrics",
                data: [
                    ["Metric", "Jan", "Feb", "Mar", "Apr"],
                    ["Revenue", "5000", "5500", "6000", "6200"],
                    ["Units", "100", "110", "120", "125"],
                    ["Rating", "Good", "Better", "Best", "Best"]
                ],
                formula: "=HLOOKUP(\"Mar\", A1:E4, 3, FALSE)",
                result: "120",
                explanation: "Example Formula: =HLOOKUP(\"Mar\", A1:E4, 3, FALSE)\n" +
                    "Returns: 120\n\n" +
                    "Breaking it down:\n" +
                    "1. \"Mar\" - Looking for March data\n" +
                    "2. A1:E4 - Our monthly performance table\n" +
                    "3. 3 - Get value from row 3 (Units row)\n" +
                    "4. FALSE - Need exact match\n\n" +
                    "The formula finds 'Mar' in row 1, then moves down to row 3 to return the Units value 120"
            }
        ],

        practice: {
            data: [
                ["Month", "Jan", "Feb", "Mar", "Apr"],
                ["Sales", "1000", "1200", "1400", "1600"],
                ["Costs", "800", "850", "900", "950"],
                ["Profit", "200", "350", "500", "650"]
            ],
            question: "Find the sales value for March using HLOOKUP:",
            answer: "=HLOOKUP(\"Mar\", A1:E4, 2, FALSE)",
            hint: "1. Look for Mar in the first row\n2. Count rows from top: 1-Month, 2-Sales\n3. Use FALSE for exact match",
            explanation: "The formula finds March's sales value (1400).\n\n" +
                "Step by step:\n" +
                "1. Searches for 'Mar' in row 1\n" +
                "2. Moves down to row 2 (Sales)\n" +
                "3. Returns the value '1400'\n\n" +
                "This is like finding a month's sales in a spreadsheet organized by months."
        }
    },

    "INDEX": {
        syntax: "=INDEX(array, row_num, [column_num])",
        description: "INDEX returns a value or the reference to a value from within a table or range. Think of it as a way to pinpoint exactly which cell you want in a range, using row and column numbers.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd",
        
        whenToUse: [
            "When you need to find a value at a specific position in a table",
            "Often paired with MATCH for flexible lookups",
            "When VLOOKUP/HLOOKUP are too restrictive",
            "Getting values from the middle of a table",
            "When you need to look up values by position rather than value"
        ],

        bestPractices: [
            "Double-check your row and column numbers",
            "Remember row and column numbers start at 1, not 0",
            "Use with MATCH for dynamic lookups",
            "Consider using cell references for row/column numbers",
            "Test with small ranges first to verify positioning"
        ],

        commonMistakes: [
            "Mixing up row and column numbers",
            "Forgetting that numbering starts at 1",
            "Using incorrect array range",
            "Not including all necessary rows/columns in array",
            "Confusing INDEX with MATCH function"
        ],

        tipsAndTricks: [
            "Think 'row number THEN column number'",
            "Use with MATCH for powerful dynamic lookups",
            "Can return entire rows or columns if you omit one argument",
            "Works well with large tables",
            "More flexible than VLOOKUP/HLOOKUP"
        ],

        examples: [
            {
                title: "Simple Position Lookup",
                data: [
                    ["Product", "Category", "Price"],
                    ["Apple", "Fruit", "$1.99"],
                    ["Bread", "Bakery", "$2.99"],
                    ["Cheese", "Dairy", "$4.99"]
                ],
                formula: "=INDEX(A1:C4, 2, 3)",
                result: "$2.99",
                explanation: "Example Formula: =INDEX(A1:C4, 2, 3)\n" +
                    "Returns: $2.99\n\n" +
                    "Breaking down the formula:\n" +
                    "1. A1:C4 - Our table range\n" +
                    "2. 2 - Second row (Bread's row)\n" +
                    "3. 3 - Third column (Price column)\n\n" +
                    "Like saying: 'Give me the value at row 2, column 3 of this table'"
            },
            {
                title: "Dynamic Lookup with MATCH",
                data: [
                    ["Name", "Role", "Department", "Salary"],
                    ["John", "Manager", "Sales", "60000"],
                    ["Sarah", "Analyst", "Finance", "55000"],
                    ["Mike", "Developer", "IT", "65000"]
                ],
                formula: "=INDEX(A1:D4, MATCH(\"Sarah\", A2:A4, 0), 4)",
                result: "55000",
                explanation: "Example Formula: =INDEX(A1:D4, MATCH(\"Sarah\", A2:A4, 0), 4)\n" +
                    "Returns: 55000\n\n" +
                    "Breaking it down:\n" +
                    "1. A1:D4 - Full table range\n" +
                    "2. MATCH finds 'Sarah' in column A (returns 2)\n" +
                    "3. 4 - Fourth column (Salary)\n\n" +
                    "This combines INDEX with MATCH to find Sarah's salary dynamically"
            }
        ],

        practice: {
            data: [
                ["Student", "Math", "Science", "English"],
                ["Alex", "85", "92", "88"],
                ["Beth", "90", "88", "94"],
                ["Chris", "82", "85", "90"]
            ],
            question: "Find Beth's Science score (row 3, column 3)",
            answer: "=INDEX(A1:D4, 3, 3)",
            hint: "1. Count down to Beth's row (row 3)\n2. Count across to Science column (column 3)\n3. Use these numbers in INDEX",
            explanation: "The formula finds the value at row 3, column 3 (88).\n\n" +
                "Step by step:\n" +
                "1. Identifies the table range (A1:D4)\n" +
                "2. Goes to row 3 (Beth's row)\n" +
                "3. Goes to column 3 (Science column)\n" +
                "4. Returns the value at that intersection (88)\n\n" +
                "Think of it like finding a point on a grid - go down 3, right 3"
        }
    },

    "MATCH": {
        syntax: "=MATCH(lookup_value, lookup_array, [match_type])",
        description: "MATCH searches for a specified item in a range of cells and returns the relative position of that item in the range. Think of it as finding the position number of an item in a list.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/match-function-e8dffd45-c762-47d6-bf89-533f4a37673a",
        
        whenToUse: [
            "When you need to find the position of a value in a range",
            "Often paired with INDEX for flexible lookups",
            "Finding positions in sorted lists",
            "Determining relative positions in data",
            "Creating dynamic references"
        ],

        bestPractices: [
            "Understand the match_type options (1, 0, -1)",
            "Use 0 for exact matches (most common)",
            "Use 1 for finding position in ascending sorted lists",
            "Use -1 for finding position in descending sorted lists",
            "Ensure lookup array is a single row or column"
        ],

        commonMistakes: [
            "Using wrong match_type for unsorted data",
            "Forgetting MATCH returns position, not value",
            "Not considering case sensitivity",
            "Using 2D range instead of single row/column",
            "Forgetting position counting starts at 1"
        ],

        tipsAndTricks: [
            "Use 0 (exact match) when in doubt",
            "Remember it returns position number, not the value",
            "Great companion to INDEX function",
            "Can handle approximate matches in sorted lists",
            "Position counting starts at 1, not 0"
        ],

        examples: [
            {
                title: "Finding Position in a List",
                data: [
                    ["Department"],
                    ["Sales"],
                    ["Marketing"],
                    ["IT"],
                    ["Finance"]
                ],
                formula: "=MATCH(\"Marketing\", A1:A5, 0)",
                result: "3",
                explanation: "Example Formula: =MATCH(\"Marketing\", A1:A5, 0)\n" +
                    "Returns: 3\n\n" +
                    "Breaking down the formula:\n" +
                    "1. \"Marketing\" - Value we're looking for\n" +
                    "2. A1:A5 - List of departments\n" +
                    "3. 0 - Exact match\n\n" +
                    "The formula returns 3 because 'Marketing' is in the third position"
            },
            {
                title: "Approximate Match in Sorted List",
                data: [
                    ["Salary Band"],
                    ["50000"],
                    ["60000"],
                    ["70000"],
                    ["80000"]
                ],
                formula: "=MATCH(63000, A1:A5, 1)",
                result: "2",
                explanation: "Example Formula: =MATCH(63000, A1:A5, 1)\n" +
                    "Returns: 2\n\n" +
                    "Breaking it down:\n" +
                    "1. 63000 - Looking for this value\n" +
                    "2. A1:A5 - Sorted salary bands\n" +
                    "3. 1 - Find largest value less than or equal to 63000\n\n" +
                    "Returns 2 because 60000 (position 2) is the largest value ≤ 63000"
            }
        ],

        practice: {
            data: [
                ["Product"],
                ["Apple"],
                ["Banana"],
                ["Orange"],
                ["Pear"]
            ],
            question: "Find the position of 'Orange' in the list",
            answer: "=MATCH(\"Orange\", A1:A5, 0)",
            hint: "1. Use exact match (0)\n2. Look through the whole column\n3. Remember positions start at 1",
            explanation: "The formula finds position 3 for 'Orange'.\n\n" +
                "Step by step:\n" +
                "1. Searches for exact match of 'Orange'\n" +
                "2. Scans through products:\n" +
                "   • Apple (pos 1) - no match\n" +
                "   • Banana (pos 2) - no match\n" +
                "   • Orange (pos 3) - match found!\n" +
                "   • Stops here\n\n" +
                "Returns 3 (third position in range)"
        }
    },

    "XLOOKUP": {
        syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
        description: "XLOOKUP searches for a value in a table or range by row. Think of it as a more powerful and flexible version of VLOOKUP that can look both left and right.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929",
        
        whenToUse: [
            "When you want a more flexible alternative to VLOOKUP/HLOOKUP",
            "Looking up values in any direction (left, right, up, down)",
            "When you need to handle 'not found' scenarios elegantly",
            "Finding exact or approximate matches",
            "When you need to search from the bottom up"
        ],

        bestPractices: [
            "Use clear error messages for not-found values",
            "Consider using approximate match for numeric lookups",
            "Take advantage of searching from bottom up when needed",
            "Match your lookup and return arrays in size",
            "Use wildcards (* and ?) for partial matches"
        ],

        commonMistakes: [
            "Forgetting lookup_array and return_array must be same size",
            "Not handling 'not found' scenarios",
            "Using wrong match_mode for your data type",
            "Overlooking the search direction option",
            "Not considering approximate matches when appropriate"
        ],

        tipsAndTricks: [
            "Can replace both VLOOKUP and HLOOKUP",
            "Handles errors better with if_not_found parameter",
            "Can search in reverse order (-1 in search_mode)",
            "Works with wildcards for partial matches",
            "More flexible than traditional lookup functions"
        ],

        examples: [
            {
                title: "Basic Employee Lookup",
                data: [
                    ["ID", "Name", "Department", "Salary"],
                    ["E101", "John Smith", "Sales", "50000"],
                    ["E102", "Jane Doe", "Marketing", "55000"],
                    ["E103", "Bob Wilson", "IT", "60000"]
                ],
                formula: "=XLOOKUP(\"E102\", A2:A4, C2:C4, \"Not Found\", 0)",
                result: "Marketing",
                explanation: "Example Formula: =XLOOKUP(\"E102\", A2:A4, C2:C4, \"Not Found\", 0)\n" +
                    "Returns: Marketing\n\n" +
                    "Breaking down the formula:\n" +
                    "1. \"E102\" - Looking for this ID\n" +
                    "2. A2:A4 - Where to look (ID column)\n" +
                    "3. C2:C4 - What to return (Department column)\n" +
                    "4. \"Not Found\" - What to show if ID doesn't exist\n" +
                    "5. 0 - Exact match mode\n\n" +
                    "Much simpler than VLOOKUP as you don't need to count columns!"
            },
            {
                title: "Advanced Reverse Lookup",
                data: [
                    ["Sales", "Region", "Target"],
                    ["50000", "North", "45000"],
                    ["60000", "South", "55000"],
                    ["75000", "East", "70000"],
                    ["80000", "West", "75000"]
                ],
                formula: "=XLOOKUP(70000, A2:A5, B2:B5, \"No Match\", 1, -1)",
                result: "East",
                explanation: "Example Formula: =XLOOKUP(70000, A2:A5, B2:B5, \"No Match\", 1, -1)\n" +
                    "Returns: East\n\n" +
                    "Breaking it down:\n" +
                    "1. 70000 - Looking for this value\n" +
                    "2. A2:A5 - Search in Sales column\n" +
                    "3. B2:B5 - Return from Region column\n" +
                    "4. \"No Match\" - Error message if not found\n" +
                    "5. 1 - Approximate match\n" +
                    "6. -1 - Search from bottom up\n\n" +
                    "Shows XLOOKUP's power with approximate matches and reverse search!"
            }
        ],

        practice: {
            data: [
                ["Product", "Category", "Price", "Stock"],
                ["Laptop", "Electronics", "999", "15"],
                ["Phone", "Electronics", "599", "25"],
                ["Desk", "Furniture", "299", "10"],
                ["Chair", "Furniture", "199", "20"]
            ],
            question: "Find the price of the Phone using XLOOKUP",
            answer: "=XLOOKUP(\"Phone\", A2:A5, C2:C5, \"Product not found\")",
            hint: "1. Look for 'Phone' in the Product column\n2. Return value from Price column\n3. Add error message for not found\n4. Use exact match (default)",
            explanation: "The formula finds the phone's price (599).\n\n" +
                "Step by step:\n" +
                "1. Searches for 'Phone' in Product column\n" +
                "2. Finds it and looks at same position in Price column\n" +
                "3. Returns 599\n\n" +
                "Notice how we didn't need to count columns like in VLOOKUP!"
        }
    },

    "XMATCH": {
        syntax: "=XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])",
        description: "Think of XMATCH as MATCH's more powerful younger sibling. It searches for a specified item in an array or range of cells and returns the item's relative position.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/xmatch-function-d966da31-7a6b-4a13-a1c6-5a33ed6a0312",
        
        whenToUse: [
            "When you need a more flexible way to find positions than MATCH",
            "Finding exact or approximate positions in a list",
            "Searching from bottom to top of a list",
            "Using binary search in sorted data",
            "Working with wildcard matches in text searches"
        ],

        bestPractices: [
            "Choose the right match_mode (0 for exact, -1 or 1 for approximate)",
            "Use search_mode -1 for bottom-to-top searches",
            "Use binary search (mode 2/-2) with sorted data for better performance",
            "Consider wildcards (* and ?) for text matching",
            "Combine with INDEX for powerful lookups"
        ],

        commonMistakes: [
            "Using binary search with unsorted data",
            "Forgetting match_mode defaults to 0 (exact match)",
            "Not considering case sensitivity in text matches",
            "Using wrong search direction for your needs",
            "Overlooking wildcard options for flexible text matching"
        ],

        tipsAndTricks: [
            "Use -1 search_mode for reverse searches",
            "Binary search is faster for large sorted datasets",
            "Wildcards (* and ?) work with match_mode 2",
            "Can find exact or closest matches in sorted data",
            "More efficient than traditional MATCH function"
        ],

        examples: [
            {
                title: "Basic Position Finding",
                data: [
                    ["Product"],
                    ["Apple"],
                    ["Grape"],
                    ["Orange"],
                    ["Pear"]
                ],
                formula: "=XMATCH(\"Grape\", A1:A5, 0)",
                result: "2",
                explanation: "Example Formula: =XMATCH(\"Grape\", A1:A5, 0)\n" +
                    "Returns: 2\n\n" +
                    "Breaking down the formula:\n" +
                    "1. \"Grape\" - Value we're looking for\n" +
                    "2. A1:A5 - List to search in\n" +
                    "3. 0 - Exact match mode (default)\n\n" +
                    "Returns 2 because Grape is in the second position"
            },
            {
                title: "Advanced Binary Search",
                data: [
                    ["Sales"],
                    ["1000"],
                    ["2000"],
                    ["3000"],
                    ["4000"]
                ],
                formula: "=XMATCH(2500, A1:A5, 1, 2)",
                result: "2",
                explanation: "Example Formula: =XMATCH(2500, A1:A5, 1, 2)\n" +
                    "Returns: 2\n\n" +
                    "Breaking it down:\n" +
                    "1. 2500 - Looking for this value\n" +
                    "2. A1:A5 - Search in sorted sales data\n" +
                    "3. 1 - Find next smallest or equal value\n" +
                    "4. 2 - Use binary search (faster for sorted data)\n\n" +
                    "Returns 2 because 2000 is the largest value ≤ 2500"
            }
        ],

        practice: {
            data: [
                ["Name"],
                ["Alex"],
                ["Beth"],
                ["Charlie"],
                ["David"]
            ],
            question: "Find the position of 'Charlie' using XMATCH",
            answer: "=XMATCH(\"Charlie\", A1:A5, 0)",
            hint: "1. Use exact match (0)\n2. Search in the name column\n3. Remember positions start at 1",
            explanation: "The formula finds position 3 for 'Charlie'.\n\n" +
                "Step by step:\n" +
                "1. Searches for exact match of 'Charlie'\n" +
                "2. Scans through names:\n" +
                "   • Alex (pos 1) - no match\n" +
                "   • Beth (pos 2) - no match\n" +
                "   • Charlie (pos 3) - match found!\n\n" +
                "Returns 3 because Charlie is the third name in the list"
        }
    },

    // Statistical Functions
    "COUNTIF": {
        syntax: "=COUNTIF(range, criteria)",
        description: "COUNTIF counts the number of cells that meet a specific condition. Think of it as a way to count how many times something appears in your data, like counting how many times 'London' appears in a list of cities.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34",
        
        whenToUse: [
            "Counting sales above/below a threshold",
            "Finding frequency of specific values",
            "Analyzing data distributions",
            "Checking for duplicate entries",
            "Counting items meeting specific criteria"
        ],

        bestPractices: [
            "Use quotes around text criteria",
            "Double-check comparison operators (>, <, =)",
            "Consider case sensitivity in text matches",
            "Use wildcards (* and ?) for partial matches",
            "Verify range selection is correct"
        ],

        commonMistakes: [
            "Forgetting quotes around text criteria",
            "Using wrong comparison operators",
            "Not considering blank cells",
            "Mixing data types (text/numbers)",
            "Incorrect range selection"
        ],

        tipsAndTricks: [
            "Use * for partial text matches",
            "Combine comparison operators (>=, <=)",
            "Use quotes for exact text matching",
            "Can use cell references as criteria",
            "Consider COUNTIFS for multiple conditions"
        ],

        examples: [
            {
                title: "Sales Performance Analysis",
                data: [
                    ["Sales Rep", "Region", "Sales"],
                    ["John", "North", "45000"],
                    ["Sarah", "South", "52000"],
                    ["Mike", "North", "38000"],
                    ["Lisa", "South", "61000"],
                    ["Tom", "North", "43000"]
                ],
                formula: "=COUNTIF(B2:B6, \"North\")",
                result: "3",
                explanation: "Let's break this down step by step:\n\n" +
                    "1. Looking at Region column (B2:B6)\n" +
                    "2. Counting occurrences of \"North\"\n\n" +
                    "Visual path:\n" +
                    "• Row 2: North ✓ (count: 1)\n" +
                    "• Row 3: South (skip)\n" +
                    "• Row 4: North ✓ (count: 2)\n" +
                    "• Row 5: South (skip)\n" +
                    "• Row 6: North ✓ (count: 3)\n\n" +
                    "Returns 3 (three sales reps in North region)"
            },
            {
                title: "Sales Threshold Analysis",
                data: [
                    ["Sales Rep", "Region", "Sales"],
                    ["John", "North", "45000"],
                    ["Sarah", "South", "52000"],
                    ["Mike", "North", "38000"],
                    ["Lisa", "South", "61000"],
                    ["Tom", "North", "43000"]
                ],
                formula: "=COUNTIF(C2:C6, \">50000\")",
                result: "2",
                explanation: "Counting sales above $50,000:\n\n" +
                    "1. Examines Sales column (C2:C6)\n" +
                    "2. Checks each value against >50000\n\n" +
                    "Process:\n" +
                    "• 45000: Below threshold (skip)\n" +
                    "• 52000: Above ✓ (count: 1)\n" +
                    "• 38000: Below threshold (skip)\n" +
                    "• 61000: Above ✓ (count: 2)\n" +
                    "• 43000: Below threshold (skip)\n\n" +
                    "Returns 2 (two sales above $50,000)"
            }
        ],

        practice: {
            data: [
                {
                    question: "Count how many employees are in the 'Sales' department:",
                    data: [
                        ["Employee", "Department", "Years"],
                        ["Alice", "Sales", "3"],
                        ["Bob", "Marketing", "5"],
                        ["Charlie", "Sales", "2"],
                        ["David", "IT", "4"],
                        ["Eve", "Sales", "6"]
                    ],
                    answer: "=COUNTIF(B2:B6, \"Sales\")",
                    hint: "Remember:\n" +
                        "• Use quotes around text \"Sales\"\n" +
                        "• Select entire Department column\n" +
                        "• Case sensitivity matters",
                    explanation: "The formula works because:\n\n" +
                        "1. Checks Department column (B2:B6)\n" +
                        "2. Counts exact matches for \"Sales\"\n\n" +
                        "Step by step:\n" +
                        "• Alice: Sales ✓ (count: 1)\n" +
                        "• Bob: Marketing (skip)\n" +
                        "• Charlie: Sales ✓ (count: 2)\n" +
                        "• David: IT (skip)\n" +
                        "• Eve: Sales ✓ (count: 3)\n\n" +
                        "Returns 3 (three employees in Sales)"
                },
                {
                    question: "Count employees with more than 4 years of service:",
                    data: [
                        ["Employee", "Department", "Years"],
                        ["Alice", "Sales", "3"],
                        ["Bob", "Marketing", "5"],
                        ["Charlie", "Sales", "2"],
                        ["David", "IT", "4"],
                        ["Eve", "Sales", "6"]
                    ],
                    answer: "=COUNTIF(C2:C6, \">4\")",
                    hint: "Think about:\n" +
                        "• Use > for 'greater than'\n" +
                        "• No quotes needed for numbers\n" +
                        "• Include entire Years column",
                    explanation: "Let's analyze this solution:\n\n" +
                        "1. Examines Years column (C2:C6)\n" +
                        "2. Checks each value against >4\n\n" +
                        "Process:\n" +
                        "• 3: Too low (skip)\n" +
                        "• 5: Above 4 ✓ (count: 1)\n" +
                        "• 2: Too low (skip)\n" +
                        "• 4: Equal to 4 (skip)\n" +
                        "• 6: Above 4 ✓ (count: 2)\n\n" +
                        "Returns 2 (two employees >4 years)"
                }
            ]
        }
    },

    "SUMIF": {
        syntax: "=SUMIF(range, criteria, [sum_range])",
        description: "SUMIF adds up values in a range that meet specific criteria. It's like a selective calculator that only adds numbers when certain conditions are met.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/sumif-c44b60c3-c9f4-4789-80fe-28a07f9b75b1",
        
        whenToUse: [
            "Calculating total sales by region",
            "Summing costs for specific categories",
            "Adding values above/below thresholds",
            "Computing filtered totals",
            "Analyzing conditional financial data"
        ],

        bestPractices: [
            "Verify range and sum_range are same size",
            "Use quotes for text criteria",
            "Double-check comparison operators",
            "Consider data type matching",
            "Handle blank cells appropriately"
        ],

        commonMistakes: [
            "Mismatched range sizes",
            "Forgetting quotes for text",
            "Wrong comparison operators",
            "Including headers in ranges",
            "Not considering blank cells"
        ],

        tipsAndTricks: [
            "Use wildcards for partial matches",
            "Can reference cells for criteria",
            "Combine with other functions for complex calculations",
            "Consider SUMIFS for multiple conditions",
            "Use comparison operators (<, >, =) effectively"
        ],

        examples: [
            {
                title: "Regional Sales Total",
                data: [
                    ["Region", "Sales Rep", "Sales"],
                    ["North", "John", "45000"],
                    ["South", "Sarah", "52000"],
                    ["North", "Mike", "38000"],
                    ["South", "Lisa", "61000"],
                    ["North", "Tom", "43000"]
                ],
                formula: "=SUMIF(A2:A6, \"North\", C2:C6)",
                result: "126000",
                explanation: "Let's break this down step by step:\n\n" +
                    "1. Checking Region column (A2:A6) for \"North\"\n" +
                    "2. Adding corresponding Sales values (C2:C6)\n\n" +
                    "Visual path:\n" +
                    "• Row 2: North ✓ (45000 added)\n" +
                    "• Row 3: South (skip)\n" +
                    "�� Row 4: North ✓ (38000 added)\n" +
                    "• Row 5: South (skip)\n" +
                    "• Row 6: North ✓ (43000 added)\n\n" +
                    "Total: 45000 + 38000 + 43000 = 126000"
            },
            {
                title: "High Value Sales Total",
                data: [
                    ["Product", "Category", "Sales"],
                    ["Laptop", "Electronics", "1200"],
                    ["Mouse", "Accessories", "25"],
                    ["Monitor", "Electronics", "400"],
                    ["Keyboard", "Accessories", "50"],
                    ["Printer", "Electronics", "300"]
                ],
                formula: "=SUMIF(C2:C6, \">300\", C2:C6)",
                result: "1600",
                explanation: "Adding sales above $300:\n\n" +
                    "1. Checks Sales column for values >300\n" +
                    "2. Adds matching values\n\n" +
                    "Process:\n" +
                    "• 1200: Above 300 ✓ (add 1200)\n" +
                    "• 25: Below 300 (skip)\n" +
                    "• 400: Above 300 ✓ (add 400)\n" +
                    "• 50: Below 300 (skip)\n" +
                    "• 300: Equal to 300 (skip)\n\n" +
                    "Total: 1200 + 400 = 1600"
            }
        ],

        practice: {
            data: [
                {
                    question: "Calculate total sales for Electronics category:",
                    data: [
                        ["Product", "Category", "Sales"],
                        ["Laptop", "Electronics", "1200"],
                        ["Mouse", "Accessories", "25"],
                        ["Monitor", "Electronics", "400"],
                        ["Keyboard", "Accessories", "50"],
                        ["Printer", "Electronics", "300"]
                    ],
                    answer: "=SUMIF(B2:B6, \"Electronics\", C2:C6)",
                    hint: "Remember:\n" +
                        "• Check Category column for criteria\n" +
                        "• Sum from Sales column\n" +
                        "• Use quotes for text \"Electronics\"",
                    explanation: "The formula works because:\n\n" +
                        "1. Checks Category column (B2:B6)\n" +
                        "2. Sums Sales where Category is \"Electronics\"\n\n" +
                        "Step by step:\n" +
                        "• Laptop: Electronics ✓ (add 1200)\n" +
                        "• Mouse: Accessories (skip)\n" +
                        "• Monitor: Electronics ✓ (add 400)\n" +
                        "• Keyboard: Accessories (skip)\n" +
                        "• Printer: Electronics ✓ (add 300)\n\n" +
                        "Total: 1200 + 400 + 300 = 1900"
                },
                {
                    question: "Sum all sales below $100:",
                    data: [
                        ["Product", "Category", "Sales"],
                        ["Laptop", "Electronics", "1200"],
                        ["Mouse", "Accessories", "25"],
                        ["Monitor", "Electronics", "400"],
                        ["Keyboard", "Accessories", "50"],
                        ["Printer", "Electronics", "300"]
                    ],
                    answer: "=SUMIF(C2:C6, \"<100\", C2:C6)",
                    hint: "Think about:\n" +
                        "• Use < for 'less than'\n" +
                        "• No quotes needed for numbers\n" +
                        "• Check entire Sales column",
                    explanation: "Let's analyze this solution:\n\n" +
                        "1. Examines Sales column for values <100\n" +
                        "2. Adds matching values\n\n" +
                        "Process:\n" +
                        "• 1200: Above 100 (skip)\n" +
                        "• 25: Below 100 ✓ (add 25)\n" +
                        "• 400: Above 100 (skip)\n" +
                        "• 50: Below100 ✓ (add 50)\n" +
                        " 300: Above 100 (skip)\n\n" +
                        "Total: 25 + 50 = 75"
                }
            ]
        }
    },

    "AVERAGEIF": {
        syntax: "=AVERAGEIF(range, criteria, [average_range])",
        description: "Returns the average (arithmetic mean) of all the cells in a range that meet a given criteria. Think of it as a selective calculator that only averages numbers when certain conditions are met.",
        microsoftUrl: "https://support.microsoft.com/en-us/office/averageif-function-faec8e2e-0dec-4308-af69-f5576d8ac642",
        
        whenToUse: [
            "Calculating average sales by region",
            "Finding average values above/below thresholds",
            "Computing filtered averages",
            "Analyzing conditional data trends",
            "Finding mean values for specific categories"
        ],

        bestPractices: [
            "Verify range and average_range are same size",
            "Use quotes for text criteria",
            "Double-check comparison operators",
            "Handle blank cells appropriately",
            "Consider data type matching"
        ],

        commonMistakes: [
            "Mismatched range sizes",
            "Forgetting quotes for text criteria",
            "Including headers in ranges",
            "Not handling blank cells properly",
            "Wrong comparison operator usage"
        ],

        tipsAndTricks: [
            "Use wildcards (? and *) for partial matches",
            "Can reference cells for criteria",
            "Consider AVERAGEIFS for multiple conditions",
            "Handle errors with IFERROR",
            "Use comparison operators effectively"
        ],

        examples: [
            {
                title: "Basic Average with Condition",
                data: [
                    ["Property Value", "Commission"],
                    ["100000", "7000"],
                    ["200000", "14000"],
                    ["300000", "21000"],
                    ["400000", "28000"]
                ],
                formula: "=AVERAGEIF(B2:B5, \"<23000\")",
                result: "14000",
                explanation: "Averages all commissions less than 23000. Three of the four commissions meet this condition (7000, 14000, 21000), and their average is 14000"
            },
            {
                title: "Regional Profits Example",
                data: [
                    ["Region", "Profits"],
                    ["East", "45678"],
                    ["West", "23789"],
                    ["North", "-4789"],
                    ["South (New Office)", "0"],
                    ["MidWest", "9678"]
                ],
                formula: "=AVERAGEIF(A2:A6, \"=*West\", B2:B6)",
                result: "16733.5",
                explanation: "Averages profits for regions containing 'West' in their name (West and MidWest)"
            }
        ],

        practice: {
            data: [
                ["Region", "Sales Rep", "Monthly Sales"],
                ["North", "John", "45000"],
                ["South", "Sarah", "52000"],
                ["North", "Mike", "38000"],
                ["South", "Lisa", "61000"],
                ["North", "Tom", "43000"]
            ],
            question: "Calculate the average sales for the North region:",
            answer: "=AVERAGEIF(A2:A6, \"North\", C2:C6)",
            hint: "Use AVERAGEIF to find the average sales for employees in the North region",
            explanation: "The formula averages sales values where the region is 'North'. It:\n1. Checks Region column for 'North'\n2. Takes corresponding sales values\n3. Calculates their average"
        }
    },

    "RANK": {
        syntax: "=RANK(number, ref, [order])",
        description: "RANK returns the rank of a number in a list of numbers. The rank of a number is its size relative to other values in a list. (If you were to sort the list, the rank of the number would be its position.)",
        microsoftUrl: "https://support.microsoft.com/en-us/office/rank-function-6a2fc49d-1831-4a03-9d8c-c279cf99f723",
        
        whenToUse: [
            "Finding the rank of a number in a list of numbers",
            "Creating dynamic references in formulas",
            "Combining with other functions for complex calculations",
            "Building advanced lookup solutions",
            "Working with multi-dimensional data"
        ],

        bestPractices: [
            "Ensure number is in the correct format",
            "Double-check ref boundaries",
            "Use structured references when possible",
            "Combine with other functions for complex calculations",
            "Consider data organization - is vertical best?"
        ],

        commonMistakes: [
            "Forgetting number format",
            "Using wrong ref boundaries",
            "Not handling out-of-range errors",
            "Incorrect number format",
            "Mixing up text and number formats"
        ],

        tipsAndTricks: [
            "Use structured references when possible",
            "Combine with other functions for complex calculations",
            "Consider data organization - is vertical best?",
            "Use absolute references when needed",
            "More flexible than VLOOKUP/HLOOKUP"
        ],

        examples: [
            {
                title: "Basic Rank",
                data: [
                    ["Product", "Q1", "Q2", "Q3", "Q4"],
                    ["Widgets", "100", "120", "150", "130"],
                    ["Gadgets", "200", "220", "240", "260"],
                    ["Tools", "150", "160", "170", "180"]
                ],
                formula: "=RANK(150, A1:A4)",
                result: "2",
                explanation: "Finds the rank of 150 in the list A1:A4"
            },
            {
                title: "Dynamic Rank with INDEX",
                data: [
                    ["Product", "Q1", "Q2", "Q3", "Q4"],
                    ["Widgets", "100", "120", "150", "130"],
                    ["Gadgets", "200", "220", "240", "260"],
                    ["Tools", "150", "160", "170", "180"]
                ],
                formula: "=RANK(INDEX(A1:E4, 0, 3), INDEX(A1:E4, 0, 1))",
                result: "2",
                explanation: "Finds the rank of the value in the third column (Q2 sales) in the first column (Product)"
            }
        ],

        practice: {
            data: [
                ["Product", "Q1", "Q2", "Q3", "Q4"],
                ["Widgets", "100", "120", "150", "130"],
                ["Gadgets", "200", "220", "240", "260"],
                ["Tools", "150", "160", "170", "180"]
            ],
            question: "Find the rank of 150 in the list A1:A4:",
            answer: "=RANK(150, A1:A4)",
            hint: "Remember to count carefully - 150 is in row 3",
            explanation: "The formula works because:\n" +
                "1. Array is A1:A4 (entire table)\n" +
                "2. A1:A4 contains numbers\n" +
                "3. SUM(A1:A4) returns 600\n" +
                "4. ISERROR returns FALSE (no error)"
        }
    },

    // Error Handling Functions
    "IFERROR": {
        syntax: "=IFERROR(value, value_if_error)",
        description: "Returns a value you specify if a formula evaluates to an error; otherwise, returns the result of the formula",
        microsoftUrl: "https://support.microsoft.com/en-us/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611",
        whenToUse: [
            "Handling division by zero errors",
            "Managing lookup function errors",
            "Cleaning up error messages in reports",
            "Providing user-friendly error messages",
            "Handling missing data scenarios"
        ],
        bestPractices: [
            "Keep error messages clear and concise",
            "Use meaningful replacement values",
            "Don't hide important errors",
            "Consider using specific error types",
            "Test both error and non-error cases"
        ],
        commonMistakes: [
            "Hiding important error information",
            "Using overly complex nested IFERRORs",
            "Not testing all error scenarios",
            "Using unclear error messages",
            "Masking underlying data issues"
        ],
        tipsAndTricks: [
            "Use with VLOOKUP for clean reports",
            "Combine with other error handling functions",
            "Keep replacement values meaningful",
            "Consider using IFNA for #N/A specific cases",
            "Test with different error types"
        ],
        examples: [
            {
                title: "Basic Error Handling",
                data: [
                    ["", "A", "B", "C"],
                    ["1", "Value", "Divisor", "Result"],
                    ["2", "100", "0", "=IFERROR(A2/B2, \"Cannot divide by zero\")"],
                    ["3", "200", "4", "=IFERROR(A3/B3, \"Cannot divide by zero\")"],
                    ["4", "300", "0", "=IFERROR(A4/B4, \"Cannot divide by zero\")"]
                ],
                formula: "=IFERROR(A2/B2, \"Cannot divide by zero\")",
                result: "Cannot divide by zero",
                explanation: "Returns a friendly message when trying to divide by zero"
            },
            {
                title: "VLOOKUP Error Handling",
                data: [
                    ["", "A", "B"],
                    ["1", "Product", "Price"],
                    ["2", "Apple", "1.99"],
                    ["3", "Banana", "0.99"],
                    ["4", "Search:", "=IFERROR(VLOOKUP(\"Orange\",A2:B4,2,FALSE), \"Product not found\")"]
                ],
                formula: "=IFERROR(VLOOKUP(\"Orange\",A2:B4,2,FALSE), \"Product not found\")",
                result: "Product not found",
                explanation: "Returns 'Product not found' when VLOOKUP can't find the value"
            }
        ],
        practice: {
            question: "Create a formula that divides A2 by B2, showing 'Invalid calculation' if there's an error",
            data: [
                ["", "A", "B", "C"],
                ["1", "Number", "Divisor", "Result"],
                ["2", "100", "0", ""],
                ["3", "200", "5", ""],
                ["4", "300", "0", ""]
            ],
            answer: "=IFERROR(A2/B2, \"Invalid calculation\")",
            hint: "Use IFERROR to catch the division by zero error and return a friendly message"
        }
    },

    "AVERAGE": {
        syntax: "=AVERAGE(number1, [number2], ...)",
        description: "Calculates the arithmetic mean of a range of numbers",
        // ... other properties ...
        examples: [
            {
                title: "Customer Satisfaction Ratings",
                data: [
                    ["", "A", "B"],
                    ["1", "Customer 1", "4.5"],
                    ["2", "Customer 2", "4.8"],
                    ["3", "Customer 3", "4.2"],
                    ["4", "Customer 4", "4.9"]
                ],
                formula: "=AVERAGE(B1:B4)",
                result: "4.6",
                explanation: "Calculates the average customer satisfaction rating"
            }
        ],
        practice: {
            question: "Calculate the average customer satisfaction rating",
            data: [
                ["", "A", "B"],
                ["1", "Customer 1", "4.5"],
                ["2", "Customer 2", "4.8"],
                ["3", "Customer 3", "4.2"],
                ["4", "Customer 4", "4.9"]
            ],
            answer: "=AVERAGE(B1:B4)",
            hint: "Add all ratings and divide by the number of customers"
        }
    }
}; 