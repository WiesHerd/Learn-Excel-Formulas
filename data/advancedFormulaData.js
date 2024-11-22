export const advancedFormulaData = {
  // Array Formulas
  "UNIQUE": {
    syntax: "=UNIQUE(array, [by_col], [exactly_once])",
    description: "Returns a list of unique values in a list or range, removing any duplicate values",
    microsoftUrl: "https://support.microsoft.com/en-us/office/unique-function-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e",
    whenToUse: [
      "Creating lists without duplicates",
      "Finding unique customer names",
      "Extracting distinct categories",
      "Building filtered dropdown lists",
      "Cleaning up data lists"
    ],
    bestPractices: [
      "Consider case sensitivity",
      "Check for leading/trailing spaces",
      "Use with dynamic ranges",
      "Consider sorting before UNIQUE",
      "Combine with other array functions"
    ],
    commonMistakes: [
      "Not accounting for spaces",
      "Ignoring case sensitivity",
      "Forgetting it's a dynamic array",
      "Not providing enough space for results",
      "Mixing data types in the range"
    ],
    tipsAndTricks: [
      "Combine with SORT for organized lists",
      "Use with FILTER for complex criteria",
      "Press Ctrl+Shift+Enter in older Excel",
      "Consider using Tables for dynamic ranges",
      "Use @ operator for single results"
    ],
    examples: [
      {
        title: "Basic Unique List",
        data: [
          ["", "A", "B"],
          ["1", "Category", "Unique Categories"],
          ["2", "Fruit", "=UNIQUE(A2:A7)"],
          ["3", "Vegetable", ""],
          ["4", "Fruit", ""],
          ["5", "Dairy", ""],
          ["6", "Vegetable", ""],
          ["7", "Dairy", ""]
        ],
        formula: "=UNIQUE(A2:A7)",
        result: [
          "Fruit",
          "Vegetable",
          "Dairy"
        ],
        explanation: "This example:\n" +
          "• Takes a list of categories with duplicates\n" +
          "• Returns only unique values\n" +
          "• Original order is preserved\n" +
          "• Case-sensitive comparison\n\n" +
          "Note: Result is a dynamic array that automatically expands"
      }
    ],
    practice: {
      question: "Create a list of unique customer types from the following data",
      data: [
        ["", "A", "B"],
        ["1", "Customer", "Type"],
        ["2", "John", "Premium"],
        ["3", "Mary", "Basic"],
        ["4", "Tom", "Premium"],
        ["5", "Lisa", "Basic"],
        ["6", "Steve", "Premium"]
      ],
      answer: "=UNIQUE(B2:B6)",
      hint: "Use UNIQUE on the Type column to get a list of distinct customer types"
    }
  },

  "FILTER": {
    syntax: "=FILTER(array, include, [if_empty])",
    description: "Returns an array filtered to include only rows or columns that meet specified criteria",
    microsoftUrl: "https://support.microsoft.com/en-us/office/filter-function-f4f7cb66-82eb-4767-8f7c-4877ad80c759",
    whenToUse: [
        "Creating dynamic filtered lists",
        "Extracting data meeting specific criteria",
        "Building conditional reports",
        "Finding matching records",
        "Creating dashboard views"
    ],
    bestPractices: [
        "Use clear logical conditions",
        "Consider multiple criteria carefully",
        "Plan for no-match scenarios",
        "Keep criteria arrays same size as data",
        "Use structured references when possible"
    ],
    commonMistakes: [
        "Forgetting the if_empty parameter",
        "Criteria array size mismatch",
        "Complex nested conditions",
        "Not handling blank cells",
        "Incorrect logical operators"
    ],
    tipsAndTricks: [
        "Combine with other array functions",
        "Use * for AND conditions",
        "Use + for OR conditions",
        "Reference Tables for dynamic ranges",
        "Use meaningful if_empty messages"
    ],
    examples: [
        {
            title: "Sales Above Threshold",
            data: [
                ["", "A", "B", "C"],
                ["1", "Product", "Sales", "Filtered Results"],
                ["2", "Laptop", "1200", "=FILTER(A2:B6,B2:B6>1000,\"No products found\")"],
                ["3", "Phone", "800", ""],
                ["4", "Tablet", "1500", ""],
                ["5", "Monitor", "600", ""],
                ["6", "Printer", "1100", ""]
            ],
            formula: "=FILTER(A2:B6,B2:B6>1000,\"No products found\")",
            result: [
                ["Laptop", "1200"],
                ["Tablet", "1500"],
                ["Printer", "1100"]
            ],
            explanation: "This example:\n" +
                "• Filters products with sales > $1000\n" +
                "• Returns both product name and sales amount\n" +
                "• Shows \"No products found\" if nothing matches\n" +
                "• Maintains original column structure\n\n" +
                "Note: Result is a dynamic array that expands as needed"
        }
    ],
    practice: {
        question: "Filter the data to show only products in the 'Electronics' category with price above $500",
        data: [
            ["", "A", "B", "C"],
            ["1", "Product", "Category", "Price"],
            ["2", "Laptop", "Electronics", "1200"],
            ["3", "Pencil", "Stationery", "2"],
            ["4", "TV", "Electronics", "800"],
            ["5", "Paper", "Stationery", "5"],
            ["6", "Phone", "Electronics", "600"]
        ],
        answer: "=FILTER(A2:C6,(B2:B6=\"Electronics\")*(C2:C6>500),\"No matches found\")",
        hint: "Use FILTER with two conditions: category equals 'Electronics' AND price greater than 500"
    }
  },

  // Financial Functions
  "NPV": {
    syntax: "=NPV(rate, value1, [value2], ...)",
    description: "Calculates the Net Present Value of an investment using a discount rate and series of future cash flows",
    microsoftUrl: "https://support.microsoft.com/en-us/office/npv-function-8672cb67-2576-4d07-b67b-ac28acf2a568",
    whenToUse: [
        "Evaluating investment opportunities",
        "Comparing different projects",
        "Capital budgeting decisions",
        "Business project analysis",
        "Long-term investment planning"
    ],
    bestPractices: [
        "Include initial investment separately (it's not discounted)",
        "Use consistent period intervals",
        "Convert annual rates to match cash flow periods",
        "Consider inflation effects",
        "Document all assumptions"
    ],
    commonMistakes: [
        "Including initial investment inside NPV function",
        "Using wrong discount rate format (10 instead of 0.10)",
        "Mixing different period intervals",
        "Forgetting to add initial investment",
        "Wrong cash flow signs (negative/positive)"
    ],
    tipsAndTricks: [
        "Combine with IRR for complete analysis",
        "Use with XNPV for irregular periods",
        "Create sensitivity analysis with different rates",
        "Compare multiple scenarios",
        "Document all assumptions clearly"
    ],
    examples: [
        {
            title: "Investment Analysis",
            data: [
                ["", "A", "B", "C"],
                ["1", "Year", "Cash Flow", "Notes"],
                ["2", "Initial", "-10000", "Initial investment"],
                ["3", "Year 1", "3000", "First year return"],
                ["4", "Year 2", "4000", "Second year return"],
                ["5", "Year 3", "5000", "Third year return"],
                ["6", "NPV (10%)", "=NPV(0.1,B3:B5)+B2", "Including initial investment"]
            ],
            formula: "=NPV(0.1,B3:B5)+B2",
            result: "-$115.79",
            explanation: "This example:\n" +
                "• Uses 10% discount rate (0.1)\n" +
                "• Initial investment ($10,000) added separately\n" +
                "• Future cash flows discounted: $3000, $4000, $5000\n" +
                "• Negative result means investment doesn't meet 10% return\n\n" +
                "Note: Initial investment is not discounted, hence added separately"
        }
    ],
    practice: {
        question: "Calculate the NPV of a project with $5,000 initial investment and returns of $2,000, $2,500, and $3,000 over three years, using 12% discount rate",
        data: [
            ["Initial Investment", -5000],
            ["Year 1", 2000],
            ["Year 2", 2500],
            ["Year 3", 3000]
        ],
        answer: "=NPV(12%, B2:B4) + B1",
        hint: "Remember to:\n1. Add initial investment separately\n2. Use 12% (or 0.12) as rate\n3. Include only future cash flows in NPV function"
    }
  },

  "IRR": {
    syntax: "=IRR(values, [guess])",
    description: "Calculates the Internal Rate of Return for a series of cash flows, which is the interest rate that makes the NPV equal to zero",
    microsoftUrl: "https://support.microsoft.com/en-us/office/irr-function-64925eaa-9988-495b-b290-3ad0c163c1bc",
    whenToUse: [
        "Evaluating investment returns",
        "Comparing different investments",
        "Project profitability analysis",
        "Capital budgeting decisions",
        "Return rate calculations"
    ],
    bestPractices: [
        "Include initial investment as first negative value",
        "Use consistent time periods",
        "Ensure at least one positive and one negative value",
        "Consider multiple IRR possibilities",
        "Compare with required rate of return"
    ],
    commonMistakes: [
        "All positive or all negative cash flows",
        "Inconsistent time periods",
        "Missing initial investment",
        "Wrong cash flow signs",
        "Ignoring multiple IRR possibilities"
    ],
    tipsAndTricks: [
        "Use with NPV for complete analysis",
        "Try different guess values if error occurs",
        "Compare with cost of capital",
        "Use XIRR for irregular periods",
        "Document all assumptions"
    ],
    examples: [
        {
            title: "Project Return Analysis",
            data: [
                ["", "A", "B", "C"],
                ["1", "Period", "Cash Flow", "Notes"],
                ["2", "Initial", "-50000", "Initial investment"],
                ["3", "Year 1", "20000", "First year return"],
                ["4", "Year 2", "25000", "Second year return"],
                ["5", "Year 3", "30000", "Third year return"],
                ["6", "IRR", "=IRR(B2:B5)", "Internal Rate of Return"]
            ],
            formula: "=IRR(B2:B5)",
            result: "23.37%",
            explanation: "This example:\n" +
                "• Initial investment: -$50,000\n" +
                " Three years of increasing returns\n" +
                "• IRR of 23.37% means project exceeds 20% return requirement\n" +
                "• Positive IRR indicates profitable investment\n\n" +
                "Note: IRR is the rate that makes NPV = 0"
        }
    ],
    practice: {
        question: "Calculate the IRR for a project with $8,000 initial investment and returns of $3,000, $4,000, and $5,000 over three years",
        data: [
            ["Initial Investment", -8000],
            ["Year 1", 3000],
            ["Year 2", 4000],
            ["Year 3", 5000]
        ],
        answer: "=IRR(A1:A4)",
        hint: "Remember to:\n1. Include initial investment as negative\n2. List all cash flows in chronological order\n3. Use consistent time periods"
    }
  },

  "IFS": {
    syntax: "=IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...)",
    description: "Checks multiple conditions and returns a value corresponding to the first TRUE condition",
    microsoftUrl: "https://support.microsoft.com/en-us/office/ifs-function-36329a26-37b2-467c-972b-4a39bd951d45",
    whenToUse: [
      "Multiple condition checking",
      "Complex decision trees",
      "Grading systems",
      "Status categorization",
      "Multi-tier pricing"
    ],
    bestPractices: [
      "Order conditions properly",
      "Include catch-all condition",
      "Keep conditions simple",
      "Test edge cases",
      "Document complex logic"
    ],
    commonMistakes: [
      "Wrong condition order",
      "Missing conditions",
      "Overlapping conditions",
      "No default value",
      "Too complex conditions"
    ],
    tipsAndTricks: [
      "Use instead of nested IFs",
      "Include final TRUE condition",
      "Break down complex conditions",
      "Consider SWITCH alternative",
      "Document each condition"
    ],
    examples: [
      {
        title: "Grade Assignment",
        data: [
          ["", "A", "B"],
          ["1", "Score", "Grade"],
          ["2", "95", "=IFS(A2>=90,\"A\",A2>=80,\"B\",A2>=70,\"C\",A2>=60,\"D\",TRUE,\"F\")"],
          ["3", "85", "=IFS(A3>=90,\"A\",A3>=80,\"B\",A3>=70,\"C\",A3>=60,\"D\",TRUE,\"F\")"],
          ["4", "75", "=IFS(A4>=90,\"A\",A4>=80,\"B\",A4>=70,\"C\",A4>=60,\"D\",TRUE,\"F\")"]
        ],
        formula: "=IFS(A2>=90,\"A\",A2>=80,\"B\",A2>=70,\"C\",A2>=60,\"D\",TRUE,\"F\")",
        result: "A",
        explanation: "Assigns letter grades based on numerical scores:\n" +
          "• 90 or above → A\n" +
          "• 80-89 → B\n" +
          "• 70-79 → C\n" +
          "• 60-69 → D\n" +
          "• Below 60 → F\n\n" +
          "The formula evaluates each condition in order and returns the grade for the first true condition."
      }
    ],
    practice: {
      question: "Create pricing tiers based on quantity",
      data: [
        ["Quantity", "Price per Unit"],
        [100, ""],
        [500, ""],
        [1000, ""]
      ],
      answer: "=IFS(A2>=1000,8.99,A2>=500,9.99,A2>=100,10.99,TRUE,11.99)",
      hint: "Start with largest quantity and work down to smallest"
    }
  },

  "SWITCH": {
    syntax: "=SWITCH(expression, value1, result1, [value2, result2], ..., [default])",
    description: "Compares an expression against a list of values and returns the result corresponding to the first matching value",
    microsoftUrl: "https://support.microsoft.com/en-us/office/switch-function-47ab33c0-28ce-4530-8a45-d532ec4aa25e",
    whenToUse: [
      "Value-based lookups",
      "Category mapping",
      "Code conversions",
      "Status mapping",
      "Simple case statements"
    ],
    bestPractices: [
      "Include default value",
      "Use exact matches",
      "Order frequent cases first",
      "Keep values simple",
      "Consider data types"
    ],
    commonMistakes: [
      "Missing default value",
      "Wrong value types",
      "Too many cases",
      "Complex expressions",
      "Incorrect matching"
    ],
    tipsAndTricks: [
      "Faster than nested IFs",
      "Use for exact matches",
      "Consider IFS for ranges",
      "Handle errors in default",
      "Document complex mappings"
    ],
    examples: [
      {
        title: "Department Code Mapping",
        data: [
          ["Code", "Department"],
          ["HR", "Human Resources"],
          ["IT", "Information Technology"],
          ["FN", "Finance"],
          ["MK", "Unknown"]
        ],
        formula: "=SWITCH(A2, \"HR\", \"Human Resources\", \"IT\", \"Information Technology\", \"FN\", \"Finance\", \"Unknown\")",
        result: "Human Resources",
        explanation: "This example shows how SWITCH maps department codes to full names:\n" +
          "• When code is 'HR' → returns 'Human Resources'\n" +
          "• When code is 'IT' → returns 'Information Technology'\n" +
          "• When code is 'FN' → returns 'Finance'\n" +
          "• When code is anything else (like 'MK') → returns 'Unknown'\n\n" +
          "The formula evaluates the code in A2 and returns the matching department name. If no match is found, it returns the default value 'Unknown'."
      }
    ],
    practice: {
      question: "Create month number to name conversion",
      data: [
        ["Month Number", "Month Name"],
        [1, ""],
        [6, ""],
        [12, ""]
      ],
      answer: "=SWITCH(A2,1,\"January\",2,\"February\",3,\"March\",4,\"April\",5,\"May\",6,\"June\",7,\"July\",8,\"August\",9,\"September\",10,\"October\",11,\"November\",12,\"December\",\"Invalid\")",
      hint: "Include all 12 months and a default value for invalid numbers"
    }
  },

  "FREQUENCY": {
    syntax: "=FREQUENCY(data_array, bins_array)",
    description: "Calculates how often values occur within ranges of values (bins), returning a vertical array of numbers",
    whenToUse: [
      "Data distribution analysis",
      "Histogram creation",
      "Population distribution",
      "Score distribution",
      "Performance analysis"
    ],
    bestPractices: [
      "Sort bins in ascending order",
      "Use appropriate bin ranges",
      "Consider data spread",
      "Handle outliers",
      "Verify array sizes"
    ],
    commonMistakes: [
      "Unsorted bins",
      "Inappropriate bin ranges",
      "Not using as array formula",
      "Missing data points",
      "Incorrect array selection"
    ],
    tipsAndTricks: [
      "Use with chart creation",
      "Dynamic bin ranges",
      "Handle empty cells",
      "Combine with COUNTIF",
      "Visualize distributions"
    ],
    examples: [
      {
        title: "Test Score Distribution",
        data: [
          ["Scores", "Bins", "Frequency"],
          [85, 70, ""],
          [92, 80, ""],
          [78, 90, ""],
          [95, 100, ""]
        ],
        formula: "=FREQUENCY(A2:A5,B2:B5)",
        explanation: "Counts how many scores fall into each grade range"
      }
    ],
    practice: {
      question: "Create frequency distribution for sales data",
      data: [
        ["Sales", "Ranges"],
        [1500, 1000],
        [2300, 2000],
        [1800, 3000],
        [2700, 4000]
      ],
      answer: "=FREQUENCY(A2:A5,B2:B5)",
      hint: "Use FREQUENCY to count sales within each range bracket"
    }
  },

  "LAMBDA": {
    syntax: "=LAMBDA([parameter1, parameter2, ...], calculation)",
    description: "Creates a custom function that can be reused throughout the workbook",
    microsoftUrl: "https://support.microsoft.com/en-us/office/lambda-function-bd212d27-1cd1-4321-a34a-ccbf254b8b67",
    whenToUse: [
      "Custom function creation",
      "Complex calculations",
      "Repeated operations",
      "Formula simplification",
      "Code reusability"
    ],
    bestPractices: [
      "Use descriptive parameter names",
      "Keep functions focused",
      "Document functionality",
      "Test edge cases",
      "Consider error handling"
    ],
    commonMistakes: [
      "Too complex logic",
      "Missing parameters",
      "Unclear naming",
      "No error handling",
      "Recursive depth"
    ],
    tipsAndTricks: [
      "Name LAMBDAs for reuse",
      "Break down complex logic",
      "Include error checking",
      "Use with LET function",
      "Document parameters"
    ],
    examples: [
      {
        title: "Custom Markup Calculator",
        data: [
          ["", "A", "B", "C"],
          ["1", "Cost", "Markup %", "Sale Price"],
          ["2", "100", "25", "=LAMBDA(cost,markup,cost*(1+markup/100))($A2,$B2)"],
          ["3", "150", "30", "=LAMBDA(cost,markup,cost*(1+markup/100))($A3,$B3)"],
          ["4", "200", "20", "=LAMBDA(cost,markup,cost*(1+markup/100))($A4,$B4)"]
        ],
        formula: "=LAMBDA(cost,markup,cost*(1+markup/100))($A2,$B2)",
        result: "125",
        explanation: "This example:\n" +
          "• Creates reusable markup calculation\n" +
          "• Parameters: cost and markup percentage\n" +
          "• Formula calculates sale price with markup\n" +
          "• Can be reused with different inputs\n\n" +
          "Note: LAMBDA makes complex calculations reusable"
      }
    ],
    practice: {
      question: "Create LAMBDA for calculating area of triangle",
      data: [
        ["Base", "Height"],
        [10, 5]
      ],
      answer: "=LAMBDA(b,h,b*h/2)(A2,B2)",
      hint: "Use LAMBDA with base and height parameters to calculate triangle area"
    }
  },

  "LET": {
    syntax: "=LET(name1, value1, [name2, value2, ...], calculation)",
    description: "Assigns names to calculation results and uses them in a final calculation",
    microsoftUrl: "https://support.microsoft.com/en-us/office/let-function-34842dd8-b92b-4d3f-b325-b8b8f9908999",
    whenToUse: [
      "Complex formulas",
      "Repeated calculations",
      "Formula optimization",
      "Improved readability",
      "Performance improvement"
    ],
    bestPractices: [
      "Use meaningful names",
      "Break down complex calculations",
      "Order dependencies properly",
      "Document variables",
      "Consider reusability"
    ],
    commonMistakes: [
      "Unclear variable names",
      "Wrong dependency order",
      "Too many variables",
      "Missing final calculation",
      "Circular references"
    ],
    tipsAndTricks: [
      "Combine with LAMBDA",
      "Break down complex logic",
      "Reuse intermediate results",
      "Improve performance",
      "Enhance readability"
    ],
    examples: [
      {
        title: "Complex Price Calculation",
        data: [
          ["", "A", "B", "C"],
          ["1", "Base Price", "Tax Rate", "Discount"],
          ["2", "100", "10%", "20%"],
          ["3", "Final Price", "=LET(base,A2, tax,B2, disc,C2, subtotal,base*(1-disc), subtotal*(1+tax))", ""]
        ],
        formula: "=LET(base,A2, tax,B2, disc,C2, subtotal,base*(1-disc), subtotal*(1+tax))",
        result: "88",
        explanation: "This example calculates final price with tax and discount:\n" +
          "• base = $100 (original price)\n" +
          "• tax = 10% (tax rate)\n" +
          "• disc = 20% (discount)\n" +
          "• subtotal = $100 * (1-20%) = $80 (price after discount)\n" +
          "• final = $80 * (1+10%) = $88 (price with tax)\n\n" +
          "The LET function makes this clearer by naming each step of the calculation."
      }
    ],
    practice: {
      question: "Use LET to calculate compound interest",
      data: [
        ["Principal", "Rate", "Years"],
        [1000, 0.05, 3]
      ],
      answer: "=LET(p,A2,r,B2,t,C2,p*(1+r)^t)",
      hint: "Name variables for principal, rate, and time, then use in compound interest formula"
    }
  },

  "REGEX": {
    syntax: "=REGEXMATCH(text, regular_expression) or =REGEXEXTRACT(text, regular_expression)",
    description: "Uses regular expressions for pattern matching and text extraction (Office 365)",
    whenToUse: [
      "Pattern matching",
      "Text validation",
      "Data extraction",
      "String parsing",
      "Complex text operations"
    ],
    bestPractices: [
      "Test patterns thoroughly",
      "Document regex patterns",
      "Consider case sensitivity",
      "Handle no matches",
      "Validate input data"
    ],
    commonMistakes: [
      "Complex patterns",
      "Missing escape characters",
      "Wrong pattern syntax",
      "No error handling",
      "Performance issues"
    ],
    tipsAndTricks: [
      "Start with simple patterns",
      "Test with sample data",
      "Use pattern libraries",
      "Document patterns",
      "Consider alternatives"
    ],
    examples: [
      {
        title: "Email Validation",
        data: [
          ["Email", "Valid?"],
          ["test@example.com", "=REGEXMATCH(A2,\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\")"],
          ["invalid.email", ""]
        ],
        explanation: "Validates email addresses using regex pattern"
      }
    ],
    practice: {
      question: "Extract phone numbers from text",
      data: [
        ["Text"],
        ["Call me at 123-456-7890 or 987-654-3210"]
      ],
      answer: "=REGEXEXTRACT(A2,\"\\d{3}-\\d{3}-\\d{4}\")",
      hint: "Use regex pattern to match phone number format xxx-xxx-xxxx"
    }
  },

  "DSUM": {
    syntax: "=DSUM(database, field, criteria)",
    description: "Adds the numbers in a field of records in a database that match conditions you specify",
    microsoftUrl: "https://support.microsoft.com/en-us/office/dsum-function-53181285-0c4b-4f5a-aaa3-529a322be41b",
    whenToUse: [
      "Database calculations",
      "Filtered sum operations",
      "Complex data analysis",
      "Conditional summation",
      "Multi-criteria totals"
    ],
    bestPractices: [
      "Structure database properly",
      "Define clear criteria",
      "Use proper field names",
      "Verify criteria range",
      "Document complex criteria"
    ],
    commonMistakes: [
      "Incorrect field references",
      "Wrong criteria format",
      "Database structure issues",
      "Missing field names",
      "Criteria range errors"
    ],
    tipsAndTricks: [
      "Use with structured references",
      "Create clear criteria ranges",
      "Combine with other D functions",
      "Document criteria logic",
      "Consider SUMIFS alternative"
    ],
    examples: [
      {
        title: "Sales by Region",
        data: [
          ["", "A", "B", "C"],
          ["1", "Region", "Product", "Sales"],
          ["2", "North", "Widget", "1000"],
          ["3", "South", "Widget", "1200"],
          ["4", "North", "Gadget", "800"],
          ["5", "", "", ""],
          ["6", "Criteria:", "", ""],
          ["7", "Region", "", ""],
          ["8", "North", "", ""]
        ],
        formula: "=DSUM(A1:C4,\"Sales\",A7:A8)",
        result: "1800",
        explanation: "This example shows how to sum sales for a specific region:\n" +
          "• Database range (A1:C4) contains the sales data\n" +
          "• We want to sum the 'Sales' column\n" +
          "• Criteria range (A7:A8) specifies we want 'North' region only\n" +
          "• Result 1800 = 1000 (North Widget) + 800 (North Gadget)\n\n" +
          "Note: The criteria range must include both the field name ('Region') and the value ('North') in separate rows"
      }
    ],
    practice: {
      question: "Calculate total sales for specific product category",
      data: [
        ["Category", "Product", "Sales"],
        ["Electronics", "Laptop", 1200],
        ["Books", "Novel", 50],
        ["Electronics", "Phone", 800]
      ],
      answer: "=DSUM(A1:C4,\"Sales\",A5:A6)",
      hint: "Set up criteria range to filter Electronics category"
    }
  },

  "DCOUNT": {
    syntax: "=DCOUNT(database, field, criteria)",
    description: "Counts cells containing numbers in a field of records in a database that match conditions",
    microsoftUrl: "https://support.microsoft.com/en-us/office/dcount-function-c1fc7b93-fb0d-4d8d-97db-8d5f076eaeb1",
    whenToUse: [
      "Database record counting",
      "Filtered counting",
      "Complex data analysis",
      "Multi-criteria counting",
      "Conditional record counts"
    ],
    bestPractices: [
      "Verify field selection",
      "Structure criteria clearly",
      "Check for numeric fields",
      "Document criteria",
      "Consider data types"
    ],
    commonMistakes: [
      "Wrong field selection",
      "Criteria format errors",
      "Non-numeric fields",
      "Missing criteria range",
      "Database structure issues"
    ],
    tipsAndTricks: [
      "Use for numeric fields",
      "Combine with other D functions",
      "Create clear criteria",
      "Consider COUNTIFS alternative",
      "Document complex criteria"
    ],
    examples: [
      {
        title: "Count Sales Transactions",
        data: [
          ["Date", "Amount", "Region"],
          ["1/1/2024", 1000, "North"],
          ["1/2/2024", 1500, "South"],
          ["1/3/2024", 800, "North"],
          ["Criteria Range:", "", ""],
          ["Region", "", ""],
          ["North", "", ""]
        ],
        formula: "=DCOUNT(A1:C4, \"Amount\", A5:B6)",
        result: "2",
        explanation: "This example:\n" +
          "1. Uses a database of sales transactions (A1:C4)\n" +
          "2. Counts transactions in the 'Amount' column\n" +
          "3. Uses criteria range (A5:B6) to filter for 'North' region only\n" +
          "4. Returns 2 because there are two transactions in the North region\n\n" +
          "Note: The criteria range must be set up as a separate table with:\n" +
          "- Field name in first row (Region)\n" +
          "- Criteria value in second row (North)"
      }
    ],
    practice: {
      question: "Count transactions above $1000 in the South region",
      data: [
        ["Date", "Amount", "Region"],
        ["1/1/2024", 1200, "South"],
        ["1/2/2024", 800, "South"],
        ["1/3/2024", 1500, "South"]
      ],
      answer: "=DCOUNT(A1:C4, \"Amount\", A5:B6)",
      hint: "Set up criteria range with both Region='South' and Amount>1000 conditions"
    }
  },

  "FORECAST.LINEAR": {
    syntax: "=FORECAST.LINEAR(x, known_y's, known_x's)",
    description: "Predicts a future value based on existing values using linear regression",
    microsoftUrl: "https://support.microsoft.com/en-us/office/forecast-linear-function-2d6c003b-8940-4c3d-8c78-ff8754d9c657",
    whenToUse: [
      "Sales forecasting",
      "Trend analysis",
      "Future value prediction",
      "Data projection",
      "Linear trend estimation"
    ],
    bestPractices: [
      "Verify data relationships",
      "Check for linearity",
      "Use sufficient data points",
      "Consider outliers",
      "Document assumptions"
    ],
    commonMistakes: [
      "Non-linear relationships",
      "Too few data points",
      "Outlier influence",
      "Wrong x-value selection",
      "Ignoring context"
    ],
    tipsAndTricks: [
      "Plot data first",
      "Remove outliers",
      "Use with LINEST",
      "Consider seasonality",
      "Document limitations"
    ],
    examples: [
      {
        title: "Sales Trend Prediction",
        data: [
          ["", "A", "B", "C"],
          ["1", "Month", "Sales", "Forecast"],
          ["2", "1", "10000", ""],
          ["3", "2", "10500", ""],
          ["4", "3", "11200", ""],
          ["5", "4", "11800", ""],
          ["6", "5", "?", "=FORECAST.LINEAR(5,B2:B5,A2:A5)"]
        ],
        formula: "=FORECAST.LINEAR(5,B2:B5,A2:A5)",
        result: "12425",
        explanation: "This example:\n" +
          "• Uses historical sales data from months 1-4\n" +
          "• Predicts month 5 sales based on linear trend\n" +
          "• Known_y's: Sales values (B2:B5)\n" +
          "• Known_x's: Month numbers (A2:A5)\n" +
          "• New_x: Month 5\n\n" +
          "Note: Assumes linear relationship between months and sales"
      }
    ],
    practice: {
      question: "Forecast next month's revenue",
      data: [
        ["Month", "Revenue"],
        [1, 5000],
        [2, 5500],
        [3, 6000]
      ],
      answer: "=FORECAST.LINEAR(4,B2:B4,A2:A4)",
      hint: "Use previous 3 months to predict month 4 revenue"
    }
  },

  "SORT": {
    syntax: "=SORT(array, [sort_index], [sort_order], [by_col])",
    description: "Returns an array sorted by the values in one or more columns or rows, with options for ascending or descending order",
    microsoftUrl: "https://support.microsoft.com/en-us/office/sort-function-22f63bd0-ccc8-492f-953d-c20e8e44b86c",
    whenToUse: [
        "Creating dynamic sorted lists",
        "Organizing data automatically",
        "Building leaderboards or rankings",
        "Sorting multiple columns of data",
        "Creating sorted reports"
    ],
    bestPractices: [
        "Consider header rows separately",
        "Plan for dynamic ranges",
        "Use consistent data types",
        "Consider multiple sort levels",
        "Account for blank cells"
    ],
    commonMistakes: [
        "Mixing data types in sort columns",
        "Forgetting about blank cells",
        "Incorrect sort_index reference",
        "Wrong sort_order parameter",
        "Not planning for expanding data"
    ],
    tipsAndTricks: [
        "Combine with FILTER for sorted subsets",
        "Use with Tables for dynamic data",
        "Multiple sort columns for complex sorting",
        "Consider SORTBY for more control",
        "Use -1 for descending order"
    ],
    examples: [
        {
            title: "Basic Sales Ranking",
            data: [
                ["", "A", "B", "C"],
                ["1", "Product", "Sales", "Sorted by Sales"],
                ["2", "Laptop", "1200", "=SORT(A2:B6,2,-1)"],
                ["3", "Phone", "800", ""],
                ["4", "Tablet", "1500", ""],
                ["5", "Monitor", "600", ""],
                ["6", "Printer", "1100", ""]
            ],
            formula: "=SORT(A2:B6,2,-1)",
            result: "Tablet,1500\nLaptop,1200\nPrinter,1100\nPhone,800\nMonitor,600",
            explanation: "Sorts products by sales in descending order (highest to lowest)"
        },
        {
            title: "Multiple Column Sort",
            data: [
                ["", "A", "B", "C", "D"],
                ["1", "Category", "Product", "Sales", "Sorted Result"],
                ["2", "Tech", "Laptop", "1200", "=SORT(A2:C6,{1,3},{1,-1})"],
                ["3", "Office", "Paper", "150", ""],
                ["4", "Tech", "Tablet", "900", ""],
                ["5", "Office", "Desk", "500", ""],
                ["6", "Tech", "Phone", "800", ""]
            ],
            formula: "=SORT(A2:C6,{1,3},{1,-1})",
            result: "Office,Desk,500\nOffice,Paper,150\nTech,Laptop,1200\nTech,Phone,800\nTech,Tablet,900",
            explanation: "First sorts by Category (ascending), then by Sales (descending) within each category"
        }
    ],
    practice: {
        question: "Sort the student data by Grade (descending) and then by Name (ascending) for those with the same grade",
        data: [
            ["", "A", "B", "C"],
            ["1", "Name", "Grade", "Attendance"],
            ["2", "Tom", "95", "98%"],
            ["3", "Alice", "95", "97%"],
            ["4", "Bob", "88", "95%"],
            ["5", "Carol", "92", "99%"],
            ["6", "David", "88", "96%"]
        ],
        answer: "=SORT(A2:C6,{2,1},{-1,1})",
        hint: "Use SORT with two sort columns: Grade (column 2) descending (-1) and Name (column 1) ascending (1)"
    }
  },

  "SEQUENCE": {
    syntax: "=SEQUENCE(rows, [columns], [start], [step])",
    description: "Generates a list of sequential numbers in an array",
    microsoftUrl: "https://support.microsoft.com/en-us/office/sequence-function-57467a98-57e0-4817-9f14-2eb78519ca90",
    whenToUse: [
        "Creating numbered lists",
        "Generating series of numbers",
        "Building reference tables",
        "Creating date sequences",
        "Automated numbering"
    ],
    bestPractices: [
        "Specify all parameters for clarity",
        "Consider array size limitations",
        "Plan for spill range space",
        "Use with dynamic arrays",
        "Consider row/column orientation"
    ],
    commonMistakes: [
        "Not enough space for spill range",
        "Wrong row/column count",
        "Incorrect step value",
        "Forgetting array formula context",
        "Overlapping with other data"
    ],
    tipsAndTricks: [
        "Combine with other array functions",
        "Use for date series with step values",
        "Create multiplication tables",
        "Generate custom sequences",
        "Use negative steps for counting down"
    ],
    examples: [
        {
            title: "Basic Number Sequence",
            data: [
                ["", "A", "B"],
                ["1", "Numbers", "Description"],
                ["2", "=SEQUENCE(5)", "Basic 1-5 sequence"],
                ["3", "", ""],
                ["4", "", ""],
                ["5", "", ""],
                ["6", "", ""]
            ],
            formula: "=SEQUENCE(5)",
            result: "1\n2\n3\n4\n5",
            explanation: "Creates a simple sequence from 1 to 5"
        },
        {
            title: "Custom Start and Step",
            data: [
                ["", "A", "B"],
                ["1", "Even Numbers", "Description"],
                ["2", "=SEQUENCE(5, 1, 2, 2)", "Even numbers starting at 2"],
                ["3", "", ""],
                ["4", "", ""],
                ["5", "", ""],
                ["6", "", ""]
            ],
            formula: "=SEQUENCE(5, 1, 2, 2)",
            result: "2\n4\n6\n8\n10",
            explanation: "Generates a sequence of 5 even numbers starting at 2"
        },
        {
            title: "2D Sequence Grid",
            data: [
                ["", "A", "B", "C"],
                ["1", "Multiplication Table", "", ""],
                ["2", "=SEQUENCE(3, 3)", "", ""],
                ["3", "", "", ""],
                ["4", "", "", ""]
            ],
            formula: "=SEQUENCE(3, 3)",
            result: "1,2,3\n4,5,6\n7,8,9",
            explanation: "Creates a 3x3 grid of sequential numbers"
        }
    ],
    practice: {
        question: "Create a sequence of 4 numbers starting at 10 with a step of 5",
        data: [
            ["Starting Value", 10],
            ["Step Value", 5],
            ["Count", 4]
        ],
        answer: "=SEQUENCE(B3, 1, B1, B2)",
        hint: "Use SEQUENCE with rows=4, columns=1, start=10, and step=5"
    }
  },

  "PMT": {
    syntax: "=PMT(rate, nper, pv, [fv], [type])",
    description: "Calculates the monthly or periodic payment for a loan based on constant payments and a constant interest rate",
    microsoftUrl: "https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441",
    whenToUse: [
        "Calculating monthly mortgage payments",
        "Determining car loan payments",
        "Planning loan repayments",
        "Estimating lease payments",
        "Personal loan calculations"
    ],
    bestPractices: [
        "Always convert annual interest rates to monthly (divide by 12)",
        "Convert loan years to months (multiply by 12)",
        "Use negative number for loan amount (PV)",
        "Include all required parameters",
        "Double-check interest rate format (15% should be 0.15)"
    ],
    commonMistakes: [
        "Forgetting to convert annual rate to monthly",
        "Using wrong period count (years instead of months)",
        "Using wrong interest rate format (15 instead of 0.15)",
        "Ignoring payment timing (beginning vs end of period)",
        "Not accounting for down payments"
    ],
    tipsAndTricks: [
        "Use positive PV for borrowing, negative for investing",
        "Combine with other functions for amortization schedules",
        "Round results for cleaner numbers",
        "Use ABS() to make negative payments positive",
        "Consider FV for balloon payments"
    ],
    examples: [
        {
            title: "Basic Monthly Mortgage Payment",
            data: [
                ["", "A", "B", "C"],
                ["1", "Loan Details", "Value", "Explanation"],
                ["2", "Loan Amount", "$300,000", "Amount borrowed"],
                ["3", "Annual Rate", "4.5%", "Yearly interest rate"],
                ["4", "Years", "30", "Loan term in years"],
                ["5", "Monthly Payment", "=PMT(B3/12, B4*12, B2)", "Your monthly payment"],
                ["6", "", "", "Note: Result will be negative (payment out)"]
            ],
            formula: "=PMT(4.5%/12, 30*12, 300000)",
            result: "-$1,520.06",
            explanation: "This calculates your monthly mortgage payment where:\n" +
                "• 4.5%/12 converts annual rate to monthly\n" +
                "• 30*12 converts years to months\n" +
                "• 300000 is the loan amount"
        },
        {
            title: "Car Loan with Down Payment",
            data: [
                ["", "A", "B", "C"],
                ["1", "Car Details", "Value", "Notes"],
                ["2", "Car Price", "$25,000", "Total car cost"],
                ["3", "Down Payment", "$5,000", "Upfront payment"],
                ["4", "Annual Rate", "3.9%", "Yearly interest rate"],
                ["5", "Years", "5", "Loan term"],
                ["6", "Monthly Payment", "=PMT(B4/12, B5*12, B2-B3)", "Your monthly payment"]
            ],
            formula: "=PMT(3.9%/12, 5*12, 20000)",
            result: "-$368.38",
            explanation: "Calculates car payment after down payment where:\n" +
                "• Loan amount is reduced by down payment\n" +
                "• 3.9% annual rate is converted to monthly\n" +
                "• 5 years converted to 60 months"
        }
    ],
    practice: {
        question: "Calculate the monthly payment for a $10,000 personal loan at 6% annual interest for 3 years",
        data: [
            ["Loan Amount", "$10,000"],
            ["Annual Interest", "6%"],
            ["Years", "3"]
        ],
        answer: "=PMT(6%/12, 3*12, 10000)",
        hint: "Remember to:\n1. Convert 6% annual rate to monthly (÷12)\n2. Convert 3 years to months (×12)\n3. Use the loan amount as a positive number"
    }
  },

  "FV": {
    syntax: "=FV(rate, nper, pmt, [pv], [type])",
    description: "Calculates the future value of an investment based on periodic, constant payments and a constant interest rate",
    whenToUse: [
      "Investment planning",
      "Savings goals",
      "Retirement planning",
      "College fund planning",
      "Financial projections"
    ],
    bestPractices: [
      "Convert annual rates to periodic",
      "Consider payment timing",
      "Account for present value",
      "Verify payment frequency",
      "Check sign conventions"
    ],
    commonMistakes: [
      "Using wrong period conversion (e.g., forgetting to convert annual to monthly)",
      "Mixing up payment sign conventions (positive vs negative)",
      "Forgetting to account for payment timing (beginning vs end of period)",
      "Not considering inflation in long-term calculations",
      "Overlooking the impact of fees and taxes"
    ],
    tipsAndTricks: [
      "Use negative values for payments/investments out",
      "Convert annual rates to monthly (rate/12)",
      "Convert years to periods (years*12 for monthly)",
      "Consider timing of payments (start vs end of period)",
      "Use with PV to understand total interest earned"
    ],
    examples: [
      {
        title: "Savings Account Growth",
        data: [
          ["Monthly Deposit", 500],
          ["Annual Interest", "6%"],
          ["Years", 10],
          ["Future Value", "=FV(B2/12, B3*12, -B1)"]
        ],
        formula: "=FV(6%/12, 10*12, -500)",
        result: "78,227.81",
        explanation: "This example:\n" +
          "1. Calculates growth of $500 monthly deposits\n" +
          "2. Over 10 years with 6% annual interest\n" +
          "3. Converts annual rate to monthly (6%/12)\n" +
          "4. Payment is negative (cash outflow)\n\n" +
          "Note: Result shows how much savings will grow to after 10 years"
      }
    ],
    practice: {
      question: "Calculate college fund future value",
      data: [
        ["Monthly Saving", 300],
        ["Annual Return", "5%"],
        ["Years until College", 18]
      ],
      answer: "=FV(B2/12, B3*12, -B1)",
      hint: "Use monthly rate and convert years to months"
    }
  },

  // Array Manipulation Section
  "RANDARRAY": {
    syntax: "=RANDARRAY([rows], [columns], [min], [max], [whole_numbers])",
    description: "Returns an array of random numbers between 0 and 1, or between specified minimum and maximum values",
    microsoftUrl: "https://support.microsoft.com/en-us/office/randarray-function-21261e55-3bec-4885-86a6-8b0a47fd4d33",
    whenToUse: [
      "Generating sample data for testing",
      "Creating random distributions",
      "Simulating data scenarios",
      "Building Monte Carlo simulations",
      "Creating randomized test cases"
    ],
    bestPractices: [
      "Specify whole_numbers parameter for integer results",
      "Use appropriate row and column counts",
      "Consider using ROUND with decimal results",
      "Set min/max for meaningful ranges",
      "Use with other functions for complex simulations"
    ],
    commonMistakes: [
      "Forgetting it returns volatile results",
      "Not specifying whole numbers when needed",
      "Incorrect row/column dimensions",
      "Assuming results are static",
      "Not setting appropriate min/max bounds"
    ],
    tipsAndTricks: [
      "Combine with SORT for random sampling",
      "Use with IF for conditional random data",
      "Wrap in ROUND for specific decimal places",
      "Use as input for other array functions",
      "Create lookup tables with random values"
    ],
    examples: [
      {
        title: "Basic Random Array",
        data: [
          ["Formula", "Result"],
          ["=RANDARRAY(3,2)", "Creates 3x2 array of random decimals"]
        ],
        formula: "=RANDARRAY(3,2)",
        result: "[[0.45, 0.78], [0.23, 0.91], [0.67, 0.34]]",
        explanation: "Generates a 3x2 array of random numbers between 0 and 1"
      },
      {
        title: "Random Integers",
        data: [
          ["Formula", "Result"],
          ["=RANDARRAY(2,2, 1, 100, TRUE)", "Creates 2x2 array of random integers"]
        ],
        formula: "=RANDARRAY(2,2, 1, 100, TRUE)",
        result: "[[45, 78], [23, 91]]",
        explanation: "Generates a 2x2 array of random integers between 1 and 100"
      }
    ],
    practice: {
      question: "Create a 3x3 array of random integers between 1 and 10",
      data: [
        ["Task:", "Generate random integers for a simple game board"]
      ],
      answer: "=RANDARRAY(3,3, 1, 10, TRUE)",
      hint: "Use RANDARRAY with 5 parameters, setting whole_numbers to TRUE"
    }
  },

  "SORTBY": {
    syntax: "=SORTBY(array, by_array1, [sort_order1], [by_array2], [sort_order2], ...)",
    description: "Sorts the contents of an array based on the values in another array or arrays",
    microsoftUrl: "https://support.microsoft.com/en-us/office/sortby-function-cd2d7a62-1b93-435c-b561-d6a35134f28f",
    whenToUse: [
      "Sorting data by multiple criteria",
      "Custom sort orders",
      "Sorting related data together",
      "Creating ranked lists",
      "Organizing data hierarchically"
    ],
    bestPractices: [
      "Ensure arrays are same size",
      "Use consistent sort orders",
      "Verify data types match",
      "Consider using multiple sort criteria",
      "Check for blank cells"
    ],
    commonMistakes: [
      "Mismatched array sizes",
      "Incorrect sort order parameters",
      "Mixing data types",
      "Not handling blank cells",
      "Forgetting secondary sort criteria"
    ],
    tipsAndTricks: [
      "Combine with UNIQUE for distinct sorted values",
      "Use -1 for descending sort",
      "Sort by multiple columns",
      "Handle blanks with IFNA",
      "Create custom sort orders"
    ],
    examples: [
      {
        title: "Sort by Single Column",
        data: [
          ["Names", "Scores"],
          ["John", 85],
          ["Alice", 92],
          ["Bob", 78]
        ],
        formula: "=SORTBY(A2:A4, B2:B4, -1)",
        result: "Alice\nJohn\nBob",
        explanation: "Sorts names by scores in descending order"
      },
      {
        title: "Multiple Column Sort",
        data: [
          ["Department", "Sales", "Region"],
          ["Sales", 50000, "North"],
          ["Sales", 45000, "South"],
          ["Marketing", 30000, "North"]
        ],
        formula: "=SORTBY(A2:C4, A2:A4, 1, B2:B4, -1)",
        result: "Marketing, 30000, North\nSales, 50000, North\nSales, 45000, South",
        explanation: "Sorts first by department ascending, then by sales descending"
      }
    ],
    practice: {
      question: "Sort a list of products by price (descending) and then by name (ascending)",
      data: [
        ["Product", "Price"],
        ["Widget", 10],
        ["Gadget", 15],
        ["Tool", 10]
      ],
      answer: "=SORTBY(A2:A4, B2:B4, -1, A2:A4, 1)",
      hint: "Use SORTBY with two sort criteria: price descending (-1) and name ascending (1)"
    }
  },

  "HSTACK": {
    syntax: "=HSTACK(array1, [array2], ...)",
    description: "Combines arrays horizontally by appending columns, creating a single array",
    microsoftUrl: "https://support.microsoft.com/en-us/office/hstack-function-98c4ab76-10fe-4b4e-88c7-41e5c86f5e36",
    whenToUse: [
      "Combining data from multiple columns",
      "Merging separate data ranges horizontally",
      "Creating consolidated reports",
      "Building combined data sets",
      "Joining related data side by side"
    ],
    bestPractices: [
      "Ensure consistent row counts",
      "Verify data types are compatible",
      "Consider final array dimensions",
      "Handle missing values appropriately",
      "Check for proper alignment"
    ],
    commonMistakes: [
      "Mismatched row counts",
      "Inconsistent data types",
      "Not handling empty arrays",
      "Forgetting about array size limits",
      "Incorrect array references"
    ],
    tipsAndTricks: [
      "Combine with VSTACK for complex layouts",
      "Use with FILTER for dynamic combinations",
      "Pre-process arrays for consistency",
      "Handle errors with IFERROR",
      "Create multi-column reports"
    ],
    examples: [
      {
        title: "Basic Column Combination",
        data: [
          ["Names", "Scores", "Grades"],
          ["John", 85, "B"],
          ["Alice", 92, "A"],
          ["Bob", 78, "C"]
        ],
        formula: "=HSTACK(A2:A4, C2:C4)",
        result: "[[John, B], [Alice, A], [Bob, C]]",
        explanation: "Combines names and grades into a single array side by side"
      },
      {
        title: "Multiple Array Combination",
        data: [
          ["ID", "Name", "Score"],
          [1, "John", 85],
          [2, "Alice", 92],
          [3, "Bob", 78]
        ],
        formula: "=HSTACK(A2:A4, B2:B4, C2:C4)",
        result: "[[1, John, 85], [2, Alice, 92], [3, Bob, 78]]",
        explanation: "Combines three columns into a single horizontal array"
      }
    ],
    practice: {
      question: "Combine employee names with their department and salary information",
      data: [
        ["Name", "Department", "Salary"],
        ["John", "Sales", 50000],
        ["Alice", "Marketing", 55000],
        ["Bob", "Sales", 48000]
      ],
      answer: "=HSTACK(A2:A4, B2:B4, C2:C4)",
      hint: "Use HSTACK to combine all three columns into a single array"
    }
  },

  "VSTACK": {
    syntax: "=VSTACK(array1, [array2], ...)",
    description: "Combines arrays vertically by stacking rows, creating a single array",
    microsoftUrl: "https://support.microsoft.com/en-us/office/vstack-function-a4b86897-be0f-48fc-adca-fcc10d795a9c",
    whenToUse: [
      "Combining data from multiple rows",
      "Merging separate data ranges vertically",
      "Consolidating multiple reports",
      "Combining data from different sheets",
      "Creating master lists"
    ],
    bestPractices: [
      "Ensure consistent column counts",
      "Match data types across arrays",
      "Consider final array size",
      "Handle headers appropriately",
      "Verify array alignment"
    ],
    commonMistakes: [
      "Mismatched column counts",
      "Mixing data types",
      "Duplicating headers",
      "Exceeding array limits",
      "Incorrect array references"
    ],
    tipsAndTricks: [
      "Combine with HSTACK for complex layouts",
      "Use with UNIQUE to remove duplicates",
      "Pre-process arrays for consistency",
      "Handle errors with IFERROR",
      "Create consolidated reports"
    ],
    examples: [
      {
        title: "Combining Data Sets",
        data: [
          ["Q1 Sales"],
          ["North", 50000],
          ["South", 45000],
          ["Q2 Sales"],
          ["North", 52000],
          ["South", 48000]
        ],
        formula: "=VSTACK(A2:B3, A5:B6)",
        result: "[[North, 50000], [South, 45000], [North, 52000], [South, 48000]]",
        explanation: "Stacks Q1 and Q2 sales data into a single array"
      },
      {
        title: "Multiple List Combination",
        data: [
          ["Team A"],
          ["John"],
          ["Alice"],
          ["Team B"],
          ["Bob"],
          ["Carol"]
        ],
        formula: "=VSTACK(A2:A3, A5:A6)",
        result: "[[John], [Alice], [Bob], [Carol]]",
        explanation: "Combines two team lists into a single vertical array"
      }
    ],
    practice: {
      question: "Combine monthly sales data from different quarters into a single report",
      data: [
        ["Q1", "Sales"],
        ["Jan", 10000],
        ["Feb", 12000],
        ["Q2", "Sales"],
        ["Apr", 11000],
        ["May", 13000]
      ],
      answer: "=VSTACK(A2:B3, A5:B6)",
      hint: "Use VSTACK to combine the sales data from different quarters, excluding the headers"
    }
  },

  "TEXTSPLIT": {
    syntax: "=TEXTSPLIT(text, [col_delimiter], [row_delimiter], [ignore_empty], [match_mode], [pad_with])",
    description: "Splits text strings into an array of substrings based on specified delimiters",
    microsoftUrl: "https://support.microsoft.com/en-us/office/textsplit-function-b1ca414e-4c21-4ca0-b1b7-bdecace8a6e7",
    whenToUse: [
      "Parsing delimited text data",
      "Breaking down complex strings",
      "Converting text to structured data",
      "Processing CSV-like content",
      "Extracting data from formatted strings"
    ],
    bestPractices: [
      "Choose appropriate delimiters",
      "Handle empty values properly",
      "Consider case sensitivity",
      "Plan for irregular data",
      "Use appropriate match mode"
    ],
    commonMistakes: [
      "Wrong delimiter specification",
      "Not handling empty values",
      "Ignoring case sensitivity",
      "Forgetting about special characters",
      "Incorrect match mode selection"
    ],
    tipsAndTricks: [
      "Combine with TRIM for clean data",
      "Use multiple delimiters",
      "Handle errors with IFERROR",
      "Process multi-line text",
      "Create structured arrays"
    ],
    examples: [
      {
        title: "Basic Text Splitting",
        data: [
          ["Full Name"],
          ["John,Doe"],
          ["Jane,Smith"]
        ],
        formula: "=TEXTSPLIT(A2:A3, \",\")",
        result: "[[John, Doe], [Jane, Smith]]",
        explanation: "Splits names into first and last name using comma delimiter"
      },
      {
        title: "Complex Delimiter Splitting",
        data: [
          ["Data"],
          ["1|2|3;4|5|6"],
          ["7|8|9;10|11|12"]
        ],
        formula: "=TEXTSPLIT(A2:A3, \"|\", \";\")",
        result: "[[1,2,3], [4,5,6], [7,8,9], [10,11,12]]",
        explanation: "Splits text using both column and row delimiters"
      }
    ],
    practice: {
      question: "Split a CSV-style text string into an array of values",
      data: [
        ["Data"],
        ["Product,Price,Quantity"],
        ["Widget,10.99,50"]
      ],
      answer: "=TEXTSPLIT(A2:A3, \",\")",
      hint: "Use TEXTSPLIT with a comma delimiter to separate the CSV values"
    }
  },

  "TEXTBEFORE": {
    syntax: "=TEXTBEFORE(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])",
    description: "Returns the text that precedes a specified delimiter in a text string",
    microsoftUrl: "https://support.microsoft.com/en-us/office/textbefore-function-d099c28a-dba8-448e-ac6c-f086d0fa1b29",
    whenToUse: [
      "Extracting prefixes",
      "Getting usernames from emails",
      "Parsing structured text",
      "Finding text before markers",
      "Cleaning data formats"
    ],
    bestPractices: [
      "Specify correct instance number",
      "Consider case sensitivity",
      "Handle missing delimiters",
      "Use appropriate match mode",
      "Plan for error cases"
    ],
    commonMistakes: [
      "Wrong instance number",
      "Ignoring case sensitivity",
      "Not handling missing delimiters",
      "Incorrect match mode",
      "Forgetting about special characters"
    ],
    tipsAndTricks: [
      "Combine with TRIM for clean results",
      "Use with multiple delimiters",
      "Handle errors with IFERROR",
      "Process multiple instances",
      "Create clean data extracts"
    ],
    examples: [
      {
        title: "Extract Username from Email",
        data: [
          ["Email"],
          ["john.doe@example.com"],
          ["jane.smith@example.com"]
        ],
        formula: "=TEXTBEFORE(A2:A3, \"@\")",
        result: "[[john.doe], [jane.smith]]",
        explanation: "Extracts the username portion before the @ symbol"
      },
      {
        title: "Get First Word",
        data: [
          ["Full Text"],
          ["Hello World"],
          ["Good Morning Everyone"]
        ],
        formula: "=TEXTBEFORE(A2:A3, \" \")",
        result: "[[Hello], [Good]]",
        explanation: "Gets the first word before the space character"
      }
    ],
    practice: {
      question: "Extract the product code from a product ID (format: CODE-NUMBER)",
      data: [
        ["Product ID"],
        ["ABC-123"],
        ["XYZ-789"]
      ],
      answer: "=TEXTBEFORE(A2:A3, \"-\")",
      hint: "Use TEXTBEFORE with a hyphen delimiter to get the code portion"
    }
  },

  "TEXTAFTER": {
    syntax: "=TEXTAFTER(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])",
    description: "Returns the text that follows a specified delimiter in a text string",
    microsoftUrl: "https://support.microsoft.com/en-us/office/textafter-function-c8db2546-5b51-416a-9690-c7e6722e90b4",
    whenToUse: [
      "Extracting suffixes",
      "Getting domains from emails",
      "Parsing structured text",
      "Finding text after markers",
      "Cleaning data formats"
    ],
    bestPractices: [
      "Specify correct instance number",
      "Consider case sensitivity",
      "Handle missing delimiters",
      "Use appropriate match mode",
      "Plan for error cases"
    ],
    commonMistakes: [
      "Wrong instance number",
      "Ignoring case sensitivity",
      "Not handling missing delimiters",
      "Incorrect match mode",
      "Forgetting about special characters"
    ],
    tipsAndTricks: [
      "Combine with TRIM for clean results",
      "Use with multiple delimiters",
      "Handle errors with IFERROR",
      "Process multiple instances",
      "Create clean data extracts"
    ],
    examples: [
      {
        title: "Extract Domain from Email",
        data: [
          ["Email"],
          ["john.doe@example.com"],
          ["jane.smith@company.org"]
        ],
        formula: "=TEXTAFTER(A2:A3, \"@\")",
        result: "[[example.com], [company.org]]",
        explanation: "Extracts the domain portion after the @ symbol"
      },
      {
        title: "Get Last Name",
        data: [
          ["Full Name"],
          ["John Doe"],
          ["Jane Smith"]
        ],
        formula: "=TEXTAFTER(A2:A3, \" \")",
        result: "[[Doe], [Smith]]",
        explanation: "Gets the last name after the space character"
      }
    ],
    practice: {
      question: "Extract the number from a product ID (format: CODE-NUMBER)",
      data: [
        ["Product ID"],
        ["ABC-123"],
        ["XYZ-789"]
      ],
      answer: "=TEXTAFTER(A2:A3, \"-\")",
      hint: "Use TEXTAFTER with a hyphen delimiter to get the number portion"
    }
  },

  "ARRAYTOTEXT": {
    syntax: "=ARRAYTOTEXT(array, [delimiter], [include_empty])",
    description: "Converts an array into a text string with specified delimiters",
    microsoftUrl: "https://support.microsoft.com/en-us/office/arraytotext-function-9cdcad46-2fa5-4c6b-ac92-14e7bc862b8b",
    whenToUse: [
      "Converting arrays to strings",
      "Creating delimited lists",
      "Formatting data for export",
      "Combining array elements",
      "Preparing data for text processing"
    ],
    bestPractices: [
      "Choose appropriate delimiters",
      "Handle empty values properly",
      "Consider final string format",
      "Plan for large arrays",
      "Verify data consistency"
    ],
    commonMistakes: [
      "Wrong delimiter choice",
      "Not handling empty values",
      "Exceeding text limits",
      "Inconsistent data types",
      "Forgetting about formatting"
    ],
    tipsAndTricks: [
      "Use with dynamic arrays",
      "Combine with other text functions",
      "Handle errors with IFERROR",
      "Create custom separators",
      "Format for specific outputs"
    ],
    examples: [
      {
        title: "Basic Array to CSV",
        data: [
          ["Names"],
          ["John"],
          ["Jane"],
          ["Bob"]
        ],
        formula: "=ARRAYTOTEXT(A2:A4, \",\")",
        result: "John,Jane,Bob",
        explanation: "Converts an array of names into a comma-separated string"
      },
      {
        title: "Custom Delimiter",
        data: [
          ["Products", "Prices"],
          ["Widget", 10],
          ["Gadget", 15],
          ["Tool", 20]
        ],
        formula: "=ARRAYTOTEXT(A2:A4, \" | \")",
        result: "Widget | Gadget | Tool",
        explanation: "Converts product names into a pipe-delimited string"
      }
    ],
    practice: {
      question: "Convert an array of numbers into a semicolon-separated string",
      data: [
        ["Values"],
        [10],
        [20],
        [30]
      ],
      answer: "=ARRAYTOTEXT(A2:A4, \";\")",
      hint: "Use ARRAYTOTEXT with a semicolon delimiter to join the numbers"
    }
  }
}; 