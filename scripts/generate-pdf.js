const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document in landscape orientation
const doc = new PDFDocument({
    margin: 50,
    size: 'A4',
    layout: 'landscape', // Switch to landscape
    bufferPages: true
});

// Pipe its output
doc.pipe(fs.createWriteStream('./public/files/excel-shortcuts.pdf'));

// Constants for layout (adjusted for landscape)
const PAGE_HEIGHT = 500; // Reduced to avoid extra space
const SECTION_HEIGHT = 25; // Slightly reduced
const ROW_HEIGHT = 20; // Slightly reduced
const HEADER_HEIGHT = 120;
const FOOTER_HEIGHT = 30; // Reduced footer height

// Column widths (adjusted for landscape)
const COLUMN_WIDTHS = {
    action: 200,
    windows: 180,
    mac: 180,
    description: 300
};

// Track position
let yPosition = 50;

// Title and Header
doc.fontSize(24)
   .fillColor('#2563EB')
   .font('Helvetica-Bold')
   .text('Excel Shortcuts Guide', {
       align: 'center'
   });

doc.moveDown(0.5);
doc.fontSize(14)
   .fillColor('#666666')
   .font('Helvetica')
   .text('A comprehensive guide to boost your productivity', {
       align: 'center'
   });

doc.moveDown(1.5);
yPosition = 150;

// Helper function to check if new page is needed
const checkNewPage = (contentHeight) => {
    if (yPosition + contentHeight > PAGE_HEIGHT - FOOTER_HEIGHT) {
        // Only add new page if there's actual content to follow
        if (Object.keys(shortcutSections).length > 0) {
            doc.addPage();
            yPosition = 50;
            return true;
        }
    }
    return false;
};

// Helper function for section headers
const addSection = (title) => {
    // Check if section will fit on current page
    const sectionHeight = SECTION_HEIGHT + ROW_HEIGHT; // Header + table header
    if (checkNewPage(sectionHeight)) {
        // If new page was added, we're already at the top
        yPosition = 50;
    }

    doc.fontSize(16)
       .fillColor('#1F2937')
       .font('Helvetica-Bold')
       .text(title, 50, yPosition);

    yPosition += SECTION_HEIGHT;
    drawTableHeader();
};

// Helper function to draw table header
const drawTableHeader = () => {
    const columns = ['Action', 'Windows', 'Mac', 'Description'];
    drawTableRow(columns, true);
};

// Helper function to draw table rows
const drawTableRow = (columns, isHeader = false) => {
    // Check if row will fit on current page
    if (checkNewPage(ROW_HEIGHT)) {
        // If new page was added, redraw the table header
        drawTableHeader();
    }

    const startX = 50;

    // Draw background for header
    if (isHeader) {
        doc.fillColor('#F3F4F6')
           .rect(startX - 5, yPosition - 5, 750, ROW_HEIGHT) // Adjusted width for landscape
           .fill();
    }

    // Draw columns
    doc.fillColor(isHeader ? '#1F2937' : '#374151')
       .fontSize(isHeader ? 12 : 11)
       .font(isHeader ? 'Helvetica-Bold' : 'Helvetica');

    doc.text(columns[0], startX, yPosition, {
        width: COLUMN_WIDTHS.action
    });
    
    doc.text(columns[1], startX + COLUMN_WIDTHS.action, yPosition, {
        width: COLUMN_WIDTHS.windows
    });
    
    doc.text(columns[2], startX + COLUMN_WIDTHS.action + COLUMN_WIDTHS.windows, yPosition, {
        width: COLUMN_WIDTHS.mac
    });

    if (columns[3] && !isHeader) {
        doc.text(columns[3], startX + COLUMN_WIDTHS.action + COLUMN_WIDTHS.windows + COLUMN_WIDTHS.mac, yPosition, {
            width: COLUMN_WIDTHS.description
        });
    }

    yPosition += ROW_HEIGHT;
};

