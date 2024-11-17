export const basicsData = {
  "Data Organization": {
    title: "Data Organization",
    description: "Learn how to structure your data effectively in Excel",
    icon: "table",
    color: "blue",
    topics: [
      {
        title: "Table Structure",
        content: "Proper headers, consistent data types, one piece of data per cell",
        examples: [
          {
            title: "Good vs Bad Data Structure",
            data: [
              ["Good Structure", "Bad Structure"],
              ["Clear Headers", "Merged Cells"],
              ["One value per cell", "Multiple values in one cell"],
              ["Consistent formats", "Mixed formats"]
            ]
          }
        ]
      },
      // ... more topics
    ]
  },
  "Excel Interface": {
    title: "Excel Interface",
    description: "Master Excel's interface and essential shortcuts",
    icon: "desktop",
    color: "purple",
    topics: [
      {
        title: "Navigation Shortcuts",
        content: "Essential keyboard shortcuts for faster Excel navigation",
        keyboardShortcuts: [
          { keys: "Ctrl + →", description: "Move to last cell in row" },
          { keys: "Ctrl + ↓", description: "Move to last cell in column" },
          { keys: "Ctrl + Home", description: "Go to beginning of worksheet" }
        ]
      }
      // ... more topics
    ]
  },
  // ... other sections
}; 