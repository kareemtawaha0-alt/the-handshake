/**
 * Frontend JavaScript for The Handshake Pro - Contract Templates Platform
 * Handles template selection, dynamic form generation, and submission
 */

// Template Definitions with specific fields for each contract type
const templateDefinitions = {
    loan: {
        title: 'Loan Agreement',
        description: 'Create a professional loan agreement with repayment terms',
        fields: [
            {
                section: 'Lender Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'lenderName', label: 'Lender Full Name', type: 'text', required: true, placeholder: 'John Doe' },
                    { name: 'lenderEmail', label: 'Email Address', type: 'email', required: true, placeholder: 'john@example.com' },
                    { name: 'lenderPhone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+1 (555) 123-4567' },
                    { name: 'lenderAddress', label: 'Address', type: 'text', required: true, placeholder: '123 Main St, City, State ZIP' }
                ]
            },
            {
                section: 'Borrower Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'borrowerName', label: 'Borrower Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
                    { name: 'borrowerEmail', label: 'Email Address', type: 'email', required: true, placeholder: 'jane@example.com' },
                    { name: 'borrowerPhone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+1 (555) 987-6543' },
                    { name: 'borrowerAddress', label: 'Address', type: 'text', required: true, placeholder: '456 Oak Ave, City, State ZIP' }
                ]
            },
            {
                section: 'Loan Details',
                icon: 'fas fa-money-bill-wave',
                fields: [
                    { name: 'principalAmount', label: 'Loan Amount ($)', type: 'number', required: true, placeholder: '10000', helper: 'The total amount being loaned' },
                    { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', required: true, placeholder: '5', step: '0.1', helper: 'Annual interest rate' },
                    { name: 'loanDate', label: 'Loan Date', type: 'date', required: true },
                    { name: 'repaymentDate', label: 'Repayment Due Date', type: 'date', required: true },
                    { name: 'repaymentTerms', label: 'Repayment Terms', type: 'textarea', required: true, placeholder: 'Describe payment schedule, installments, etc.', rows: 4 },
                    { name: 'latePaymentPenalty', label: 'Late Payment Penalty', type: 'text', required: false, placeholder: 'e.g., 5% per month on overdue amount' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, placeholder: 'Any additional conditions or clauses', rows: 3 }
                ]
            }
        ]
    },
    service: {
        title: 'Service Agreement',
        description: 'Create a professional service contract with deliverables',
        fields: [
            {
                section: 'Service Provider Information',
                icon: 'fas fa-briefcase',
                fields: [
                    { name: 'providerName', label: 'Provider Name/Company', type: 'text', required: true },
                    { name: 'providerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'providerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'providerAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Client Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'clientName', label: 'Client Name/Company', type: 'text', required: true },
                    { name: 'clientEmail', label: 'Email', type: 'email', required: true },
                    { name: 'clientPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'clientAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Service Details',
                icon: 'fas fa-tasks',
                fields: [
                    { name: 'serviceDescription', label: 'Services to be Provided', type: 'textarea', required: true, rows: 5, placeholder: 'Detailed description of services...' },
                    { name: 'deliverables', label: 'Deliverables', type: 'textarea', required: true, rows: 4, placeholder: 'List all deliverables...' },
                    { name: 'startDate', label: 'Start Date', type: 'date', required: true },
                    { name: 'endDate', label: 'End Date / Deadline', type: 'date', required: true },
                    { name: 'paymentAmount', label: 'Total Payment Amount ($)', type: 'number', required: true },
                    { name: 'paymentTerms', label: 'Payment Terms', type: 'textarea', required: true, rows: 3, placeholder: 'Payment schedule, milestones, etc.' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    rental: {
        title: 'Rental/Lease Agreement',
        description: 'Create a property rental or lease contract',
        fields: [
            {
                section: 'Landlord Information',
                icon: 'fas fa-user-tie',
                fields: [
                    { name: 'landlordName', label: 'Landlord Name', type: 'text', required: true },
                    { name: 'landlordEmail', label: 'Email', type: 'email', required: true },
                    { name: 'landlordPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'landlordAddress', label: 'Mailing Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Tenant Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'tenantName', label: 'Tenant Name', type: 'text', required: true },
                    { name: 'tenantEmail', label: 'Email', type: 'email', required: true },
                    { name: 'tenantPhone', label: 'Phone', type: 'tel', required: true }
                ]
            },
            {
                section: 'Property & Lease Details',
                icon: 'fas fa-home',
                fields: [
                    { name: 'propertyAddress', label: 'Rental Property Address', type: 'text', required: true, placeholder: 'Full address of rental property' },
                    { name: 'propertyType', label: 'Property Type', type: 'select', required: true, options: ['Apartment', 'House', 'Condo', 'Room', 'Commercial Space', 'Other'] },
                    { name: 'monthlyRent', label: 'Monthly Rent ($)', type: 'number', required: true },
                    { name: 'securityDeposit', label: 'Security Deposit ($)', type: 'number', required: true },
                    { name: 'leaseStartDate', label: 'Lease Start Date', type: 'date', required: true },
                    { name: 'leaseEndDate', label: 'Lease End Date', type: 'date', required: true },
                    { name: 'rentDueDate', label: 'Rent Due Date (day of month)', type: 'number', required: true, placeholder: 'e.g., 1 for 1st of month', min: '1', max: '31' },
                    { name: 'utilitiesIncluded', label: 'Utilities Included', type: 'textarea', required: false, rows: 2, placeholder: 'List utilities included in rent...' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 4, placeholder: 'Pet policy, maintenance responsibilities, etc.' }
                ]
            }
        ]
    },
    sales: {
        title: 'Sales Agreement',
        description: 'Create a purchase and sale contract',
        fields: [
            {
                section: 'Seller Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'sellerName', label: 'Seller Name', type: 'text', required: true },
                    { name: 'sellerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'sellerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'sellerAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Buyer Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'buyerName', label: 'Buyer Name', type: 'text', required: true },
                    { name: 'buyerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'buyerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'buyerAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Sale Details',
                icon: 'fas fa-shopping-cart',
                fields: [
                    { name: 'itemDescription', label: 'Item/Property Description', type: 'textarea', required: true, rows: 4, placeholder: 'Detailed description of what is being sold...' },
                    { name: 'salePrice', label: 'Purchase Price ($)', type: 'number', required: true },
                    { name: 'saleDate', label: 'Sale Date', type: 'date', required: true },
                    { name: 'paymentMethod', label: 'Payment Method', type: 'select', required: true, options: ['Cash', 'Check', 'Wire Transfer', 'Installments', 'Other'] },
                    { name: 'transferDate', label: 'Ownership Transfer Date', type: 'date', required: true },
                    { name: 'warranties', label: 'Warranties/Guarantees', type: 'textarea', required: false, rows: 3, placeholder: 'Any warranties provided...' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    nda: {
        title: 'Non-Disclosure Agreement (NDA)',
        description: 'Protect confidential information',
        fields: [
            {
                section: 'Disclosing Party',
                icon: 'fas fa-user',
                fields: [
                    { name: 'disclosingName', label: 'Name/Company', type: 'text', required: true },
                    { name: 'disclosingEmail', label: 'Email', type: 'email', required: true },
                    { name: 'disclosingPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'disclosingAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Receiving Party',
                icon: 'fas fa-user',
                fields: [
                    { name: 'receivingName', label: 'Name/Company', type: 'text', required: true },
                    { name: 'receivingEmail', label: 'Email', type: 'email', required: true },
                    { name: 'receivingPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'receivingAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Confidentiality Details',
                icon: 'fas fa-lock',
                fields: [
                    { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
                    { name: 'confidentialInfo', label: 'Description of Confidential Information', type: 'textarea', required: true, rows: 5, placeholder: 'Describe the confidential information to be protected...' },
                    { name: 'purpose', label: 'Purpose of Disclosure', type: 'textarea', required: true, rows: 3, placeholder: 'Why is this information being shared?' },
                    { name: 'duration', label: 'Duration (years)', type: 'number', required: true, placeholder: '2', helper: 'How long must information remain confidential' },
                    { name: 'exceptions', label: 'Exceptions to Confidentiality', type: 'textarea', required: false, rows: 3, placeholder: 'Information that is not considered confidential...' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    employment: {
        title: 'Employment Contract',
        description: 'Employee hiring agreement',
        fields: [
            {
                section: 'Employer Information',
                icon: 'fas fa-building',
                fields: [
                    { name: 'employerName', label: 'Company Name', type: 'text', required: true },
                    { name: 'employerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'employerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'employerAddress', label: 'Company Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Employee Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'employeeName', label: 'Employee Full Name', type: 'text', required: true },
                    { name: 'employeeEmail', label: 'Email', type: 'email', required: true },
                    { name: 'employeePhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'employeeAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Employment Details',
                icon: 'fas fa-briefcase',
                fields: [
                    { name: 'jobTitle', label: 'Job Title', type: 'text', required: true },
                    { name: 'department', label: 'Department', type: 'text', required: false },
                    { name: 'startDate', label: 'Start Date', type: 'date', required: true },
                    { name: 'employmentType', label: 'Employment Type', type: 'select', required: true, options: ['Full-Time', 'Part-Time', 'Contract', 'Temporary'] },
                    { name: 'salary', label: 'Annual Salary ($)', type: 'number', required: true },
                    { name: 'paymentSchedule', label: 'Payment Schedule', type: 'select', required: true, options: ['Weekly', 'Bi-Weekly', 'Semi-Monthly', 'Monthly'] },
                    { name: 'benefits', label: 'Benefits Package', type: 'textarea', required: false, rows: 4, placeholder: 'Health insurance, vacation days, etc.' },
                    { name: 'jobDuties', label: 'Job Duties & Responsibilities', type: 'textarea', required: true, rows: 5, placeholder: 'Detailed description of job responsibilities...' },
                    { name: 'workSchedule', label: 'Work Schedule', type: 'text', required: true, placeholder: 'e.g., Monday-Friday, 9AM-5PM' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    partnership: {
        title: 'Partnership Agreement',
        description: 'Business partnership contract',
        fields: [
            {
                section: 'Partner 1 Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'partner1Name', label: 'Full Name', type: 'text', required: true },
                    { name: 'partner1Email', label: 'Email', type: 'email', required: true },
                    { name: 'partner1Phone', label: 'Phone', type: 'tel', required: true },
                    { name: 'partner1Address', label: 'Address', type: 'text', required: true },
                    { name: 'partner1Contribution', label: 'Capital Contribution ($)', type: 'number', required: true },
                    { name: 'partner1Ownership', label: 'Ownership Percentage (%)', type: 'number', required: true, min: '0', max: '100' }
                ]
            },
            {
                section: 'Partner 2 Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'partner2Name', label: 'Full Name', type: 'text', required: true },
                    { name: 'partner2Email', label: 'Email', type: 'email', required: true },
                    { name: 'partner2Phone', label: 'Phone', type: 'tel', required: true },
                    { name: 'partner2Address', label: 'Address', type: 'text', required: true },
                    { name: 'partner2Contribution', label: 'Capital Contribution ($)', type: 'number', required: true },
                    { name: 'partner2Ownership', label: 'Ownership Percentage (%)', type: 'number', required: true, min: '0', max: '100' }
                ]
            },
            {
                section: 'Partnership Details',
                icon: 'fas fa-handshake',
                fields: [
                    { name: 'businessName', label: 'Business/Partnership Name', type: 'text', required: true },
                    { name: 'businessPurpose', label: 'Business Purpose', type: 'textarea', required: true, rows: 3, placeholder: 'Describe the purpose of the partnership...' },
                    { name: 'startDate', label: 'Partnership Start Date', type: 'date', required: true },
                    { name: 'profitDistribution', label: 'Profit Distribution Terms', type: 'textarea', required: true, rows: 3, placeholder: 'How will profits be divided?' },
                    { name: 'decisionMaking', label: 'Decision Making Process', type: 'textarea', required: true, rows: 3, placeholder: 'How will business decisions be made?' },
                    { name: 'responsibilities', label: 'Partner Responsibilities', type: 'textarea', required: true, rows: 4, placeholder: 'Describe each partner\'s roles and responsibilities...' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    freelance: {
        title: 'Freelance Contract',
        description: 'Independent contractor agreement',
        fields: [
            {
                section: 'Freelancer Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'freelancerName', label: 'Freelancer Name', type: 'text', required: true },
                    { name: 'freelancerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'freelancerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'freelancerAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Client Information',
                icon: 'fas fa-building',
                fields: [
                    { name: 'clientName', label: 'Client Name/Company', type: 'text', required: true },
                    { name: 'clientEmail', label: 'Email', type: 'email', required: true },
                    { name: 'clientPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'clientAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Project Details',
                icon: 'fas fa-laptop-code',
                fields: [
                    { name: 'projectName', label: 'Project Name', type: 'text', required: true },
                    { name: 'projectScope', label: 'Project Scope', type: 'textarea', required: true, rows: 5, placeholder: 'Detailed description of the project...' },
                    { name: 'deliverables', label: 'Deliverables', type: 'textarea', required: true, rows: 4, placeholder: 'List all deliverables...' },
                    { name: 'startDate', label: 'Project Start Date', type: 'date', required: true },
                    { name: 'deadline', label: 'Project Deadline', type: 'date', required: true },
                    { name: 'paymentType', label: 'Payment Type', type: 'select', required: true, options: ['Fixed Price', 'Hourly Rate', 'Milestone-Based'] },
                    { name: 'paymentAmount', label: 'Total/Rate Amount ($)', type: 'number', required: true, helper: 'Total for fixed price or hourly rate' },
                    { name: 'paymentSchedule', label: 'Payment Schedule', type: 'textarea', required: true, rows: 3, placeholder: 'Describe payment milestones or schedule...' },
                    { name: 'revisions', label: 'Number of Revisions Included', type: 'number', required: false, placeholder: '2' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    payment: {
        title: 'Payment Plan Agreement',
        description: 'Installment payment contract',
        fields: [
            {
                section: 'Creditor Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'creditorName', label: 'Creditor Name', type: 'text', required: true },
                    { name: 'creditorEmail', label: 'Email', type: 'email', required: true },
                    { name: 'creditorPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'creditorAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Debtor Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'debtorName', label: 'Debtor Name', type: 'text', required: true },
                    { name: 'debtorEmail', label: 'Email', type: 'email', required: true },
                    { name: 'debtorPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'debtorAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Payment Plan Details',
                icon: 'fas fa-credit-card',
                fields: [
                    { name: 'totalAmount', label: 'Total Amount Owed ($)', type: 'number', required: true },
                    { name: 'downPayment', label: 'Down Payment ($)', type: 'number', required: false, placeholder: '0' },
                    { name: 'numberOfInstallments', label: 'Number of Installments', type: 'number', required: true, placeholder: '12' },
                    { name: 'installmentAmount', label: 'Installment Amount ($)', type: 'number', required: true },
                    { name: 'firstPaymentDate', label: 'First Payment Date', type: 'date', required: true },
                    { name: 'paymentFrequency', label: 'Payment Frequency', type: 'select', required: true, options: ['Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly'] },
                    { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', required: false, placeholder: '0', step: '0.1' },
                    { name: 'latePaymentFee', label: 'Late Payment Fee ($)', type: 'number', required: false, placeholder: '0' },
                    { name: 'paymentMethod', label: 'Accepted Payment Methods', type: 'text', required: true, placeholder: 'e.g., Check, Bank Transfer' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    consulting: {
        title: 'Consulting Agreement',
        description: 'Professional consulting services',
        fields: [
            {
                section: 'Consultant Information',
                icon: 'fas fa-user-tie',
                fields: [
                    { name: 'consultantName', label: 'Consultant Name/Firm', type: 'text', required: true },
                    { name: 'consultantEmail', label: 'Email', type: 'email', required: true },
                    { name: 'consultantPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'consultantAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Client Information',
                icon: 'fas fa-building',
                fields: [
                    { name: 'clientName', label: 'Client Name/Company', type: 'text', required: true },
                    { name: 'clientEmail', label: 'Email', type: 'email', required: true },
                    { name: 'clientPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'clientAddress', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Consulting Engagement',
                icon: 'fas fa-handshake',
                fields: [
                    { name: 'consultingScope', label: 'Scope of Consulting Services', type: 'textarea', required: true, rows: 5, placeholder: 'Detailed description of consulting services...' },
                    { name: 'objectives', label: 'Objectives & Goals', type: 'textarea', required: true, rows: 3, placeholder: 'What are the goals of this engagement?' },
                    { name: 'startDate', label: 'Start Date', type: 'date', required: true },
                    { name: 'endDate', label: 'End Date', type: 'date', required: true },
                    { name: 'compensationType', label: 'Compensation Type', type: 'select', required: true, options: ['Hourly Rate', 'Fixed Fee', 'Retainer', 'Project-Based'] },
                    { name: 'compensationAmount', label: 'Compensation Amount ($)', type: 'number', required: true, helper: 'Hourly rate or total fee' },
                    { name: 'paymentTerms', label: 'Payment Terms', type: 'textarea', required: true, rows: 3, placeholder: 'When and how will payments be made?' },
                    { name: 'expenseReimbursement', label: 'Expense Reimbursement', type: 'textarea', required: false, rows: 2, placeholder: 'Which expenses will be reimbursed?' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    vehicle: {
        title: 'Vehicle Sales Agreement',
        description: 'Car or vehicle purchase contract',
        fields: [
            {
                section: 'Seller Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'sellerName', label: 'Seller Name', type: 'text', required: true },
                    { name: 'sellerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'sellerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'sellerAddress', label: 'Address', type: 'text', required: true },
                    { name: 'sellerLicense', label: 'Driver\'s License Number', type: 'text', required: false }
                ]
            },
            {
                section: 'Buyer Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'buyerName', label: 'Buyer Name', type: 'text', required: true },
                    { name: 'buyerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'buyerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'buyerAddress', label: 'Address', type: 'text', required: true },
                    { name: 'buyerLicense', label: 'Driver\'s License Number', type: 'text', required: false }
                ]
            },
            {
                section: 'Vehicle Details',
                icon: 'fas fa-car',
                fields: [
                    { name: 'vehicleYear', label: 'Year', type: 'number', required: true, placeholder: '2020' },
                    { name: 'vehicleMake', label: 'Make', type: 'text', required: true, placeholder: 'Toyota' },
                    { name: 'vehicleModel', label: 'Model', type: 'text', required: true, placeholder: 'Camry' },
                    { name: 'vehicleVIN', label: 'VIN Number', type: 'text', required: true, placeholder: '1HGBH41JXMN109186' },
                    { name: 'vehicleMileage', label: 'Current Mileage', type: 'number', required: true, placeholder: '45000' },
                    { name: 'vehicleColor', label: 'Color', type: 'text', required: true },
                    { name: 'salePrice', label: 'Sale Price ($)', type: 'number', required: true },
                    { name: 'saleDate', label: 'Sale Date', type: 'date', required: true },
                    { name: 'paymentMethod', label: 'Payment Method', type: 'select', required: true, options: ['Cash', 'Check', 'Wire Transfer', 'Financing', 'Other'] },
                    { name: 'vehicleCondition', label: 'Vehicle Condition', type: 'textarea', required: true, rows: 3, placeholder: 'Describe the condition of the vehicle...' },
                    { name: 'warranty', label: 'Warranty Information', type: 'textarea', required: false, rows: 2, placeholder: 'As-is or warranty details...' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    contractor: {
        title: 'Contractor Agreement',
        description: 'Construction and contractor services',
        fields: [
            {
                section: 'Contractor Information',
                icon: 'fas fa-hard-hat',
                fields: [
                    { name: 'contractorName', label: 'Contractor Name/Company', type: 'text', required: true },
                    { name: 'contractorEmail', label: 'Email', type: 'email', required: true },
                    { name: 'contractorPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'contractorAddress', label: 'Business Address', type: 'text', required: true },
                    { name: 'contractorLicense', label: 'License Number', type: 'text', required: false }
                ]
            },
            {
                section: 'Property Owner Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'ownerName', label: 'Property Owner Name', type: 'text', required: true },
                    { name: 'ownerEmail', label: 'Email', type: 'email', required: true },
                    { name: 'ownerPhone', label: 'Phone', type: 'tel', required: true },
                    { name: 'propertyAddress', label: 'Property Address', type: 'text', required: true, helper: 'Where work will be performed' }
                ]
            },
            {
                section: 'Project Details',
                icon: 'fas fa-tools',
                fields: [
                    { name: 'projectDescription', label: 'Work to be Performed', type: 'textarea', required: true, rows: 5, placeholder: 'Detailed description of the work...' },
                    { name: 'materials', label: 'Materials & Equipment', type: 'textarea', required: true, rows: 3, placeholder: 'Who provides materials? List major materials...' },
                    { name: 'startDate', label: 'Project Start Date', type: 'date', required: true },
                    { name: 'completionDate', label: 'Expected Completion Date', type: 'date', required: true },
                    { name: 'totalCost', label: 'Total Project Cost ($)', type: 'number', required: true },
                    { name: 'paymentSchedule', label: 'Payment Schedule', type: 'textarea', required: true, rows: 4, placeholder: 'e.g., 30% upfront, 40% midpoint, 30% completion' },
                    { name: 'permits', label: 'Permits & Inspections', type: 'textarea', required: false, rows: 2, placeholder: 'Who is responsible for obtaining permits?' },
                    { name: 'insurance', label: 'Insurance & Liability', type: 'textarea', required: false, rows: 2, placeholder: 'Insurance coverage details...' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    roommate: {
        title: 'Roommate Agreement',
        description: 'Shared living arrangement',
        fields: [
            {
                section: 'Roommate 1 Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'roommate1Name', label: 'Full Name', type: 'text', required: true },
                    { name: 'roommate1Email', label: 'Email', type: 'email', required: true },
                    { name: 'roommate1Phone', label: 'Phone', type: 'tel', required: true }
                ]
            },
            {
                section: 'Roommate 2 Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'roommate2Name', label: 'Full Name', type: 'text', required: true },
                    { name: 'roommate2Email', label: 'Email', type: 'email', required: true },
                    { name: 'roommate2Phone', label: 'Phone', type: 'tel', required: true }
                ]
            },
            {
                section: 'Living Arrangement Details',
                icon: 'fas fa-home',
                fields: [
                    { name: 'propertyAddress', label: 'Property Address', type: 'text', required: true },
                    { name: 'leaseStartDate', label: 'Agreement Start Date', type: 'date', required: true },
                    { name: 'leaseEndDate', label: 'Agreement End Date', type: 'date', required: true },
                    { name: 'totalRent', label: 'Total Monthly Rent ($)', type: 'number', required: true },
                    { name: 'roommate1RentShare', label: 'Roommate 1 Rent Share ($)', type: 'number', required: true },
                    { name: 'roommate2RentShare', label: 'Roommate 2 Rent Share ($)', type: 'number', required: true },
                    { name: 'securityDeposit', label: 'Total Security Deposit ($)', type: 'number', required: true },
                    { name: 'utilitiesSplit', label: 'How are utilities split?', type: 'textarea', required: true, rows: 2, placeholder: 'e.g., 50/50, or by usage' },
                    { name: 'sharedSpaces', label: 'Shared Spaces & Private Spaces', type: 'textarea', required: true, rows: 3, placeholder: 'Define which spaces are shared and which are private...' },
                    { name: 'houseRules', label: 'House Rules', type: 'textarea', required: true, rows: 5, placeholder: 'Quiet hours, guests, cleaning schedule, pets, etc.' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    confidentiality: {
        title: 'Confidentiality Agreement',
        description: 'General confidentiality protection',
        fields: [
            {
                section: 'First Party Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'party1Name', label: 'Name/Company', type: 'text', required: true },
                    { name: 'party1Email', label: 'Email', type: 'email', required: true },
                    { name: 'party1Phone', label: 'Phone', type: 'tel', required: true },
                    { name: 'party1Address', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Second Party Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'party2Name', label: 'Name/Company', type: 'text', required: true },
                    { name: 'party2Email', label: 'Email', type: 'email', required: true },
                    { name: 'party2Phone', label: 'Phone', type: 'tel', required: true },
                    { name: 'party2Address', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Confidentiality Terms',
                icon: 'fas fa-lock',
                fields: [
                    { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
                    { name: 'confidentialMatter', label: 'Subject Matter', type: 'textarea', required: true, rows: 3, placeholder: 'What is the subject of this confidentiality agreement?' },
                    { name: 'protectedInfo', label: 'Information to be Protected', type: 'textarea', required: true, rows: 5, placeholder: 'Describe what information must be kept confidential...' },
                    { name: 'duration', label: 'Duration (years)', type: 'number', required: true, placeholder: '2' },
                    { name: 'permittedDisclosures', label: 'Permitted Disclosures', type: 'textarea', required: false, rows: 3, placeholder: 'Any exceptions or permitted disclosures...' },
                    { name: 'obligations', label: 'Obligations of Parties', type: 'textarea', required: true, rows: 4, placeholder: 'What are the parties required to do to protect confidentiality?' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    },
    settlement: {
        title: 'Settlement Agreement',
        description: 'Dispute resolution contract',
        fields: [
            {
                section: 'First Party Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'party1Name', label: 'Full Name', type: 'text', required: true },
                    { name: 'party1Email', label: 'Email', type: 'email', required: true },
                    { name: 'party1Phone', label: 'Phone', type: 'tel', required: true },
                    { name: 'party1Address', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Second Party Information',
                icon: 'fas fa-user',
                fields: [
                    { name: 'party2Name', label: 'Full Name', type: 'text', required: true },
                    { name: 'party2Email', label: 'Email', type: 'email', required: true },
                    { name: 'party2Phone', label: 'Phone', type: 'tel', required: true },
                    { name: 'party2Address', label: 'Address', type: 'text', required: true }
                ]
            },
            {
                section: 'Settlement Details',
                icon: 'fas fa-balance-scale',
                fields: [
                    { name: 'disputeDescription', label: 'Description of Dispute', type: 'textarea', required: true, rows: 5, placeholder: 'Describe the dispute being settled...' },
                    { name: 'settlementDate', label: 'Settlement Date', type: 'date', required: true },
                    { name: 'settlementAmount', label: 'Settlement Amount ($)', type: 'number', required: false, placeholder: 'If monetary settlement' },
                    { name: 'settlementTerms', label: 'Terms of Settlement', type: 'textarea', required: true, rows: 6, placeholder: 'Detailed terms of how the dispute will be resolved...' },
                    { name: 'paymentSchedule', label: 'Payment Schedule (if applicable)', type: 'textarea', required: false, rows: 3, placeholder: 'When and how will payments be made?' },
                    { name: 'releaseOfClaims', label: 'Release of Claims', type: 'textarea', required: true, rows: 4, placeholder: 'Statement of what claims are being released...' },
                    { name: 'confidentiality', label: 'Confidentiality Clause', type: 'textarea', required: false, rows: 3, placeholder: 'Is this settlement confidential?' },
                    { name: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false, rows: 3 }
                ]
            }
        ]
    }
};

// Current selected template
let currentTemplate = null;

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today for all date inputs
    const today = new Date().toISOString().split('T')[0];
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

/**
 * Select a template and show its form
 */
function selectTemplate(templateType) {
    currentTemplate = templateType;
    const template = templateDefinitions[templateType];
    
    if (!template) {
        console.error('Template not found:', templateType);
        return;
    }
    
    // Update form header
    document.getElementById('formTitle').textContent = template.title;
    document.getElementById('formDescription').textContent = template.description;
    
    // Generate form fields
    generateFormFields(template.fields);
    
    // Hide templates section, show form section
    document.querySelector('.templates-section').style.display = 'none';
    document.getElementById('create').style.display = 'block';
    
    // Scroll to form
    document.getElementById('create').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Go back to template selection
 */
function backToTemplates() {
    document.querySelector('.templates-section').style.display = 'block';
    document.getElementById('create').style.display = 'none';
    document.getElementById('formFieldsContainer').innerHTML = '';
    currentTemplate = null;
    
    // Scroll to templates
    document.getElementById('templates').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Generate form fields dynamically based on template
 */
function generateFormFields(sections) {
    const container = document.getElementById('formFieldsContainer');
    container.innerHTML = '';
    
    sections.forEach(section => {
        const sectionCard = document.createElement('div');
        sectionCard.className = 'form-section-card';
        
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'form-section-title';
        sectionTitle.innerHTML = `<i class="${section.icon}"></i>${section.section}`;
        sectionCard.appendChild(sectionTitle);
        
        section.fields.forEach((field, index) => {
            // Create form row for every 2 fields or single field
            if (index % 2 === 0 || field.type === 'textarea' || field.type === 'select') {
                var formRow = document.createElement('div');
                formRow.className = 'form-row';
                sectionCard.appendChild(formRow);
            }
            
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            
            const label = document.createElement('label');
            label.setAttribute('for', field.name);
            label.innerHTML = `${field.label} ${field.required ? '<span class="required">*</span>' : ''}`;
            formGroup.appendChild(label);
            
            let input;
            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = field.rows || 4;
            } else if (field.type === 'select') {
                input = document.createElement('select');
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Select an option';
                input.appendChild(defaultOption);
                
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    input.appendChild(opt);
                });
            } else {
                input = document.createElement('input');
                input.type = field.type;
                if (field.type === 'date' && !field.placeholder) {
                    input.value = new Date().toISOString().split('T')[0];
                }
            }
            
            input.id = field.name;
            input.name = field.name;
            if (field.placeholder) input.placeholder = field.placeholder;
            if (field.required) input.required = true;
            if (field.min) input.min = field.min;
            if (field.max) input.max = field.max;
            if (field.step) input.step = field.step;
            
            formGroup.appendChild(input);
            
            if (field.helper) {
                const helper = document.createElement('small');
                helper.className = 'helper-text';
                helper.textContent = field.helper;
                formGroup.appendChild(helper);
            }
            
            // Append to row
            if (field.type === 'textarea' || field.type === 'select' || index % 2 === 0) {
                formRow.appendChild(formGroup);
            } else {
                // Add to existing row
                sectionCard.querySelector('.form-row:last-child').appendChild(formGroup);
            }
        });
        
        container.appendChild(sectionCard);
    });
    
    // Setup form submission
    setupFormSubmission();
}

/**
 * Setup form submission handler
 */
function setupFormSubmission() {
    const form = document.getElementById('contractForm');
    const submitBtn = document.getElementById('submitBtn');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    // Remove existing listeners
    form.replaceWith(form.cloneNode(true));
    const newForm = document.getElementById('contractForm');
    
    // Hide messages on input
    newForm.addEventListener('input', hideMessages);
    
    // Form submission
    newForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        hideMessages();
        
        if (!validateForm(newForm)) {
            showError('Please fill out all required fields correctly.');
            const firstError = newForm.querySelector('input:invalid, textarea:invalid, select:invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        // Collect form data
        const formData = new FormData(newForm);
        const data = {
            templateType: currentTemplate,
            fields: {}
        };
        
        for (let [key, value] of formData.entries()) {
            data.fields[key] = value;
        }
        
        // Show loading
        loadingOverlay.style.display = 'flex';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch('http://localhost:3000/generate-contract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            loadingOverlay.style.display = 'none';
            submitBtn.disabled = false;
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate contract');
            }
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${currentTemplate}_contract_${Date.now()}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            showSuccess();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            loadingOverlay.style.display = 'none';
            submitBtn.disabled = false;
            console.error('Error:', error);
            showError(error.message || 'Failed to generate contract. Please try again.');
        }
    });
    
    // Real-time validation
    newForm.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = 'var(--error-color)';
            } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
                this.style.borderColor = 'var(--error-color)';
            } else {
                this.style.borderColor = 'var(--border-color)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
    });
}

/**
 * Validate form
 */
function validateForm(form) {
    if (!form.checkValidity()) {
        return false;
    }
    
    // Additional email validation
    const emailInputs = form.querySelectorAll('input[type="email"]');
    for (let input of emailInputs) {
        if (input.value && !isValidEmail(input.value)) {
            return false;
        }
    }
    
    return true;
}

/**
 * Email validation
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Show success message
 */
function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'flex';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 10000);
}

/**
 * Show error message
 */
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    errorText.textContent = message;
    errorMessage.style.display = 'flex';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 8000);
}

/**
 * Hide all messages
 */
function hideMessages() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}
