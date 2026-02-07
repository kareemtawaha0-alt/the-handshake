/**
 * Backend Server for The Handshake Pro - Contract Templates Platform
 * Supports 15+ different contract types with specialized PDF generation
 */

const express = require('express');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Template-specific PDF generators
const pdfGenerators = require('./pdfGenerators');

/**
 * POST /generate-contract
 * Generate PDF based on template type
 */
app.post('/generate-contract', async (req, res) => {
    try {
        const { templateType, fields } = req.body;
        
        if (!templateType || !fields) {
            return res.status(400).json({ error: 'Missing required data' });
        }
        
        // Get the appropriate PDF generator
        const generator = pdfGenerators[templateType];
        
        if (!generator) {
            return res.status(400).json({ error: 'Invalid template type' });
        }
        
        // Create PDF document
        const doc = new PDFDocument({
            size: 'LETTER',
            margins: { top: 50, bottom: 50, left: 50, right: 50 }
        });
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${templateType}_contract.pdf`);
        
        // Pipe PDF to response
        doc.pipe(res);
        
        // Generate PDF content using template-specific generator
        generator(doc, fields);
        
        // Finalize PDF
        doc.end();
        
    } catch (error) {
        console.error('Error generating contract:', error);
        res.status(500).json({ error: 'Failed to generate contract', details: error.message });
    }
});

/**
 * Health check
 */
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running', templates: Object.keys(pdfGenerators).length });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║      🤝 The Handshake PRO - Contract Templates 🤝         ║
║                                                            ║
║  Server running on port ${PORT}                              ║
║                                                            ║
║  Access at: http://localhost:${PORT}                         ║
║                                                            ║
║  15+ Professional Contract Templates Available            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
