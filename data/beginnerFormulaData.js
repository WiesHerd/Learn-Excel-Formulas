export const beginnerFormulaData = {
  "SUM": {
    syntax: "=SUM(number1, [number2], ...)",
    description: "Adds all numbers in a selected range of cells",
    microsoftUrl: "https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89",
    whenToUse: [
      "Calculating total sales across periods",
      "Adding up expenses in a budget",
      "Finding total inventory quantities",
      "Summing scores or grades",
      "Calculating total costs"
    ],
    bestPractices: [
      "Always verify the range includes only numbers",
      "Check for hidden rows or columns",
      "Use cell references instead of typing numbers",
      "Consider using SUMIF for conditional sums",
      "Double-check range selection"
    ],
    commonMistakes: [
      "Including text or empty cells in the range",
      "Forgetting to include all relevant cells",
      "Missing hidden rows or columns",
      "Using commas instead of colons in ranges",
      "Including header rows in calculations"
    ],
    tipsAndTricks: [
      "Double-click the fill handle to copy down",
      "Use F9 to evaluate parts of formulas",
      "Press Alt + = for AutoSum",
      "Combine with other functions for subtotals",
      "Use named ranges for clearer formulas"
    ],
    examples: [
      {
        title: "Basic Sum Example",
        data: [
          ["", "A", "B", "C", "D"],
          ["1", "25", "30", "20", "25"],
          ["2", "Total", "=SUM(A1:D1)", "", ""]
        ],
        formula: "=SUM(A1:D1)",
        result: "100",
        explanation: "This formula adds all numbers in cells A1 through D1"
      },
      {
        title: "Multiple Range Sum",
        data: [
          ["", "A", "B"],
          ["1", "Q1 Sales", "1500"],
          ["2", "Q2 Sales", "1800"],
          ["3", "Q3 Sales", "1600"],
          ["4", "Q4 Sales", "1700"],
          ["5", "Total", "=SUM(B1:B4)"]
        ],
        formula: "=SUM(B1:B4)",
        result: "6600",
        explanation: "Adds quarterly sales figures to find annual total"
      }
    ],
    practice: {
      question: "Calculate the total monthly expenses for Q1",
      data: [
        ["", "A", "B"],
        ["1", "Month", "Expenses"],
        ["2", "January", "1200"],
        ["3", "February", "1500"],
        ["4", "March", "1800"]
      ],
      answer: "=SUM(B2:B4)",
      hint: "Use SUM to add up all expenses in column B (from B2 to B4)"
    }
  },

  "AVERAGE": {
    syntax: "=AVERAGE(number1, [number2], ...)",
    description: "Calculates the arithmetic mean of a range of numbers",
    microsoftUrl: "https://support.microsoft.com/en-us/office/average-function-047bac88-d466-426c-a32b-8f33eb960cf6",
    whenToUse: [
      "Finding average sales per period",
      "Calculating mean test scores",
      "Determining average customer ratings",
      "Computing average monthly expenses",
      "Finding typical values in a dataset"
    ],
    bestPractices: [
      "Verify all cells contain numbers",
      "Check for hidden rows or columns",
      "Consider removing outliers if needed",
      "Use AVERAGEIF for conditional averages",
      "Watch for zero vs blank cells"
    ],
    commonMistakes: [
      "Including text cells in the range",
      "Forgetting about hidden rows/columns",
      "Not accounting for zero values",
      "Mixing different types of numbers",
      "Including header rows in calculations"
    ],
    tipsAndTricks: [
      "Use AVERAGEIF for specific conditions",
      "Press F9 to evaluate parts of formulas",
      "Double-click the fill handle to copy down",
      "Combine with other functions for complex calculations",
      "Use named ranges for clearer formulas"
    ],
    examples: [
      {
        title: "Student Grades Average",
        data: [
          ["", "A", "B"],
          ["1", "Student", "Score"],
          ["2", "John", "85"],
          ["3", "Mary", "92"],
          ["4", "Tom", "78"]
        ],
        formula: "=AVERAGE(B2:B4)",
        result: "85",
        explanation: "Calculates the average score of three students"
      },
      {
        title: "Monthly Sales Average",
        data: [
          ["", "A", "B"],
          ["1", "Month", "Sales"],
          ["2", "January", "5000"],
          ["3", "February", "6200"],
          ["4", "March", "5800"],
          ["5", "April", "6100"]
        ],
        formula: "=AVERAGE(B2:B5)",
        result: "5775",
        explanation: "Finds the average monthly sales across a quarter to identify typical performance"
      }
    ],
    practice: {
      question: "Calculate the average daily sales for the week",
      data: [
        ["", "A", "B"],
        ["1", "Day", "Sales"],
        ["2", "Monday", "1200"],
        ["3", "Tuesday", "1400"],
        ["4", "Wednesday", "1300"],
        ["5", "Thursday", "1500"],
        ["6", "Friday", "1600"]
      ],
      answer: "=AVERAGE(B2:B6)",
      hint: "Use AVERAGE to find the mean sales value across all days"
    }
  },

  "COUNT": {
    syntax: "=COUNT(value1, [value2], ...)",
    description: "Counts the number of cells that contain numbers",
    microsoftUrl: "https://support.microsoft.com/en-us/office/count-function-043e1c7d-7726-4e80-8f32-07b23e057f89",
    whenToUse: [
      "Counting numbers in a range",
      "Finding the number of sales transactions",
      "Calculating the number of entries in a list",
      "Counting the number of completed tasks",
      "Finding the number of valid entries"
    ],
    bestPractices: [
      "Verify all cells contain numbers",
      "Check for hidden rows or columns",
      "Consider removing outliers if needed",
      "Use COUNTIF for conditional counts",
      "Watch for zero vs blank cells"
    ],
    commonMistakes: [
      "Including text cells in the range",
      "Forgetting about hidden rows/columns",
      "Not accounting for zero values",
      "Mixing different types of numbers",
      "Including header rows in calculations"
    ],
    tipsAndTricks: [
      "Use COUNTIF for specific conditions",
      "Press F9 to evaluate parts of formulas",
      "Double-click the fill handle to copy down",
      "Combine with other functions for complex calculations",
      "Use named ranges for clearer formulas"
    ],
    examples: [
      {
        title: "Basic Count Example",
        data: [
          ["", "A", "B"],
          ["1", "Value", "Type"],
          ["2", "100", "Number"],
          ["3", "Text", "Text"],
          ["4", "200", "Number"],
          ["5", "300", "Number"]
        ],
        formula: "=COUNT(A2:A5)",
        result: "3",
        explanation: "Counts only the numeric values in column A (100, 200, 300), ignoring the text value"
      },
      {
        title: "Sales Transactions Count",
        data: [
          ["", "A", "B", "C"],
          ["1", "Date", "Amount", "Status"],
          ["2", "1/1/2024", "500", "Complete"],
          ["3", "1/2/2024", "750", "Pending"],
          ["4", "1/3/2024", "", "Cancelled"],
          ["5", "1/4/2024", "1200", "Complete"]
        ],
        formula: "=COUNT(B2:B5)",
        result: "3",
        explanation: "Counts how many sales amounts are recorded, excluding the empty cell for the cancelled transaction"
      }
    ],
    practice: {
      question: "Count the number of completed tasks in the list",
      data: [
        ["", "A", "B"],
        ["1", "Task", "Status"],
        ["2", "Task 1", "Completed"],
        ["3", "Task 2", "Pending"],
        ["4", "Task 3", "Completed"],
        ["5", "Task 4", "Pending"]
      ],
      answer: "=COUNT(B2:B5)",
      hint: "Use COUNT to count the number of completed tasks in column B (from B2 to B5)"
    }
  },

  "MAX": {
    syntax: "=MAX(number1, [number2], ...)",
    description: "Returns the largest value in a set of numbers",
    microsoftUrl: "https://support.microsoft.com/en-us/office/max-function-e0012414-9ac8-4b34-9a47-73e662c08098",
    whenToUse: [
      "Finding highest sales value",
      "Identifying peak performance",
      "Determining highest score",
      "Finding maximum inventory level",
      "Calculating highest expense"
    ],
    bestPractices: [
      "Verify range contains only numbers",
      "Check for hidden rows or columns",
      "Consider using MAXIFS for conditions",
      "Watch for negative numbers",
      "Validate date formats if using dates"
    ],
    commonMistakes: [
      "Including text cells in the range",
      "Missing hidden rows with larger values",
      "Forgetting to include all relevant cells",
      "Mixing different number formats",
      "Not accounting for negative numbers"
    ],
    tipsAndTricks: [
      "Use MAXIFS for conditional maximum",
      "Combine with INDEX/MATCH for lookups",
      "Press F9 to evaluate parts of formulas",
      "Use named ranges for clarity",
      "Compare with MIN for range analysis"
    ],
    examples: [
      {
        title: "Basic Maximum Value",
        data: [
          ["", "A", "B"],
          ["1", "Month", "Sales"],
          ["2", "January", "1200"],
          ["3", "February", "1500"],
          ["4", "March", "1800"],
          ["5", "April", "1400"]
        ],
        formula: "=MAX(B2:B5)",
        result: "1800",
        explanation: "Finds the highest sales value across all months (March with 1800)"
      },
      {
        title: "Student Test Scores",
        data: [
          ["", "A", "B", "C", "D"],
          ["1", "Student", "Test 1", "Test 2", "Test 3"],
          ["2", "John", "85", "92", "88"],
          ["3", "Mary", "91", "88", "95"],
          ["4", "Tom", "78", "85", "82"]
        ],
        formula: "=MAX(B2:D4)",
        result: "95",
        explanation: "Finds the highest test score across all students and tests (Mary's Test 3 score)"
      }
    ],
    practice: {
      question: "Find the highest daily temperature for the week",
      data: [
        ["", "A", "B"],
        ["1", "Day", "Temperature (°F)"],
        ["2", "Monday", "72"],
        ["3", "Tuesday", "75"],
        ["4", "Wednesday", "68"],
        ["5", "Thursday", "73"],
        ["6", "Friday", "77"]
      ],
      answer: "=MAX(B2:B6)",
      hint: "Use MAX to find the highest temperature value in column B"
    }
  },

  "MIN": {
    syntax: "=MIN(number1, [number2], ...)",
    description: "Returns the smallest value in a set of numbers",
    microsoftUrl: "https://support.microsoft.com/en-us/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152",
    whenToUse: [
      "Finding lowest sales value",
      "Identifying minimum inventory level",
      "Determining lowest score",
      "Finding smallest expense",
      "Calculating minimum time"
    ],
    bestPractices: [
      "Verify range contains only numbers",
      "Check for hidden rows or columns",
      "Consider using MINIFS for conditions",
      "Watch for zero values",
      "Validate date formats if using dates"
    ],
    commonMistakes: [
      "Including text cells in the range",
      "Missing hidden rows with smaller values",
      "Forgetting to include all relevant cells",
      "Mixing different number formats",
      "Overlooking zero vs blank cells"
    ],
    tipsAndTricks: [
      "Use MINIFS for conditional minimum",
      "Combine with INDEX/MATCH for lookups",
      "Press F9 to evaluate parts of formulas",
      "Use named ranges for clarity",
      "Compare with MAX for range analysis"
    ],
    examples: [
      {
        title: "Basic Minimum Value",
        data: [
          ["", "A", "B"],
          ["1", "Product", "Price"],
          ["2", "Laptop", "999"],
          ["3", "Mouse", "25"],
          ["4", "Keyboard", "85"],
          ["5", "Headset", "65"]
        ],
        formula: "=MIN(B2:B5)",
        result: "25",
        explanation: "Finds the lowest price among all products (Mouse at $25)"
      },
      {
        title: "Monthly Expenses",
        data: [
          ["", "A", "B", "C", "D"],
          ["1", "Category", "Q1", "Q2", "Q3"],
          ["2", "Utilities", "150", "175", "160"],
          ["3", "Internet", "89", "89", "89"],
          ["4", "Phone", "65", "65", "70"]
        ],
        formula: "=MIN(B2:D4)",
        result: "65",
        explanation: "Finds the lowest expense across all categories and quarters (Phone bill in Q1 and Q2)"
      }
    ],
    practice: {
      question: "Find the lowest daily temperature for the week",
      data: [
        ["", "A", "B"],
        ["1", "Day", "Temperature (°F)"],
        ["2", "Monday", "45"],
        ["3", "Tuesday", "48"],
        ["4", "Wednesday", "42"],
        ["5", "Thursday", "46"],
        ["6", "Friday", "49"]
      ],
      answer: "=MIN(B2:B6)",
      hint: "Use MIN to find the lowest temperature value in column B"
    }
  },

  "LEFT": {
    syntax: "=LEFT(text, [num_chars])",
    description: "Returns a specified number of characters from the start of a text string",
    microsoftUrl: "https://support.microsoft.com/en-us/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c",
    whenToUse: [
      "Extracting first part of product codes",
      "Getting area codes from phone numbers",
      "Capturing name initials",
      "Extracting year from date codes",
      "Splitting text strings"
    ],
    bestPractices: [
      "Check text length before extracting",
      "Account for spaces in character count",
      "Consider using LEN to verify length",
      "Handle empty cells appropriately",
      "Use with TRIM for clean data"
    ],
    commonMistakes: [
      "Not counting spaces as characters",
      "Extracting more characters than available",
      "Forgetting optional num_chars parameter",
      "Not handling special characters properly",
      "Mixing with numerical values"
    ],
    tipsAndTricks: [
      "Combine with LEN for dynamic lengths",
      "Use with SEARCH for flexible extraction",
      "Handle errors with IFERROR",
      "Nest within other text functions",
      "Use for consistent length outputs"
    ],
    examples: [
      {
        title: "Basic Text Extraction",
        data: [
          ["", "A", "B"],
          ["1", "Product Code", "First 3 Chars"],
          ["2", "ABC123", "=LEFT(A2,3)"],
          ["3", "XYZ789", "=LEFT(A3,3)"],
          ["4", "DEF456", "=LEFT(A4,3)"]
        ],
        formula: "=LEFT(A2,3)",
        result: "ABC",
        explanation: "Extracts the first 3 characters from product code 'ABC123'"
      },
      {
        title: "Phone Number Area Codes",
        data: [
          ["", "A", "B"],
          ["1", "Phone Number", "Area Code"],
          ["2", "(555) 123-4567", "=LEFT(A2,3)"],
          ["3", "(999) 876-5432", "=LEFT(A3,3)"],
          ["4", "(888) 555-0123", "=LEFT(A4,3)"]
        ],
        formula: "=LEFT(A2,3)",
        result: "(55",
        explanation: "Extracts the first 3 characters including the opening parenthesis from a phone number"
      }
    ],
    practice: {
      question: "Extract the first 2 characters from each employee ID",
      data: [
        ["", "A", "B"],
        ["1", "Employee ID", "Department Code"],
        ["2", "IT12345", ""],
        ["3", "HR98765", ""],
        ["4", "MK45678", ""]
      ],
      answer: "=LEFT(A2,2)",
      hint: "Use LEFT to extract the department prefix (first 2 characters) from the Employee ID"
    }
  },

  "RIGHT": {
    syntax: "=RIGHT(text, [num_chars])",
    description: "Returns a specified number of characters from the end of a text string",
    microsoftUrl: "https://support.microsoft.com/en-us/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f",
    whenToUse: [
      "Extracting last digits of codes",
      "Getting file extensions",
      "Capturing last part of serial numbers",
      "Extracting year from dates",
      "Getting domain from email addresses"
    ],
    bestPractices: [
      "Check text length before extracting",
      "Account for spaces in character count",
      "Consider using LEN for verification",
      "Handle empty cells appropriately",
      "Use with TRIM for clean data"
    ],
    commonMistakes: [
      "Not counting spaces as characters",
      "Extracting more characters than available",
      "Forgetting optional num_chars parameter",
      "Not handling special characters properly",
      "Mixing with numerical values"
    ],
    tipsAndTricks: [
      "Combine with LEN for dynamic lengths",
      "Use with FIND for flexible extraction",
      "Handle errors with IFERROR",
      "Nest within other text functions",
      "Use for consistent length outputs"
    ],
    examples: [
      {
        title: "File Extensions",
        data: [
          ["", "A", "B"],
          ["1", "Filename", "Extension"],
          ["2", "report.pdf", "=RIGHT(A2,3)"],
          ["3", "data.xlsx", "=RIGHT(A3,4)"],
          ["4", "image.jpg", "=RIGHT(A4,3)"]
        ],
        formula: "=RIGHT(A2,3)",
        result: "pdf",
        explanation: "Extracts the 3-character file extension from 'report.pdf'"
      },
      {
        title: "Order Numbers",
        data: [
          ["", "A", "B"],
          ["1", "Order ID", "Sequence"],
          ["2", "ORD-2024-001", "=RIGHT(A2,3)"],
          ["3", "ORD-2024-002", "=RIGHT(A3,3)"],
          ["4", "ORD-2024-003", "=RIGHT(A4,3)"]
        ],
        formula: "=RIGHT(A2,3)",
        result: "001",
        explanation: "Extracts the last 3 digits (sequence number) from the order ID"
      }
    ],
    practice: {
      question: "Extract the last 4 digits from each phone number",
      data: [
        ["", "A", "B"],
        ["1", "Phone Number", "Last 4 Digits"],
        ["2", "555-123-4567", ""],
        ["3", "555-987-6543", ""],
        ["4", "555-456-7890", ""]
      ],
      answer: "=RIGHT(A2,4)",
      hint: "Use RIGHT to extract the last 4 digits from each phone number"
    }
  },

  "MID": {
    syntax: "=MID(text, start_num, num_chars)",
    description: "Returns a specific number of characters from a text string, starting at the position you specify",
    microsoftUrl: "https://support.microsoft.com/en-us/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028",
    whenToUse: [
      "Extracting middle portions of codes",
      "Getting specific parts of serial numbers",
      "Capturing middle names",
      "Extracting month from date strings",
      "Parsing fixed-width data"
    ],
    bestPractices: [
      "Verify start position exists",
      "Check text length before extracting",
      "Count positions carefully (starts at 1)",
      "Consider using FIND for dynamic positions",
      "Handle empty cells appropriately"
    ],
    commonMistakes: [
      "Starting position count from 0 (starts at 1)",
      "Extracting beyond text length",
      "Forgetting required num_chars parameter",
      "Not accounting for spaces",
      "Wrong position calculation"
    ],
    tipsAndTricks: [
      "Combine with FIND for dynamic extraction",
      "Use LEN to avoid going past string end",
      "Handle errors with IFERROR",
      "Chain with other text functions",
      "Use for fixed-width field extraction"
    ],
    examples: [
      {
        title: "Extract Year from Order ID",
        data: [
          ["", "A", "B"],
          ["1", "Order ID", "Year"],
          ["2", "ORD-2024-001", "=MID(A2,5,4)"],
          ["3", "ORD-2023-102", "=MID(A3,5,4)"],
          ["4", "ORD-2024-203", "=MID(A4,5,4)"]
        ],
        formula: "=MID(A2,5,4)",
        result: "2024",
        explanation: "Extracts 4 characters starting at position 5 to get the year from order ID"
      },
      {
        title: "Product Code Sections",
        data: [
          ["", "A", "B"],
          ["1", "Product Code", "Category"],
          ["2", "ABC-123-XYZ", "=MID(A2,5,3)"],
          ["3", "DEF-456-UVW", "=MID(A3,5,3)"],
          ["4", "GHI-789-RST", "=MID(A4,5,3)"]
        ],
        formula: "=MID(A2,5,3)",
        result: "123",
        explanation: "Extracts the middle 3 digits from a product code (position 5, length 3)"
      }
    ],
    practice: {
      question: "Extract the month from date codes (format: YYYY-MM-DD)",
      data: [
        ["", "A", "B"],
        ["1", "Date Code", "Month"],
        ["2", "2024-03-15", ""],
        ["3", "2024-04-22", ""],
        ["4", "2024-05-30", ""]
      ],
      answer: "=MID(A2,6,2)",
      hint: "Use MID to extract 2 characters starting at position 6 to get the month"
    }
  },

  "LEN": {
    syntax: "=LEN(text)",
    description: "Returns the number of characters in a text string",
    microsoftUrl: "https://support.microsoft.com/en-us/office/len-lenb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c",
    whenToUse: [
      "Calculating the length of text strings",
      "Verifying text lengths",
      "Creating dynamic text formulas",
      "Handling text lengths in conditional formulas",
      "Formatting text"
    ],
    bestPractices: [
      "Verify text length before extracting",
      "Account for spaces in character count",
      "Consider using FIND for dynamic lengths",
      "Handle empty cells appropriately",
      "Use with TRIM for clean data"
    ],
    commonMistakes: [
      "Not counting spaces as characters",
      "Extracting more characters than available",
      "Forgetting optional num_chars parameter",
      "Not accounting for special characters",
      "Wrong position calculation"
    ],
    tipsAndTricks: [
      "Combine with FIND for dynamic lengths",
      "Use with SEARCH for flexible extraction",
      "Handle errors with IFERROR",
      "Nest within other text functions",
      "Use for fixed-width field extraction"
    ],
    examples: [
      {
        title: "Basic Length Calculation",
        data: [
          ["", "A", "B"],
          ["1", "Text", "Length"],
          ["2", "Hello World", "=LEN(A2)"],
          ["3", "Excel", "=LEN(A3)"],
          ["4", "JavaScript", "=LEN(A4)"]
        ],
        formula: "=LEN(A2)",
        result: "11",
        explanation: "Calculates the length of the text 'Hello World'"
      },
      {
        title: "Text Length Verification",
        data: [
          ["", "A", "B"],
          ["1", "Text", "Length"],
          ["2", "Excel", "=LEN(A2)"],
          ["3", "Excel", "=LEN(A3)"],
          ["4", "Excel", "=LEN(A4)"]
        ],
        formula: "=LEN(A2)",
        result: "5",
        explanation: "Verifies the length of the text 'Excel'"
      }
    ],
    practice: {
      question: "Calculate the length of each company name",
      data: [
        ["", "A", "B"],
        ["1", "Company", "Length"],
        ["2", "Microsoft", ""],
        ["3", "Apple", ""],
        ["4", "Google", ""]
      ],
      answer: "=LEN(A2)",
      hint: "Use LEN to count the number of characters in each company name"
    }
  },

  "CONCATENATE": {
    syntax: "=CONCATENATE(text1, [text2], ...)",
    description: "Joins two or more text strings into one string",
    microsoftUrl: "https://support.microsoft.com/en-us/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d",
    whenToUse: [
      "Combining first and last names",
      "Creating full addresses",
      "Building email addresses",
      "Generating product descriptions",
      "Formatting report data"
    ],
    bestPractices: [
      "Add spaces between combined texts",
      "Use & operator for simpler joins",
      "Check for extra spaces",
      "Handle NULL or empty values",
      "Consider TEXT function for numbers"
    ],
    commonMistakes: [
      "Forgetting spaces between words",
      "Not handling empty cells",
      "Mixing text and numbers without conversion",
      "Overlooking special characters",
      "Not planning for variable length inputs"
    ],
    tipsAndTricks: [
      "Use & instead of CONCATENATE for simplicity",
      "Add spaces with \" \"",
      "Combine with TEXT for number formatting",
      "Use with TRIM to clean results",
      "Handle errors with IFERROR"
    ],
    examples: [
      {
        title: "Full Name Creation",
        data: [
          ["", "A", "B", "C"],
          ["1", "First Name", "Last Name", "Full Name"],
          ["2", "John", "Smith", "=CONCATENATE(A2,\" \",B2)"],
          ["3", "Mary", "Johnson", "=CONCATENATE(A3,\" \",B3)"],
          ["4", "Robert", "Brown", "=CONCATENATE(A4,\" \",B4)"]
        ],
        formula: "=CONCATENATE(A2,\" \",B2)",
        result: "John Smith",
        explanation: "Combines first name, a space, and last name into a full name"
      },
      {
        title: "Email Address Generation",
        data: [
          ["", "A", "B", "C"],
          ["1", "Username", "Domain", "Email Address"],
          ["2", "john.smith", "@company.com", "=CONCATENATE(A2,B2)"],
          ["3", "mary.j", "@company.com", "=CONCATENATE(A3,B3)"],
          ["4", "robert.b", "@company.com", "=CONCATENATE(A4,B4)"]
        ],
        formula: "=CONCATENATE(A2,B2)",
        result: "john.smith@company.com",
        explanation: "Combines username and domain to create complete email address"
      }
    ],
    practice: {
      question: "Create full addresses by combining street number, street name, and city",
      data: [
        ["", "A", "B", "C"],
        ["1", "Number", "Street", "City"],
        ["2", "123", "Main St", "Boston"],
        ["3", "456", "Park Ave", "New York"],
        ["4", "789", "Oak Rd", "Chicago"]
      ],
      answer: "=CONCATENATE(A2,\" \",B2,\", \",C2)",
      hint: "Combine the number, street, and city with appropriate spaces and punctuation"
    }
  },

  "IF": {
    syntax: "=IF(logical_test, value_if_true, value_if_false)",
    description: "Makes a logical comparison and returns one value if true and another if false",
    microsoftUrl: "https://support.microsoft.com/en-us/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2",
    whenToUse: [
      "Evaluating pass/fail conditions",
      "Categorizing data based on values",
      "Creating conditional messages",
      "Checking thresholds or limits",
      "Making yes/no decisions"
    ],
    bestPractices: [
      "Keep conditions simple and clear",
      "Use proper comparison operators",
      "Consider nested IFs carefully",
      "Test both true and false outcomes",
      "Handle errors appropriately"
    ],
    commonMistakes: [
      "Using = instead of == for comparison",
      "Forgetting quotation marks for text",
      "Too many nested IFs",
      "Not handling all possible outcomes",
      "Incorrect logical operators"
    ],
    tipsAndTricks: [
      "Use IFS for multiple conditions",
      "Combine with AND/OR for complex logic",
      "Test with extreme values",
      "Consider SWITCH for many conditions",
      "Use cell references for flexibility"
    ],
    examples: [
      {
        title: "Grade Assessment",
        data: [
          ["", "A", "B", "C"],
          ["1", "Student", "Score", "Result"],
          ["2", "John", "85", "=IF(B2>=70,\"Pass\",\"Fail\")"],
          ["3", "Mary", "65", "=IF(B3>=70,\"Pass\",\"Fail\")"],
          ["4", "Tom", "92", "=IF(B4>=70,\"Pass\",\"Fail\")"]
        ],
        formula: "=IF(B2>=70,\"Pass\",\"Fail\")",
        result: "Pass",
        explanation: "Checks if score is 70 or higher for passing grade"
      },
      {
        title: "Inventory Status",
        data: [
          ["", "A", "B", "C"],
          ["1", "Product", "Quantity", "Status"],
          ["2", "Laptops", "5", "=IF(B2<=10,\"Reorder\",\"In Stock\")"],
          ["3", "Phones", "25", "=IF(B3<=10,\"Reorder\",\"In Stock\")"],
          ["4", "Tablets", "8", "=IF(B4<=10,\"Reorder\",\"In Stock\")"]
        ],
        formula: "=IF(B2<=10,\"Reorder\",\"In Stock\")",
        result: "Reorder",
        explanation: "Indicates reorder needed when quantity falls to 10 or below"
      }
    ],
    practice: {
      question: "Categorize sales performance as 'Above Target' or 'Below Target' (Target: 5000)",
      data: [
        ["", "A", "B"],
        ["1", "Sales Rep", "Monthly Sales"],
        ["2", "Alice", "6200"],
        ["3", "Bob", "4800"],
        ["4", "Carol", "5500"]
      ],
      answer: "=IF(B2>5000,\"Above Target\",\"Below Target\")",
      hint: "Compare each sales value to 5000 and return appropriate message"
    }
  },

  "AND": {
    syntax: "=AND(logical1, [logical2], ...)",
    description: "Returns TRUE if all arguments are TRUE, and FALSE if any argument is FALSE",
    microsoftUrl: "https://support.microsoft.com/en-us/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9",
    whenToUse: [
      "Checking multiple conditions",
      "Validating data requirements",
      "Filtering for specific criteria",
      "Quality control checks",
      "Eligibility verification"
    ],
    bestPractices: [
      "Keep conditions clear and separate",
      "Test each condition individually first",
      "Limit number of conditions for clarity",
      "Use cell references for flexibility",
      "Consider combining with IF"
    ],
    commonMistakes: [
      "Too many conditions at once",
      "Incorrect logical operators",
      "Not testing all conditions",
      "Mixing AND/OR logic incorrectly",
      "Forgetting parentheses"
    ],
    tipsAndTricks: [
      "Use with IF for conditional results",
      "Break complex logic into steps",
      "Test extreme cases",
      "Document complex conditions",
      "Consider IFS for multiple outcomes"
    ],
    examples: [
      {
        title: "Loan Approval Check",
        data: [
          ["", "A", "B", "C", "D"],
          ["1", "Applicant", "Credit Score", "Income", "Eligible"],
          ["2", "John", "720", "55000", "=AND(B2>=700,C2>=50000)"],
          ["3", "Mary", "680", "60000", "=AND(B3>=700,C3>=50000)"],
          ["4", "Tom", "750", "45000", "=AND(B4>=700,C4>=50000)"]
        ],
        formula: "=AND(B2>=700,C2>=50000)",
        result: "TRUE",
        explanation: "Checks if both credit score is 700+ AND income is $50,000+"
      },
      {
        title: "Product Quality Control",
        data: [
          ["", "A", "B", "C", "D"],
          ["1", "Product", "Weight", "Size", "Passes QC"],
          ["2", "Item A", "10.2", "15", "=AND(B2>=10,B2<=11,C2>=14,C2<=16)"],
          ["3", "Item B", "9.8", "15.5", "=AND(B3>=10,B3<=11,C3>=14,C3<=16)"],
          ["4", "Item C", "10.5", "16.2", "=AND(B4>=10,B4<=11,C4>=14,C4<=16)"]
        ],
        formula: "=AND(B2>=10,B2<=11,C2>=14,C2<=16)",
        result: "TRUE",
        explanation: "Verifies weight is between 10-11 AND size is between 14-16"
      }
    ],
    practice: {
      question: "Check if students qualify for honors (need grade >= 90 AND attendance >= 95%)",
      data: [
        ["", "A", "B", "C"],
        ["1", "Student", "Grade", "Attendance %"],
        ["2", "Alice", "92", "97"],
        ["3", "Bob", "88", "96"],
        ["4", "Carol", "94", "93"]
      ],
      answer: "=AND(B2>=90,C2>=95)",
      hint: "Use AND to check both grade and attendance requirements"
    }
  },

  "OR": {
    syntax: "=OR(logical1, [logical2], ...)",
    description: "Returns TRUE if any argument is TRUE, and FALSE if all arguments are FALSE",
    microsoftUrl: "https://support.microsoft.com/en-us/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0",
    whenToUse: [
      "Checking alternative conditions",
      "Finding any matching criteria",
      "Setting up alert conditions",
      "Validating multiple options",
      "Error checking scenarios"
    ],
    bestPractices: [
      "Keep conditions clear and separate",
      "Test each condition individually",
      "Use cell references for flexibility",
      "Consider combining with IF",
      "Document complex conditions"
    ],
    commonMistakes: [
      "Confusing AND/OR logic",
      "Too many conditions at once",
      "Incorrect comparison operators",
      "Missing parentheses",
      "Not testing all scenarios"
    ],
    tipsAndTricks: [
      "Use with IF for conditional results",
      "Break complex logic into steps",
      "Test boundary conditions",
      "Consider IFS for multiple outcomes",
      "Combine with AND for complex logic"
    ],
    examples: [
      {
        title: "Sales Alert System",
        data: [
          ["", "A", "B", "C"],
          ["1", "Product", "Sales", "Alert"],
          ["2", "Laptops", "2", "=OR(B2<=5,B2>=50)"],
          ["3", "Phones", "55", "=OR(B3<=5,B3>=50)"],
          ["4", "Tablets", "25", "=OR(B4<=5,B4>=50)"]
        ],
        formula: "=OR(B2<=5,B2>=50)",
        result: "TRUE",
        explanation: "Alerts if sales are very low (<=5) OR very high (>=50)"
      },
      {
        title: "Customer Support Priority",
        data: [
          ["", "A", "B", "C", "D"],
          ["1", "Customer", "Wait Time", "Premium", "Priority"],
          ["2", "John", "30", "Yes", "=OR(B2>=20,C2=\"Yes\")"],
          ["3", "Mary", "10", "Yes", "=OR(B3>=20,C3=\"Yes\")"],
          ["4", "Tom", "25", "No", "=OR(B4>=20,C4=\"Yes\")"]
        ],
        formula: "=OR(B2>=20,C2=\"Yes\")",
        result: "TRUE",
        explanation: "Flags priority if wait time is long OR customer is premium"
      }
    ],
    practice: {
      question: "Flag orders needing special handling (if value > $1000 OR marked as 'Fragile')",
      data: [
        ["", "A", "B", "C"],
        ["1", "Order", "Value", "Type"],
        ["2", "Order1", "1200", "Standard"],
        ["3", "Order2", "500", "Fragile"],
        ["4", "Order3", "800", "Standard"]
      ],
      answer: "=OR(B2>1000,C2=\"Fragile\")",
      hint: "Use OR to check if either the value exceeds $1000 or the type is 'Fragile'"
    }
  }
}; 