# 🚀 Quick Start Guide - The Handshake PRO

Get your professional contract platform running in 3 simple steps!

## Prerequisites

Make sure you have Node.js installed:
```bash
node --version  # Should be v14 or higher
```

If not installed, download from: https://nodejs.org/

## Installation Steps

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This installs:
- express (web server)
- cors (cross-origin resource sharing)
- pdfkit (PDF generation)

### Step 2: Start the Server

```bash
npm start
```

You should see:

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║      🤝 The Handshake PRO - Contract Templates 🤝         ║
║                                                            ║
║  Server running on port 3000                               ║
║                                                            ║
║  Access at: http://localhost:3000                          ║
║                                                            ║
║  15+ Professional Contract Templates Available            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### Step 3: Open Your Browser

Navigate to:
```
http://localhost:3000
```

That's it! 🎉

## Creating Your First Contract

1. **Browse Templates**: Scroll down to see 15+ contract types
2. **Select Template**: Click "Select Template" on any card
3. **Fill the Form**: Complete all required fields (marked with *)
4. **Generate PDF**: Click "Generate Contract PDF"
5. **Download**: Your professional PDF will download automatically!

## Available Templates

- 💰 Loan Agreement
- 💼 Service Agreement  
- 🏠 Rental/Lease Agreement
- 🛒 Sales Agreement
- 🤫 Non-Disclosure Agreement (NDA)
- 👔 Employment Contract
- 🤝 Partnership Agreement
- 💻 Freelance Contract
- 💳 Payment Plan Agreement
- 🎯 Consulting Agreement
- 🚗 Vehicle Sales Agreement
- 🔨 Contractor Agreement
- 🛏️ Roommate Agreement
- 🔐 Confidentiality Agreement
- ⚖️ Settlement Agreement

## Development Mode

For development with auto-reload:

```bash
npm run dev
```

This uses nodemon to restart the server automatically when you make changes.

## Troubleshooting

### Port 3000 is already in use

Change the port by setting an environment variable:

**Mac/Linux:**
```bash
PORT=3001 npm start
```

**Windows (CMD):**
```cmd
set PORT=3001 && npm start
```

**Windows (PowerShell):**
```powershell
$env:PORT=3001; npm start
```

### Dependencies won't install

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again

### PDF won't generate

- Check browser console for errors (press F12)
- Make sure all required fields are filled
- Check that the server is running
- Look at server logs in the terminal

### Page doesn't load

- Make sure you're at `http://localhost:3000` (not https)
- Check that the server started successfully
- Try clearing your browser cache
- Try a different browser

## Testing Different Templates

Try these templates to see the variety:

1. **Loan Agreement**: Great for personal loans
2. **NDA**: Perfect for business confidentiality
3. **Rental Agreement**: For landlords and tenants
4. **Freelance Contract**: For independent work
5. **Vehicle Sales**: For selling cars

## Next Steps

### Customize the Platform

- **Change Colors**: Edit `styles.css` CSS variables
- **Modify Templates**: Edit template definitions in `script.js`
- **Adjust PDF Layout**: Modify generators in `pdfGenerators.js`
- **Add New Templates**: Follow the pattern in existing code

### Deploy to Production

See `DEPLOYMENT.md` for instructions on deploying to:
- Heroku
- Vercel
- DigitalOcean
- AWS
- Your own server

### Enhance Features

Ideas for improvements:
- Add email delivery of PDFs
- Implement user accounts
- Save contract history
- Add more templates
- Integrate e-signatures
- Multi-language support

## Common Use Cases

### For Freelancers
Use the Freelance Contract template to protect yourself when working with clients.

### For Landlords
The Rental Agreement template helps create clear lease terms.

### For Small Business
The Service Agreement and Consulting Agreement templates are perfect for client work.

### For Personal Transactions
Loan Agreement, Payment Plan, and Vehicle Sales cover common personal contracts.

### For Startups
Partnership Agreement, NDA, and Employment Contract help formalize business relationships.

## Tips for Best Results

1. **Fill Completely**: Don't skip optional fields if they're relevant
2. **Be Specific**: The more detail, the better the contract
3. **Review Carefully**: Always review the PDF before signing
4. **Print Two Copies**: Each party should have a signed original
5. **Keep Digital Copies**: Save PDFs in a secure location
6. **Date Everything**: Make sure dates are accurate
7. **Get Witnesses**: For important contracts, have witnesses sign too
8. **Consult Lawyers**: For complex or high-value agreements, get legal advice

## File Management

Generated PDFs are downloaded directly to your browser's download folder with filenames like:
```
loan_contract_1234567890.pdf
nda_contract_1234567890.pdf
```

The timestamp ensures unique filenames.

## Security Notes

For production use, consider:
- Adding HTTPS/SSL
- Implementing user authentication
- Adding rate limiting
- Storing contracts securely
- Adding audit logs

## Getting Help

If you encounter issues:

1. **Check the Terminal**: Look for error messages where the server is running
2. **Browser Console**: Press F12 and check for JavaScript errors
3. **Server Logs**: All requests and errors are logged
4. **README**: Full documentation in `README.md`
5. **Code Comments**: All files are well-commented

## Success Checklist

- ✅ Node.js installed (v14+)
- ✅ Dependencies installed (`npm install`)
- ✅ Server started successfully
- ✅ Can access http://localhost:3000
- ✅ Can see all 15 templates
- ✅ Can select a template
- ✅ Form loads with correct fields
- ✅ Can fill and submit form
- ✅ PDF downloads successfully

---

**Enjoy creating professional contracts!** 🎉

For more information, see the full README.md file.
