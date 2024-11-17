import * as XLSX from 'xlsx';

export const createTemplatesPack = () => {
  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Basic Data Table Template
  const dataTableWS = XLSX.utils.aoa_to_sheet([
    ['Data Organization Template'],
    [''],
    ['First Name', 'Last Name', 'Email', 'Department', 'Start Date'],
    ['John', 'Doe', 'john@example.com', 'Sales', '2024-01-15'],
    ['Jane', 'Smith', 'jane@example.com', 'Marketing', '2024-02-01'],
  ]);

  // Project Tracker Template
  const projectWS = XLSX.utils.aoa_to_sheet([
    ['Project Tracker Template'],
    [''],
    ['Project Name', 'Status', 'Start Date', 'Due Date', 'Assigned To', 'Progress'],
    ['Website Redesign', 'In Progress', '2024-03-01', '2024-04-15', 'John Doe', '45%'],
    ['Marketing Campaign', 'Planning', '2024-03-15', '2024-05-01', 'Jane Smith', '10%'],
  ]);

  // Add worksheets to workbook
  XLSX.utils.book_append_sheet(wb, dataTableWS, 'Data Organization');
  XLSX.utils.book_append_sheet(wb, projectWS, 'Project Tracker');

  return wb;
}; 