// Comprehensive shortcuts data
const shortcutSections = {
    'Essential Power User Shortcuts': [
        ['Flash Fill (Auto-pattern)', 'Ctrl + E', '⌘ + E', 'Automatically detects and fills patterns in data'],
        ['Quick Analysis', 'Ctrl + Q', '⌘ + Q', 'Shows contextual data visualization options'],
        ['Filter Toggle', 'Ctrl + Shift + L', '⌘ + Shift + F', 'Quickly add filters to headers'],
        ['Select Current Region', 'Ctrl + A (once/twice)', '⌘ + A', 'Selects current data region or entire sheet'],
        ['Fill Handle Double-Click', 'Double-Click Fill Handle', 'Double-Click Fill Handle', 'Auto-fills based on pattern'],
        ['Copy Visible Cells Only', 'Alt + ;', '⌘ + Shift + V', 'Copies only visible cells in filtered data']
    ],

    'Pivot Table Mastery': [
        ['Create Pivot Table', 'Alt + N + V', '⌘ + Option + P', 'Creates pivot table from selected data'],
        ['Refresh All Pivots', 'Alt + F5', '⌘ + R', 'Updates all pivot tables'],
        ['Group Items', 'Alt + Shift + →', '⌘ + Shift + K', 'Groups selected pivot items'],
        ['Expand/Collapse Field', 'Alt + -/+', '⌘ + -/+', 'Shows/hides pivot detail'],
        ['Create Calculated Field', 'Alt + J + F + F', '⌘ + Option + V', 'Adds custom calculations'],
        ['Show Value As', 'Alt + J + F + V', '⌘ + Option + F', 'Changes value calculation type']
    ],

    'Advanced Formula Techniques': [
        ['Array Formula Enter', 'Ctrl + Shift + Enter', '⌘ + Return', 'Confirms array formula'],
        ['Evaluate Formula Parts', 'F9 in formula', 'F9 in formula', 'Tests selected parts of formulas'],
        ['Insert Structured Refs', 'Tab in formula', 'Tab in formula', 'Auto-completes table references'],
        ['Show Formula Evaluate', 'Alt + M + V', '⌘ + Option + `', 'Opens formula evaluation window'],
        ['Insert Multiple Sheets', 'Shift + F11', 'Shift + F11', 'Adds new worksheet'],
        ['Name Manager', 'Ctrl + F3', '⌘ + F3', 'Manages named ranges']
    ],

    'Data Analysis & Cleaning': [
        ['Remove Duplicates', 'Alt + A + M', '⌘ + Option + V', 'Removes duplicate rows'],
        ['Text to Columns', 'Alt + A + E', '⌘ + Option + E', 'Splits text into columns'],
        ['Group/Outline Data', 'Alt + Shift + →', '⌘ + Shift + K', 'Creates data groupings'],
        ['Subtotal', 'Alt + A + B', '⌘ + Option + T', 'Adds subtotals to groups'],
        ['Data Validation', 'Alt + A + V + V', '⌘ + Option + L', 'Sets data validation rules'],
        ['Goal Seek', 'Alt + A + W + G', '⌘ + Option + G', 'Performs what-if analysis']
    ],

    'Smart Selection Tricks': [
        ['Select to Last Cell', 'Ctrl + Shift + End', '⌘ + Shift + End', 'Selects to last used cell'],
        ['Select Current Array', 'Ctrl + /', '⌘ + /', 'Selects current array formula range'],
        ['Select Row Differences', 'Ctrl + \\', '⌘ + \\', 'Selects cells with different values'],
        ['Select Column Differences', 'Ctrl + |', '⌘ + |', 'Selects cells with different values'],
        ['Select Direct Precedents', 'Ctrl + [', '⌘ + [', 'Selects cells referenced by formula'],
        ['Select Direct Dependents', 'Ctrl + ]', '⌘ + ]', 'Selects cells depending on current cell']
    ],

    'Formatting Power Moves': [
        ['Copy Formatting', 'Ctrl + Shift + C', '⌘ + Option + C', 'Copies cell formatting only'],
        ['Paste Formatting', 'Ctrl + Shift + V', '⌘ + Option + V', 'Pastes formatting only'],
        ['Toggle Wrap Text', 'Alt + H + W', '⌘ + Option + W', 'Wraps text in cells'],
        ['Conditional Formatting', 'Alt + H + L', '⌘ + Option + L', 'Adds conditional formatting'],
        ['Clear Formatting', 'Alt + H + E + F', '⌘ + Option + E', 'Removes all formatting'],
        ['Apply Table Style', 'Ctrl + T', '⌘ + T', 'Converts range to table']
    ],

    'Productivity Boosters': [
        ['Split Window', 'Alt + W + S', '⌘ + Option + S', 'Splits window into panes'],
        ['Freeze Panes', 'Alt + W + F', '⌘ + Option + F', 'Freezes rows/columns'],
        ['Hide Rows', 'Ctrl + 9', '⌘ + 9', 'Hides selected rows'],
        ['Hide Columns', 'Ctrl + 0', '⌘ + 0', 'Hides selected columns'],
        ['Group Sheets', 'Ctrl + Shift + Click', '⌘ + Shift + Click', 'Groups multiple worksheets'],
        ['Camera Tool', 'Alt + J + C', '⌘ + Option + C', 'Creates linked picture of range']
    ]
};

// Modify the tips section
const addTipsSection = () => {
    // Force new page for tips
    doc.addPage();
    yPosition = 80; // Start lower from the top
    
    // Title for tips
    doc.fontSize(20) // Slightly larger title
       .fillColor('#2563EB')
       .text('Pro Tips for Excel Mastery', {
           align: 'center'
       });
    
    yPosition += 60; // More space after title
    
    const tips = [
        "Use Flash Fill (Ctrl + E) to automatically detect and fill patterns in your data",
        "Double-click the fill handle to auto-fill formulas or patterns",
        "Press F4 multiple times to cycle through absolute/relative references",
        "Use Tables (Ctrl + T) to make your formulas more readable and dynamic",
        "Learn to use Power Query for data transformation",
        "Master pivot tables for quick data analysis",
        "Use conditional formatting to highlight important information",
        "Combine keyboard shortcuts for faster navigation"
    ];

    tips.forEach((tip, index) => {
        doc.fontSize(12) // Slightly larger text
           .fillColor('#374151')
           .text(`${index + 1}. ${tip}`, {
               width: 700,
               align: 'left',
               indent: 40 // More indentation
           });
        yPosition += 40; // More space between tips
    });
};

// Modify how we handle the main content sections
Object.entries(shortcutSections).forEach(([section, shortcuts], index) => {
    if (index > 0) {
        yPosition += 15;
    }
    
    // Check if we need a new page
    if (yPosition > PAGE_HEIGHT - 100) {
        doc.addPage();
        yPosition = 50;
    }
    
    addSection(section);
    shortcuts.forEach(shortcut => drawTableRow(shortcut));
});

// Add tips section as the last page
addTipsSection();

// Add page numbers
const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i++) {
    doc.switchToPage(i);
    // Add footer
    doc.fontSize(10)
       .fillColor('#6B7280')
       .text(
           `Page ${i + 1} of ${range.count}`,
           0,
           PAGE_HEIGHT,
           { 
               align: 'center',
               width: doc.page.width
           }
       );
}

// Finalize PDF
doc.end();

console.log('PDF has been generated successfully!'); 