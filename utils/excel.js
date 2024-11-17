import * as XLSX from 'xlsx';

// Basic Excel utilities
export const XLSXUtils = {
  book_new: () => ({ SheetNames: [], Sheets: {} }),
  aoa_to_sheet: (data) => ({
    '!ref': `A1:${String.fromCharCode(65 + data[0].length - 1)}${data.length}`,
    ...data.reduce((acc, row, i) => {
      row.forEach((cell, j) => {
        acc[`${String.fromCharCode(65 + j)}${i + 1}`] = { v: cell };
      });
      return acc;
    }, {})
  }),
  book_append_sheet: (wb, ws, name) => {
    wb.SheetNames.push(name);
    wb.Sheets[name] = ws;
  }
};

export const XLSXWrite = (wb, opts) => {
  // This is a simplified version. You'll need to implement actual XLSX writing logic
  // or use a library like xlsx
  return JSON.stringify(wb);
};

export const generateExcelFile = (data, filename) => {
  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Convert data to worksheet
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, "Practice Sheet");

  // Generate file
  XLSX.writeFile(wb, `${filename}.xlsx`);
}; 