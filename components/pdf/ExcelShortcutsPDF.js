import ReactPDF from '@react-pdf/renderer';
import ExcelShortcutsPDF from '../components/pdf/ExcelShortcutsPDF';
import path from 'path';

async function generatePDF() {
  await ReactPDF.render(
    <ExcelShortcutsPDF />,
    path.join(process.cwd(), 'public/files/excel-shortcuts.pdf')
  );
}

generatePDF().catch(console.error); 