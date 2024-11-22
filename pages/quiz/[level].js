import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Link from 'next/link';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  section: {
    margin: 10,
    padding: 10
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#2563EB'
  },
  category: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    color: '#1F2937'
  },
  shortcutRow: {
    flexDirection: 'row',
    marginBottom: 8
  },
  action: {
    width: '40%',
    fontSize: 12
  },
  shortcut: {
    width: '30%',
    fontSize: 12
  }
});

// Create Document Component
const ShortcutsPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Excel Shortcuts Guide</Text>
        
        {/* Editing Section */}
        <Text style={styles.category}>Editing</Text>
        <View style={styles.shortcutRow}>
          <Text style={styles.action}>Copy</Text>
          <Text style={styles.shortcut}>Ctrl+C</Text>
          <Text style={styles.shortcut}>⌘+C</Text>
        </View>
        {/* Add more shortcuts... */}
      </View>
    </Page>
  </Document>
);

// Main Page Component
export default function ShortcutsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Excel Shortcuts</h1>
        
        {/* Download Button */}
        <PDFDownloadLink 
          document={<ShortcutsPDF />} 
          fileName="excel-shortcuts.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Generating PDF...' : 'Download Shortcuts PDF'
          }
        </PDFDownloadLink>

        {/* Preview Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          {/* Add preview content here */}
        </div>
      </main>
    </div>
  );
}
