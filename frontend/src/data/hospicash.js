// Hospicash product content (from Hospicash brochure + policy documents)

export const HOSPICASH_BUY_URL = 'https://app.revasure.biz/mpay/future-generali/basket/b_88f9ad0e9d097a9cb41488b13db4dd0e';

export const HOSPICASH_IMAGE = 'https://images.pexels.com/photos/18394078/pexels-photo-18394078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200';

export const HOSPICASH = {
  name: 'Hospicash',
  title: 'Complete Health & Accident Protection',
  tagline: 'A Partnership for Your Peace of Mind',
  subtitle: 'Brought to you by Future Generali & RevaSure',
  insurer: 'Future Generali India Insurance Company Limited',
  premium: '₹1,600',
  premiumNote: 'Annual premium, inclusive of GST',
  phone: '9152157001',
  email: 'sales@revasure.biz',
  hours: 'Monday to Friday, 9:30 AM - 6:30 PM IST',
  address: 'Shop-2, Gr Flr., PL-8 Niranjan Niwas, Dubhash 1, Girgaon, Mumbai, Maharashtra 400004',
  disclaimer: '*T&C Apply. Insurance is a subject matter of solicitation. RevaSure Private Limited acts as a distributor/facilitator for the Hospicash / Complete Health & Accident Protection product underwritten by Future Generali India Insurance Company Limited in partnership with RevaSure.',
};

export const HOSPICASH_BENEFITS = [
  { key: 'hospital', icon: 'BedDouble', title: 'Daily Hospital Cash', value: '₹1,000', unit: '/ day', note: 'Up to 30 days of hospitalisation', featured: true },
  { key: 'icu', icon: 'Activity', title: 'Daily ICU Cash', value: '₹2,000', unit: '/ day', note: 'Higher daily cash during ICU stays', featured: true },
  { key: 'accident', icon: 'ShieldCheck', title: 'Personal Accident Cover', value: '₹1,00,000', unit: '', note: 'Accidental Death & Permanent Total Disablement' },
  { key: 'critical', icon: 'HeartPulse', title: 'Critical Illness Cover', value: '₹25,000', unit: '', note: "Plan B - covers 9 critical illness conditions" },
  { key: 'maternity', icon: 'Baby', title: 'Pre-existing & Maternity', value: 'Covered', unit: '', note: 'Pre-existing conditions and maternity included' },
];

export const HOSPICASH_EXTRAS = [
  { key: 'doc', icon: 'Stethoscope', title: 'DOC Consultations', value: 'Complimentary' },
  { key: 'scan', icon: 'ScanLine', title: 'AI Health Scan', value: '5 Scans' },
];

export const HOSPICASH_JOURNEY = [
  { title: 'Accept & pay securely', text: 'Agree to the T&C and Privacy Policy, then pay ₹1,600 through Easebuzz, our RBI-authorised, PCI-DSS compliant payment aggregator.' },
  { title: 'Receive your certificate', text: 'Your digital policy certificate is sent to your registered email and/or mobile (SMS/WhatsApp) within 24 to 48 hours.' },
  { title: '15-day free look', text: 'Not satisfied? Cancel within 15 days of receiving your certificate, provided no claim has been filed.' },
];

export const REFUND_STEPS = [
  {
    title: 'Submit Request',
    text: 'Email sales@revasure.biz or call our helpline at 9152157001 with your Policy / Certificate Number, full name of the insured, registered mobile & email, payment transaction reference / Order ID and reason for cancellation.',
  },
  {
    title: 'Verification',
    text: 'Our customer support team, along with the insurance partner, verifies that no claims have been lodged against the certificate.',
  },
  {
    title: 'Approval & Disbursal',
    text: 'Cancellation confirmation is shared via email/SMS. Approved refunds are credited to the original payment method within 5 to 7 business days, subject to your bank\u2019s clearance cycles.',
  },
];

const contactLines = [
  { label: 'Customer Support Desk', value: 'RevaSure Private Limited' },
  { label: 'Email', value: HOSPICASH.email },
  { label: 'Helpline / WhatsApp', value: HOSPICASH.phone },
  { label: 'Registered Office', value: HOSPICASH.address },
  { label: 'Operating Hours', value: HOSPICASH.hours },
];

