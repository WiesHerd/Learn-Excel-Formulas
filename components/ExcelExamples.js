// This component will contain our built-in examples
export const ExcelSVGExamples = {
  poorPractice: (
    <svg width="400" height="200" viewBox="0 0 400 200" className="border rounded">
      <rect width="100%" height="100%" fill="white"/>
      {/* Header */}
      <text x="10" y="30" fill="#333" fontSize="14" fontWeight="bold">
        SALES DATA 2024
      </text>
      {/* Merged Cells Example */}
      <rect x="10" y="40" width="380" height="40" fill="#f8f9fa" stroke="#dee2e6"/>
      <text x="15" y="65" fill="#333" fontSize="12">
        John Smith
      </text>
      <text x="200" y="65" fill="#333" fontSize="12">
        Sales: $1,234.56
      </text>
      {/* Inconsistent Data */}
      <rect x="10" y="90" width="380" height="30" fill="white" stroke="#dee2e6"/>
      <text x="15" y="110" fill="#333" fontSize="12">
        Region: North    Sales Period: Q1
      </text>
    </svg>
  ),

  goodPractice: (
    <svg width="400" height="200" viewBox="0 0 400 200" className="border rounded">
      <rect width="100%" height="100%" fill="white"/>
      {/* Table Headers */}
      <rect x="10" y="10" width="380" height="30" fill="#f8f9fa" stroke="#dee2e6"/>
      <text x="15" y="30" fill="#333" fontSize="12" fontWeight="bold">First_Name</text>
      <text x="115" y="30" fill="#333" fontSize="12" fontWeight="bold">Last_Name</text>
      <text x="215" y="30" fill="#333" fontSize="12" fontWeight="bold">Region</text>
      <text x="315" y="30" fill="#333" fontSize="12" fontWeight="bold">Sales_USD</text>
      {/* Data Rows */}
      <rect x="10" y="40" width="380" height="30" fill="white" stroke="#dee2e6"/>
      <text x="15" y="60" fill="#333" fontSize="12">John</text>
      <text x="115" y="60" fill="#333" fontSize="12">Smith</text>
      <text x="215" y="60" fill="#333" fontSize="12">North</text>
      <text x="315" y="60" fill="#333" fontSize="12">1,234.56</text>
    </svg>
  ),

  validationDropdown: (
    <svg width="200" height="150" viewBox="0 0 200 150" className="border rounded">
      <rect width="100%" height="100%" fill="white"/>
      {/* Dropdown Field */}
      <rect x="10" y="10" width="180" height="30" fill="#f8f9fa" stroke="#4a5568"/>
      <text x="15" y="30" fill="#333" fontSize="12">Department</text>
      <path d="M170 20 l10 10 l-20 0 z" fill="#4a5568"/>
      {/* Dropdown Options */}
      <rect x="10" y="40" width="180" height="100" fill="white" stroke="#4a5568"/>
      <text x="15" y="60" fill="#333" fontSize="12">• Sales</text>
      <text x="15" y="85" fill="#333" fontSize="12">• Marketing</text>
      <text x="15" y="110" fill="#333" fontSize="12">• Engineering</text>
      <text x="15" y="135" fill="#333" fontSize="12">• Human Resources</text>
    </svg>
  )
}; 