// Standard structure for ALL formulas
export const standardFormulaStructure = {
  // Basic Info
  syntax: "",
  description: "",
  microsoftUrl: "",
  
  // Core Sections
  whenToUse: [],
  bestPractices: [],
  commonMistakes: [],
  tipsAndTricks: [],
  
  // Examples Section - Standardized format
  examples: [
    {
      title: "",
      headers: [], // Always include headers
      data: [      // Always include data in consistent format
        // Each row as array
      ],
      formula: "",
      result: "",
      explanation: ""
    }
  ],
  
  // Practice Section - Standardized format
  practice: {
    question: "",
    headers: [], // Same format as examples
    data: [      // Same format as examples
      // Each row as array
    ],
    answer: "",
    hint: ""
  }
} 