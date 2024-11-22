import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 10,
    padding: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    color: '#2563EB',
    fontWeight: 'bold'
  },
  category: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#F3F4F6',
    padding: 8,
    color: '#1F2937'
  },
  shortcutRow: {
    flexDirection: 'row',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 4
  },
  action: {
    width: '40%',
    fontSize: 11
  },
  windows: {
    width: '30%',
    fontSize: 11
  },
  mac: {
    width: '30%',
    fontSize: 11
  }
});

const shortcuts = {
  editing: {
    title: "Editing",
    shortcuts: [
      { action: "Copy", windows: "Ctrl+C", mac: "⌘+C" },
      { action: "Paste", windows: "Ctrl+V", mac: "⌘+V" },
      { action: "Undo", windows: "Ctrl+Z", mac: "⌘+Z" },
      { action: "Redo", windows: "Ctrl+Y", mac: "⌘+Y" }
    ]
  },
  // Add more categories here...
};

const ShortcutsPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Excel Shortcuts Guide</Text>

        {Object.entries(shortcuts).map(([key, category]) => (
          <View key={key}>
            <Text style={styles.category}>{category.title}</Text>
            {category.shortcuts.map((shortcut, index) => (
              <View key={index} style={styles.shortcutRow}>
                <Text style={styles.action}>{shortcut.action}</Text>
                <Text style={styles.windows}>{shortcut.windows}</Text>
                <Text style={styles.mac}>{shortcut.mac}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ShortcutsPDF;
