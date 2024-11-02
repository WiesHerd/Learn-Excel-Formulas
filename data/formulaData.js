// Combine all formula data into one organized file
export const formulaData = {
  beginner: {
    title: "Beginner Track",
    description: "Master the fundamental Excel formulas",
    estimatedTime: "4-6 hours",
    prerequisites: "Basic Excel knowledge",
    sections: {
      "Basic Calculations": {
        "SUM": {
          syntax: "=SUM(number1, [number2], ...)",
          description: "Adds all numbers in a selected range of cells",
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
            "Including header rows in the range",
            "Missing hidden rows in the selection",
            "Including text cells in the range",
            "Not accounting for negative numbers",
            "Forgetting to update ranges when adding rows"
          ],
          tipsAndTricks: [
            "Double-click the cell corner to auto-fill formulas",
            "Use F4 to toggle absolute references",
            "Press Alt + = for quick sum of adjacent cells",
            "Use named ranges for clearer formulas",
            "Combine with other functions for complex calculations"
          ],
          examples: [
            {
              title: "Basic Sum Example",
              formula: "=SUM(A1:D1)",
              result: "100",
              explanation: "This formula adds all numbers in cells A1 through D1"
            },
            {
              title: "Multiple Range Sum",
              formula: "=SUM(B1:B4)",
              result: "6600",
              explanation: "Adds quarterly sales figures to find annual total"
            }
          ],
          practice: {
            question: "Calculate the total sales for all quarters",
            data: [
              ["", "A", "B", "C"],
              ["1", "Q1 Sales", "1200", ""],
              ["2", "Q2 Sales", "1500", ""],
              ["3", "Q3 Sales", "1800", ""],
              ["4", "Q4 Sales", "2100", ""]
            ],
            answer: "=SUM(B2:B5)",
            hint: "Use SUM with the range containing all quarterly sales figures"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89"
        },
        "AVERAGE": {
          syntax: "=AVERAGE(number1, [number2], ...)",
          description: "Calculates the arithmetic mean (average) of the given numbers",
          whenToUse: [
            "Finding average sales per month",
            "Calculating mean test scores",
            "Determining average customer satisfaction ratings",
            "Computing average delivery times",
            "Finding typical production rates"
          ],
          bestPractices: [
            "Remove or handle outliers appropriately",
            "Ensure all cells contain valid numbers",
            "Consider using AVERAGEIF for conditional averages",
            "Check for hidden rows that might affect the average",
            "Be mindful of zero values in your data"
          ],
          commonMistakes: [
            "Including header rows in the calculation",
            "Forgetting to exclude text values",
            "Not considering the impact of zero values",
            "Including blank cells in the range",
            "Mixing different types of data in the average"
          ],
          tipsAndTricks: [
            "Use AVERAGEIF to exclude zeros or specific values",
            "Combine with IF functions for more complex calculations",
            "Press F4 to toggle absolute references",
            "Use named ranges for clearer formulas",
            "Consider TRIMMEAN for data with outliers"
          ],
          examples: [
            {
              title: "Student Grades",
              data: [
                ["", "A", "B", "C", "D"],
                ["1", "Test 1", "85", "Quiz 1", "78"],
                ["2", "Test 2", "92", "Quiz 2", "88"],
                ["3", "Test 3", "89", "Quiz 3", "85"]
              ],
              explanation: "Calculates the average test score (88.67) and quiz score (83.67)"
            },
            {
              title: "Monthly Sales",
              data: [
                ["", "A", "B"],
                ["1", "January", "5400"],
                ["2", "February", "6200"],
                ["3", "March", "5800"],
                ["4", "Average", "=AVERAGE(B1:B3)"]
              ],
              explanation: "Finds the average monthly sales across the quarter"
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
            hint: "Use AVERAGE to find the mean satisfaction rating from all customers in column B"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/average-function-7b9b35ad-6bb8-4b84-b4f2-7bf3c6727569"
        },
        "COUNT": {
          syntax: "=COUNT(value1, [value2], ...)",
          description: "Counts the number of cells in a range that contain numbers",
          whenToUse: [
            "Counting the number of completed entries",
            "Finding total number of sales transactions",
            "Determining number of data points",
            "Counting non-empty numeric cells",
            "Validating data completeness"
          ],
          bestPractices: [
            "Use COUNTA for counting both numbers and text",
            "Verify range excludes header rows",
            "Consider COUNTIF for conditional counting",
            "Check for hidden rows in the range",
            "Be aware that zero values are counted"
          ],
          commonMistakes: [
            "Including header rows in the count",
            "Not accounting for hidden rows",
            "Confusing COUNT with COUNTA",
            "Missing blank cells in the range",
            "Forgetting that zeros are counted as numbers"
          ],
          tipsAndTricks: [
            "Use COUNTIF for specific criteria",
            "Combine with IF for complex counting",
            "Consider COUNTBLANK for empty cells",
            "Use COUNTA for text and numbers",
            "Verify data type in cells"
          ],
          examples: [
            {
              title: "Basic Count Example",
              data: [
                ["", "A", "B", "C"],
                ["1", "10", "", "Text"],
                ["2", "20", "30", "40"]
              ],
              explanation: "=COUNT(A1:C2) returns 4 as it counts only numeric values"
            }
          ],
          practice: {
            question: "Count the number of sales transactions",
            data: [
              ["", "Sales Amount"],
              ["1", "1200"],
              ["2", "1500"],
              ["3", ""],
              ["4", "2100"]
            ],
            answer: "=COUNT(B2:B5)",
            hint: "Count only the cells containing numeric values"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/count-function-050b7d32-cfb8-4b37-85f0-8e83b8d79f3a"
        },
        "MAX": {
          syntax: "=MAX(number1, [number2], ...)",
          description: "Returns the largest value in a set of numbers",
          whenToUse: [
            "Finding highest sales figure",
            "Determining peak performance",
            "Identifying maximum temperature",
            "Finding highest score",
            "Analyzing peak values in data"
          ],
          bestPractices: [
            "Verify range contains only numbers",
            "Check for hidden rows",
            "Consider MAXIFS for conditional max",
            "Account for negative numbers",
            "Use appropriate cell references"
          ],
          commonMistakes: [
            "Including header rows",
            "Missing hidden values",
            "Not considering negative numbers",
            "Including text cells",
            "Forgetting to update ranges"
          ],
          tipsAndTricks: [
            "Use MAXIFS for conditional maximum",
            "Combine with IF for complex criteria",
            "Consider LARGE for nth highest value",
            "Check for data consistency",
            "Verify range selection"
          ],
          examples: [
            {
              title: "Sales Analysis",
              data: [
                ["", "Monthly Sales"],
                ["1", "12500"],
                ["2", "15800"],
                ["3", "13200"]
              ],
              explanation: "=MAX(B2:B4) returns 15800, the highest sales figure"
            }
          ],
          practice: {
            question: "Find the highest temperature reading",
            data: [
              ["Day", "Temperature"],
              ["1", "72"],
              ["2", "75"],
              ["3", "68"],
              ["4", "78"]
            ],
            answer: "=MAX(B2:B5)",
            hint: "Look for the highest value in the temperature column"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/max-function-053a5092-3d3a-46d8-b6e9-3e9e9706b55d"
        },
        "MIN": {
          syntax: "=MIN(number1, [number2], ...)",
          description: "Returns the smallest value in a set of numbers",
          whenToUse: [
            "Finding lowest sales figure",
            "Determining minimum temperature",
            "Identifying lowest score",
            "Finding smallest value in dataset",
            "Analyzing minimum inventory levels"
          ],
          bestPractices: [
            "Verify range contains only numbers",
            "Check for hidden rows",
            "Consider MINIFS for conditional minimum",
            "Account for negative numbers",
            "Use appropriate cell references"
          ],
          commonMistakes: [
            "Including header rows",
            "Missing hidden values",
            "Not considering negative numbers",
            "Including text cells",
            "Forgetting to update ranges"
          ],
          tipsAndTricks: [
            "Use MINIFS for conditional minimum",
            "Combine with IF for complex criteria",
            "Consider SMALL for nth lowest value",
            "Check for data consistency",
            "Verify range selection"
          ],
          examples: [
            {
              title: "Temperature Analysis",
              data: [
                ["", "Daily Low"],
                ["1", "45"],
                ["2", "42"],
                ["3", "48"]
              ],
              explanation: "=MIN(B2:B4) returns 42, the lowest temperature"
            }
          ],
          practice: {
            question: "Find the lowest sales figure",
            data: [
              ["Month", "Sales"],
              ["Jan", "12500"],
              ["Feb", "9800"],
              ["Mar", "11200"],
              ["Apr", "10500"]
            ],
            answer: "=MIN(B2:B5)",
            hint: "Look for the smallest value in the sales column"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/min-function-053a5092-3d3a-46d8-b6e9-3e9e9706b55d"
        }
      },
      "Text Functions": {
        "LEFT": {
          syntax: "=LEFT(text, [num_chars])",
          description: "Extracts a specified number of characters from the start of a text string",
          whenToUse: [
            "Extracting first name from full name",
            "Getting area code from phone number",
            "Taking first part of product code",
            "Extracting country code from ID",
            "Getting first few digits of reference number"
          ],
          bestPractices: [
            "Always check the length of source text",
            "Consider using LEN to verify text length",
            "Handle spaces at the start of text",
            "Use with TRIM for cleaner results",
            "Consider case sensitivity"
          ],
          commonMistakes: [
            "Not accounting for leading spaces",
            "Requesting more characters than available",
            "Forgetting optional num_chars parameter",
            "Not handling NULL or empty values",
            "Mixing with numerical values"
          ],
          tipsAndTricks: [
            "Combine with TRIM to remove unwanted spaces",
            "Use with SEARCH for dynamic extraction",
            "Nest within other text functions",
            "Use with IFERROR for error handling",
            "Combine with LEN for dynamic length"
          ],
          examples: [
            {
              title: "Extract First Name",
              data: [
                ["A1"],
                ["John Smith"]
              ],
              formula: "=LEFT(A1, 4)",
              result: "John",
              explanation: "Extracts first 4 characters from the name"
            }
          ],
          practice: {
            question: "Extract the area code from the phone number",
            data: [
              ["Phone Number"],
              ["(555) 123-4567"]
            ],
            answer: "=LEFT(A2, 5)",
            hint: "Include the parentheses in the area code"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/left-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        },
        "RIGHT": {
          syntax: "=RIGHT(text, [num_chars])",
          description: "Extracts a specified number of characters from the end of a text string",
          whenToUse: [
            "Extracting last name from full name",
            "Getting file extensions",
            "Taking last digits of phone number",
            "Extracting year from date string",
            "Getting last part of product code"
          ],
          bestPractices: [
            "Verify text length before extraction",
            "Consider using LEN for dynamic lengths",
            "Handle trailing spaces",
            "Use with TRIM for cleaner results",
            "Account for varying text lengths"
          ],
          commonMistakes: [
            "Not accounting for trailing spaces",
            "Requesting more characters than available",
            "Forgetting optional num_chars parameter",
            "Not handling NULL or empty values",
            "Incorrect character count"
          ],
          tipsAndTricks: [
            "Combine with TRIM to remove spaces",
            "Use with SEARCH for dynamic extraction",
            "Nest within other text functions",
            "Use with IFERROR for error handling",
            "Combine with LEN for dynamic length"
          ],
          examples: [
            {
              title: "Extract File Extension",
              data: [
                ["A1"],
                ["document.xlsx"]
              ],
              formula: "=RIGHT(A1, 4)",
              result: "xlsx",
              explanation: "Extracts last 4 characters (file extension)"
            }
          ],
          practice: {
            question: "Extract the last 4 digits of the phone number",
            data: [
              ["Phone Number"],
              ["(555) 123-4567"]
            ],
            answer: "=RIGHT(A2, 4)",
            hint: "Get the digits after the dash"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/right-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        },
        "MID": {
          syntax: "=MID(text, start_num, num_chars)",
          description: "Extracts characters from the middle of a text string",
          whenToUse: [
            "Extracting middle name from full name",
            "Getting specific part of product code",
            "Extracting portion of date string",
            "Taking middle digits of phone number",
            "Getting substring from reference number"
          ],
          bestPractices: [
            "Verify text length before extraction",
            "Account for starting position carefully",
            "Consider using SEARCH for dynamic start",
            "Handle spaces in text",
            "Use appropriate character count"
          ],
          commonMistakes: [
            "Wrong starting position",
            "Incorrect character count",
            "Not accounting for spaces",
            "Starting position beyond text length",
            "Not handling NULL or empty values"
          ],
          tipsAndTricks: [
            "Use SEARCH to find starting position",
            "Combine with LEN for dynamic length",
            "Use with SUBSTITUTE for complex extraction",
            "Nest within other text functions",
            "Use IFERROR for error handling"
          ],
          examples: [
            {
              title: "Extract Middle Name",
              data: [
                ["A1"],
                ["John Robert Smith"]
              ],
              formula: "=MID(A1, 6, 6)",
              result: "Robert",
              explanation: "Extracts 6 characters starting at position 6"
            }
          ],
          practice: {
            question: "Extract the middle 3 digits of the phone number",
            data: [
              ["Phone Number"],
              ["(555) 123-4567"]
            ],
            answer: "=MID(A2, 7, 3)",
            hint: "Start after the area code and space"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/mid-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        },
        "LEN": {
          syntax: "=LEN(text)",
          description: "Returns the number of characters in a text string",
          whenToUse: [
            "Checking text length limits",
            "Validating input length",
            "Calculating string positions",
            "Verifying data format",
            "Dynamic text manipulation"
          ],
          bestPractices: [
            "Account for spaces in count",
            "Use TRIM for consistent results",
            "Consider hidden characters",
            "Handle NULL values appropriately",
            "Use for input validation"
          ],
          commonMistakes: [
            "Forgetting to count spaces",
            "Not handling NULL values",
            "Ignoring hidden characters",
            "Mixing with numerical values",
            "Not considering formatting"
          ],
          tipsAndTricks: [
            "Combine with TRIM for clean count",
            "Use for dynamic text extraction",
            "Validate input lengths",
            "Check for maximum lengths",
            "Use in error checking"
          ],
          examples: [
            {
              title: "Count Characters",
              data: [
                ["A1"],
                ["Excel Formula"]
              ],
              formula: "=LEN(A1)",
              result: "13",
              explanation: "Counts total characters including space"
            }
          ],
          practice: {
            question: "Find the length of the product code",
            data: [
              ["Product Code"],
              ["ABC-123-XYZ"]
            ],
            answer: "=LEN(A2)",
            hint: "Count all characters including hyphens"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/len-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        },
        "CONCATENATE": {
          syntax: "=CONCATENATE(text1, [text2], ...)",
          description: "Joins multiple text strings into one string",
          whenToUse: [
            "Combining first and last names",
            "Building email addresses",
            "Creating full addresses",
            "Joining parts of reference numbers",
            "Building custom text strings"
          ],
          bestPractices: [
            "Add spaces between combined texts",
            "Handle NULL values appropriately",
            "Consider using & operator alternative",
            "Plan for varying text lengths",
            "Use with TEXT for number formatting"
          ],
          commonMistakes: [
            "Forgetting spaces between words",
            "Not handling NULL values",
            "Mixing text and numbers without TEXT",
            "Too many arguments",
            "Not considering final length"
          ],
          tipsAndTricks: [
            "Use & operator for simpler joining",
            "Combine with TEXT for numbers",
            "Add spaces with \" \"",
            "Use with IF for conditional joining",
            "Handle errors with IFERROR"
          ],
          examples: [
            {
              title: "Join Names",
              data: [
                ["First", "Last"],
                ["John", "Smith"]
              ],
              formula: '=CONCATENATE(A2, " ", B2)',
              result: "John Smith",
              explanation: "Joins first and last name with a space"
            }
          ],
          practice: {
            question: "Create a full email address",
            data: [
              ["Username", "Domain"],
              ["john.smith", "@company.com"]
            ],
            answer: "=CONCATENATE(A2, B2)",
            hint: "Join the username with the domain"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/concatenate-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        }
      },
      "Logical Functions": {
        "IF": {
          syntax: "=IF(logical_test, value_if_true, [value_if_false])",
          description: "Returns one value if a condition is true and another value if it's false",
          whenToUse: [
            "Conditional formatting or calculations",
            "Pass/Fail grading",
            "Status checking (Yes/No scenarios)",
            "Performance evaluations",
            "Error checking in formulas"
          ],
          bestPractices: [
            "Keep conditions simple and clear",
            "Use consistent TRUE/FALSE values",
            "Consider nested IFs carefully",
            "Include value_if_false for completeness",
            "Test edge cases"
          ],
          commonMistakes: [
            "Too many nested IFs",
            "Forgetting value_if_false",
            "Complex logical tests",
            "Not handling errors",
            "Inconsistent TRUE/FALSE values"
          ],
          tipsAndTricks: [
            "Use IFS for multiple conditions",
            "Combine with AND/OR for complex logic",
            "Consider SWITCH for multiple options",
            "Use with IFERROR for error handling",
            "Keep formulas readable"
          ],
          examples: [
            {
              title: "Grade Check",
              data: [
                ["Score", "Result"],
                ["85", "=IF(A2>=70,\"Pass\",\"Fail\")"],
                ["65", "=IF(A3>=70,\"Pass\",\"Fail\")"]
              ],
              explanation: "Returns 'Pass' for scores 70 or above, 'Fail' for below 70"
            }
          ],
          practice: {
            question: "Create an IF formula that shows 'Over Budget' if expenses exceed 1000, otherwise 'Within Budget'",
            data: [
              ["Expenses"],
              ["1200"],
              ["800"]
            ],
            answer: "=IF(A2>1000,\"Over Budget\",\"Within Budget\")",
            hint: "Compare the expense value to 1000 and provide two different text responses"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/if-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        },
        "AND": {
          syntax: "=AND(logical1, [logical2], ...)",
          description: "Returns TRUE if all conditions are true, FALSE if any are false",
          whenToUse: [
            "Multiple criteria checking",
            "Complex validation rules",
            "Combined condition testing",
            "Quality control checks",
            "Multi-factor approval processes"
          ],
          bestPractices: [
            "Keep number of conditions manageable",
            "Test each condition separately first",
            "Use clear, simple conditions",
            "Consider order of operations",
            "Document complex logic"
          ],
          commonMistakes: [
            "Too many conditions",
            "Incorrect logical operators",
            "Not testing each part",
            "Mixing AND/OR incorrectly",
            "Forgetting parentheses"
          ],
          tipsAndTricks: [
            "Use with IF for conditional results",
            "Break complex logic into steps",
            "Test with simple TRUE/FALSE first",
            "Consider IFS for multiple conditions",
            "Document complex formulas"
          ],
          examples: [
            {
              title: "Bonus Eligibility",
              data: [
                ["Sales", "Attendance", "Eligible"],
                ["50000", "95%", "=AND(A2>=45000,B2>=90%)"],
                ["42000", "92%", "=AND(A3>=45000,B3>=90%)"]
              ],
              explanation: "Checks if both sales target and attendance requirements are met"
            }
          ],
          practice: {
            question: "Create an AND formula to check if both score is above 80 AND attendance is above 90%",
            data: [
              ["Score", "Attendance"],
              ["85", "95%"],
              ["75", "92%"]
            ],
            answer: "=AND(A2>80,B2>0.9)",
            hint: "Check both conditions using > operators"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/and-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        },
        "OR": {
          syntax: "=OR(logical1, [logical2], ...)",
          description: "Returns TRUE if any condition is true, FALSE if all are false",
          whenToUse: [
            "Alternative condition checking",
            "Error detection",
            "Multiple acceptable scenarios",
            "Flexible criteria matching",
            "Exception handling"
          ],
          bestPractices: [
            "Keep conditions clear and simple",
            "Test each condition separately",
            "Consider order of conditions",
            "Document complex logic",
            "Use meaningful condition names"
          ],
          commonMistakes: [
            "Confusing AND/OR logic",
            "Too many conditions",
            "Incorrect operator usage",
            "Not testing edge cases",
            "Forgetting parentheses"
          ],
          tipsAndTricks: [
            "Use with IF for readable results",
            "Combine with AND for complex logic",
            "Test with simple cases first",
            "Consider IFS for multiple conditions",
            "Document complex formulas"
          ],
          examples: [
            {
              title: "Discount Eligibility",
              data: [
                ["Purchase", "Member", "Discount"],
                ["150", "No", "=OR(A2>=200,B2=\"Yes\")"],
                ["250", "No", "=OR(A3>=200,B3=\"Yes\")"]
              ],
              explanation: "Checks if either purchase amount is over 200 OR customer is a member"
            }
          ],
          practice: {
            question: "Create an OR formula to check if either sales exceed 5000 OR the client is VIP",
            data: [
              ["Sales", "Client Type"],
              ["4500", "VIP"],
              ["5500", "Regular"]
            ],
            answer: "=OR(A2>5000,B2=\"VIP\")",
            hint: "Check sales threshold OR VIP status"
          },
          microsoftUrl: "https://support.microsoft.com/en-us/office/or-function-7b857038-b72b-4a3d-a37b-b5b72b5f04b1"
        }
      }
    }
  },
  intermediate: {
    title: "Intermediate Track",
    description: "Level up your Excel skills with more advanced formulas",
    estimatedTime: "6-8 hours",
    prerequisites: "Completion of Beginner Track",
    sections: {
      lookupFunctions: {
        title: "Lookup Functions",
        formulas: {
          VLOOKUP: {
            // ... existing VLOOKUP data
          },
          // ... other lookup functions
        }
      },
      // ... other intermediate sections
    }
  },
  advanced: {
    // ... similar structure for advanced
  }
}; 