export const HOSPICASH_DOCS = {
  terms: {
    slug: 'terms',
    eyebrow: 'Hospicash · Terms & Conditions',
    title: 'Terms & Conditions',
    lastUpdated: 'September 2026',
    intro: 'Welcome to RevaSure Private Limited (\u201cCompany\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d). These Terms and Conditions govern your access to and purchase of micro-insurance and health protection products via https://revasure.biz/ (the \u201cWebsite\u201d). By initiating a purchase, you agree to these Terms and Conditions.',
    sections: [
      {
        heading: '1. Platform Intermediary Role & Underwriting Disclaimer',
        bullets: [
          { label: 'Distribution & Technology Enabler', text: 'RevaSure Private Limited operates purely as a digital facilitator/distributor connecting users with group health and micro-insurance covers underwritten by Future Generali India Insurance Company Limited in partnership with RevaSure.' },
          { label: 'No Direct Underwriting', text: 'We do not underwrite insurance risk, determine claim admissibility, or issue insurance policies directly. All underwriting liability, terms, conditions, waiting periods, limits, and claim settlements are the sole responsibility of Future Generali India Insurance Company Limited.' },
          { label: 'Solicitation Notice', text: 'Insurance is a subject matter of solicitation. The benefits listed on this website, including ₹1,000/Day Hospital Cash, ₹2,000/Day ICU Cash, ₹1,00,000 Personal Accident Cover, and ₹25,000 Critical Illness Cover, are strictly governed by the official Policy Wordings issued by the insurer.' },
        ],
      },
      {
        heading: '2. Pricing & Payments via Easebuzz',
        bullets: [
          { label: 'Transparent Pricing', text: 'The total annual premium payable for this cover is ₹1,600/- inclusive of applicable GST.' },
          { label: 'Payment Processing', text: 'All digital transactions on this website are securely collected through our authorized Payment Aggregator, Easebuzz (Easebuzz Private Limited).' },
          { label: 'Payment Credentials Security', text: 'Sensitive financial data (such as card numbers, CVVs, and UPI PINs) are handled entirely through Easebuzz\u2019s PCI-DSS compliant, RBI-authorized secure tokenized gateway infrastructure. We do not store, view, or retain your payment credentials.' },
        ],
      },
      {
        heading: '3. Policy Delivery & Timelines',
        bullets: [
          { label: 'Digital Delivery', text: 'Once your payment is successfully authenticated by Easebuzz, your policy certificate and schedule will be generated and issued by the underwriting insurer/partner.' },
          { label: 'Fulfilment Window', text: 'The digital policy certificate will be transmitted to your registered email ID and/or mobile number (via SMS/WhatsApp) within 24 to 48 hours from the confirmation of payment.' },
          { text: 'If you do not receive your policy schedule within 48 hours, please write to our support desk with your Easebuzz Transaction ID.' },
        ],
      },
      {
        heading: '4. Cancellation & Gateway Refund Processing',
        bullets: [
          { label: 'Free-Look Period', text: 'As mandated by IRDAI regulations, you are entitled to a 15-day Free-Look cancellation period from the date of policy receipt, provided no claim has been registered or filed.' },
          { label: 'Routing of Refunds', text: 'In accordance with Easebuzz and Card Association regulations, all approved refunds must and will be routed strictly through the same payment source and mode (bank account, credit/debit card, or UPI ID) through which the original transaction was made. Cash or alternate third-party account refunds are strictly prohibited.' },
          { label: 'Processing Timeline', text: 'Once approved, refunds typically reflect in your account within 5 to 7 business days, subject to your issuing bank\u2019s settlement timelines.' },
        ],
      },
      {
        heading: '5. Claims Administration',
        bullets: [
          { text: 'Claims must be submitted directly to Future Generali or through the RevaSure customer care channel at 9152157001 / sales@revasure.biz adhering to the documentation requirements stated in your policy certificate.' },
          { text: 'The Company has no involvement in adjudicating, inspecting, approving, or settling insurance claims.' },
        ],
      },
      {
        heading: '6. Governing Law & Jurisdiction',
        body: 'These Terms shall be construed and enforced in accordance with the laws of India. Any legal dispute or proceeding arising out of these terms shall fall under the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.',
      },
    ],
  },
  privacy: {
    slug: 'privacy',
    eyebrow: 'Hospicash · Privacy Policy',
    title: 'Privacy Policy',
    lastUpdated: 'September 2026',
    intro: 'RevaSure Private Limited (\u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) values your trust and is committed to protecting your personal data in accordance with the Digital Personal Data Protection Act (DPDP Act) and applicable RBI / IRDAI compliance directives.',
    sections: [
      {
        heading: '1. Categories of Information Collected',
        body: 'To facilitate the issuance of your micro-insurance cover, we collect:',
        bullets: [
          { label: 'Personal Identification Details', text: 'Full Name, Date of Birth, Gender.' },
          { label: 'Contact Information', text: 'Email Address and Mobile Number.' },
          { label: 'Transaction Identifiers', text: 'Easebuzz Transaction ID, Order Reference Number, Timestamp, and Payment Status (Success/Failure).' },
          { label: 'Technical Logs', text: 'Browser type, IP address, and session timestamps for fraud mitigation and audit trails.' },
        ],
      },
      {
        heading: '2. How Your Information is Used',
        body: 'Your personal data is collected and processed exclusively for:',
        bullets: [
          { text: 'Initiating policy underwriting and generating your certificate with Future Generali India Insurance Company Limited and RevaSure.' },
          { text: 'Transmitting automated policy certificates, receipts, payment reminders, and renewal updates.' },
          { text: 'Enabling authentication, transaction reconciliation, and dispute resolution via Easebuzz.' },
          { text: 'Complying with statutory Know Your Customer (KYC), anti-money laundering (AML), and regulatory guidelines.' },
        ],
      },
      {
        heading: '3. Data Sharing & Third-Party Disclosure',
        body: 'We do not sell, rent, or trade your personal information. We disclose data strictly to:',
        bullets: [
          { label: 'Underwriter & Program Partner', text: 'Future Generali India Insurance Company Limited and RevaSure for risk assessment and policy generation.' },
          { label: 'Payment Aggregator (Easebuzz)', text: 'Shared to the extent necessary to securely process, reconcile, and process refunds for your transactions.' },
          { label: 'Law Enforcement & Regulators', text: 'Only when legally mandated under court summons, RBI instructions, or IRDAI regulatory directives.' },
        ],
      },
      {
        heading: '4. Data Security & Storage',
        bullets: [
          { text: 'All data transmissions across our platform are secured with SSL/TLS encryption.' },
          { text: 'We do not handle or store card data or banking pins. Payment processing is managed via Easebuzz\u2019s PCI-DSS Level 1 compliant secure tokenized infrastructure.' },
        ],
      },
      {
        heading: '5. Data Retention & Grievance Redressal',
        body: 'Records are stored in accordance with statutory insurance and tax compliance retention periods. For inquiries, corrections, or grievances regarding your data, contact our designated Grievance Officer.',
      },
    ],
    contact: {
      heading: 'Grievance Officer',
      lines: [
        { label: 'Officer Name / Designation', value: 'Muneer Khan - Grievance Officer' },
        { label: 'Entity Name', value: 'RevaSure Private Limited' },
        { label: 'Office Address', value: HOSPICASH.address },
        { label: 'Email ID', value: HOSPICASH.email },
        { label: 'Contact Number', value: HOSPICASH.phone },
        { label: 'Acknowledgement', value: 'Within 48 hours; resolution within 30 days.' },
      ],
    },
  },
  refund: {
    slug: 'refund',
    eyebrow: 'Hospicash · Cancellation & Refund',
    title: 'Cancellation & Refund Policy',
    lastUpdated: 'September 2026',
    intro: 'At RevaSure Private Limited, we facilitate micro-insurance and health protection products in partnership with Future Generali India Insurance Company Limited. We prioritize transparency and customer satisfaction. This policy outlines the terms and procedures for policy cancellations and premium refunds.',
    sections: [
      {
        heading: '1. Free-Look Cancellation (Within 15 Days)',
        bullets: [
          { label: 'Eligibility', text: 'Every customer is entitled to a 15-day Free-Look Period starting from the date of receipt of the electronic policy certificate/document.' },
          { label: 'Conditions', text: 'You may cancel your coverage if you are not satisfied with the terms and conditions of the policy, provided no claim has been reported or filed during this period.' },
          { label: 'Refund Calculation', text: 'Upon cancellation during the free-look period, the premium will be refunded after deducting the proportionate risk premium for the period on cover (if any) and applicable stamp duty charges incurred for issuing the policy.' },
        ],
      },
      {
        heading: '2. Cancellation After Free-Look Period',
        body: 'Cancellation requests submitted after the 15-day Free-Look period will be processed in accordance with the underwriting insurer\u2019s (Future Generali) cancellation terms and short-period scale rates. No refund will be admissible if:',
        bullets: [
          { text: 'Any claim has been initiated, registered, or settled under the policy certificate during the policy tenure.' },
          { text: 'The remaining policy duration falls outside the insurer\u2019s minimum refundable threshold.' },
        ],
      },
      {
        heading: '3. Payment Gateway & Transaction Errors',
        bullets: [
          { label: 'Duplicate Debits', text: 'If your account is debited twice for a single transaction, the surplus amount will be refunded automatically to the original payment source.' },
          { label: 'Failed Transactions', text: 'If your bank account or card is charged but the policy document is not generated due to a network or technical failure, the debited amount will be reversed within 5 to 7 business days.' },
        ],
      },
      {
        heading: '4. Step-by-Step Refund Process',
        subsections: REFUND_STEPS.map((s, i) => ({ heading: `Step ${i + 1}: ${s.title}`, body: s.text })),
      },
    ],
    contact: { heading: '5. Grievance Redressal & Contact Information', lines: contactLines },
  },
};
