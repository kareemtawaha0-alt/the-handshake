# 🤝 The Handshake PRO - Professional Contract Templates Platform

A comprehensive web application featuring **15+ professional contract templates** with dynamic PDF generation. Built with Node.js, Express.js, PDFKit, and vanilla JavaScript.
## 🚀 Live Demo

- Frontend (Netlify): https://handshak.netlify.app/
## ✨ Features

### 📄 15+ Professional Templates

1. **Loan Agreement** - Personal & business loans with repayment terms
2. **Service Agreement** - Professional services and deliverables
3. **Rental/Lease Agreement** - Property rental contracts
4. **Sales Agreement** - Purchase and sale of goods/property
5. **Non-Disclosure Agreement (NDA)** - Confidentiality protection
6. **Employment Contract** - Employee hiring agreements
7. **Partnership Agreement** - Business partnerships
8. **Freelance Contract** - Independent contractor agreements
9. **Payment Plan Agreement** - Installment payments
10. **Consulting Agreement** - Professional consulting services
11. **Vehicle Sales Agreement** - Car/vehicle purchase
12. **Contractor Agreement** - Construction and contractor services
13. **Roommate Agreement** - Shared living arrangements
14. **Confidentiality Agreement** - General confidentiality
15. **Settlement Agreement** - Dispute resolution

### 🎨 Modern UI/UX

- Clean, professional design with calming blue color palette
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Template cards with clear descriptions
- Dynamic form generation based on template type
- Real-time form validation
- Loading states and user feedback

### 🚀 Technical Features

- **Backend**: Node.js + Express.js
- **PDF Generation**: PDFKit with custom formatting
- **Dynamic Forms**: JavaScript-generated fields per template
- **No Database Required**: Stateless operation
- **Template-Specific Logic**: Unique PDF layout for each contract type
- **Professional Formatting**: Headers, boxes, signatures, footers

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Quick Start

1. **Navigate to project directory**:
   ```bash
   cd contract-templates
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
contract-templates/
├── index.html          # Main HTML with template selection & dynamic forms
├── styles.css          # Complete CSS styling
├── script.js           # Frontend JavaScript with template definitions
├── server.js           # Express.js server
├── pdfGenerators.js    # PDF generation functions for all templates
├── package.json        # Dependencies
└── README.md          # This file
```

## 🎯 How It Works

### 1. User Selects Template

Browse 15+ templates displayed as cards with:
- Icon representation
- Clear description
- Key features listed
- One-click selection

### 2. Dynamic Form Generation

JavaScript generates template-specific forms with:
- Relevant fields only
- Proper input types (text, email, date, number, textarea, select)
- Required field validation
- Helper text for guidance
- Organized sections

### 3. Server-Side PDF Generation

Express.js backend:
- Receives form data
- Validates required fields
- Calls template-specific PDF generator
- Returns professional PDF for download

### 4. Template-Specific PDFs

Each template has unique formatting:
- Custom headers and titles
- Party information boxes
- Formatted sections
- Signature lines
- Professional footer

## 🔧 Template Details

### Loan Agreement
Fields: Lender info, borrower info, principal amount, interest rate, repayment terms, late payment penalty

### Service Agreement
Fields: Provider info, client info, service description, deliverables, timeline, payment terms

### Rental Agreement
Fields: Landlord info, tenant info, property details, rent amount, lease period, security deposit

### Employment Contract
Fields: Employer info, employee info, job title, salary, benefits, duties, work schedule

### NDA
Fields: Disclosing party, receiving party, confidential information, purpose, duration, exceptions

### And 10+ more specialized templates!

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... more colors ... */
}
```

### Add New Template

1. Add template definition in `script.js`:
```javascript
templateDefinitions.newTemplate = {
    title: 'New Template Name',
    description: 'Description',
    fields: [/* field definitions */]
};
```

2. Add PDF generator in `pdfGenerators.js`:
```javascript
function generateNewTemplate(doc, fields) {
    // PDF generation logic
}

module.exports = {
    // ... other templates,
    newTemplate: generateNewTemplate
};
```

### Modify Existing Template

Edit the template definition in `script.js` and its corresponding PDF generator in `pdfGenerators.js`.

## 🔒 Security Considerations

For production deployment:
- Add user authentication
- Implement rate limiting
- Add CSRF protection
- Use HTTPS/SSL
- Implement file storage (optional)
- Add digital signatures capability
- Input sanitization

## 🌐 API Endpoints

### POST /generate-contract

Generate PDF contract from template and form data.

**Request Body**:
```json
{
  "templateType": "loan",
  "fields": {
    "lenderName": "John Doe",
    "borrowerName": "Jane Smith",
    // ... more fields
  }
}
```

**Response**: PDF file (application/pdf)

### GET /health

Health check endpoint.

**Response**:
```json
{
  "status": "OK",
  "message": "Server is running",
  "templates": 15
}
```

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions for:
- Heroku
- Vercel  
- DigitalOcean/AWS/VPS
- Docker

## 📝 Development

### Run in Development Mode

```bash
npm run dev
```

Uses nodemon for auto-reload on file changes.

### Add New Features

1. Form validation rules
2. Additional PDF formatting
3. Email notifications
4. Cloud storage integration
5. User accounts
6. Contract history

## ⚠️ Legal Disclaimer

This platform provides basic contract templates for informational purposes. These templates:
- Are not a substitute for legal advice
- May not cover all legal requirements in your jurisdiction
- Should be reviewed by a licensed attorney for important matters
- Are provided "as-is" without warranties

For complex legal matters or significant transactions, always consult with a qualified attorney.

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize
- Add new templates
- Improve PDF formatting
- Enhance UI/UX
- Submit pull requests

## 📄 License

MIT License - Free to use for personal or commercial purposes.

## 💡 Tips for Users

1. **Be Thorough**: Fill out all required fields carefully
2. **Review PDFs**: Always review generated contracts before signing
3. **Get Legal Advice**: For important contracts, consult an attorney
4. **Keep Copies**: Both parties should retain signed copies
5. **Add Witnesses**: Consider witnesses for important agreements

## 🎓 Learning Resources

This project demonstrates:
- Modern HTML5 structure
- CSS Grid and Flexbox
- Responsive design
- Dynamic DOM manipulation
- Template patterns in JavaScript
- Express.js routing
- PDF generation with PDFKit
- RESTful API design
- Modular code organization

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Verify Node.js version (14+)
3. Ensure all dependencies are installed
4. Check that port 3000 is available
5. Review server logs

## 🔥 Features Coming Soon

- [ ] User accounts and authentication
- [ ] Save and retrieve past contracts
- [ ] Email delivery of PDFs
- [ ] Cloud storage integration
- [ ] Multiple party contracts
- [ ] Contract templates in multiple languages
- [ ] Digital signature integration
- [ ] Contract expiration reminders

---

**Built with ❤️ for professional, trustworthy agreements**

---

## Quick Links

- [Quick Start Guide](QUICKSTART.md)
- [Deployment Guide](DEPLOYMENT.md)
- [API Documentation](#-api-endpoints)
- [Template List](#-15-professional-templates)
