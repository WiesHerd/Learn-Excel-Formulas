// This serves as our template for all formula data
export const standardFormulaStructure = {
  syntax: "=FORMULA(param1, [param2], ...)",
  description: "Clear description of what the formula does",
  microsoftUrl: "https://support.microsoft.com/...",
  
  // Learning section
  learn: {
    whenToUse: [],
    bestPractices: [],
    commonMistakes: [],
    tipsAndTricks: [],
    examples: [
      {
        title: "Example Title",
        headers: ["", "A", "B", "C"],  // Standard header structure
        data: [
          ["1", "Value1", "Value2", "Value3"],
          ["2", "Value1", "Value2", "Value3"]
        ],
        formula: "=FORMULA(...)",
        result: "Expected Result",
        explanation: "Step by step explanation"
      }
    ]
  },

  // Practice section
  practice: {
    question: "Clear practice question",
    headers: ["", "A", "B", "C"],      // Standard header structure
    data: [
      ["1", "Value1", "Value2", "Value3"],
      ["2", "Value1", "Value2", "Value3"]
    ],
    answer: "=FORMULA(...)",
    hint: "Helpful hint for users"
  }
} 