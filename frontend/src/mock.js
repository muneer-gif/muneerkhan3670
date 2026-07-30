// Mock data for RevaSure landing site

export const COMPANY_LOGO = 'https://customer-assets-agu9un31.emergentagent.net/job_pdf-web-design-2/artifacts/rm5urnd3_Company%20Logo.png';

export const NAV_LINKS = [
  { label: 'Products', href: '#markets' },
  { label: 'Platform', href: '#platform' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Comparison', href: '#comparison' },
];

export const MARKET_TILES = [
  {
    id: 'wellness',
    title: 'Wellness',
    category: 'Wellness',
    label: 'Preventive health demand',
    currentSize: '\u20b913.8 L Cr',
    currentSizeNumeric: 13.8,
    basis: 'Broad health and wellness ecosystem',
    cagr: '5.14%\u20135.55%',
    cagrNumeric: 5.3,
    outlook: 'Forecast to reach \u20b921.6 L Cr by 2034',
    outlookNumeric: 21.6,
    keyProducts: 'Dietary Supplements & Nutrition, Healthcare Devices & Monitoring Tools, Family & Specialised Care, Curated Wellness Kits',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    category: 'Healthcare',
    label: 'Fast-growing healthcare market',
    currentSize: '\u20b934.9 L Cr',
    currentSizeNumeric: 34.9,
    basis: 'Broad overall industry',
    cagr: '17.5%\u201322.5%',
    cagrNumeric: 20,
    outlook: 'Expected to surpass \u20b953.6 L Cr within the next few years',
    outlookNumeric: 53.6,
    keyProducts: 'Daily Hospital Cash, Personal Accident, Critical Illness, Dengue/Malaria Cover, Local Regional Language Doctor on Call, Free Medical Test',
  },
  {
    id: 'ai-healthcare',
    title: 'AI in Healthcare',
    category: 'Healthcare',
    label: 'AI-driven diagnostics & health platforms',
    currentSize: '\u20b91.70 L Cr',
    currentSizeNumeric: 1.70,
    basis: 'Core AI + Diagnostics + Broader digital health ecosystem',
    cagr: '23.1%\u201338.6%',
    cagrNumeric: 30.9,
    outlook: 'On track to \u20b910.23 L Cr (USD 106.97B) by 2033',
    outlookNumeric: 10.23,
    keyProducts: 'AI Face Vitals Scan, Health Profile & Trends, AI Health Coach, Nutrition & Food Scanner and many more...',
  },
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    category: 'Lending',
    label: 'High-growth consumer credit',
    currentSize: '\u20b913.4 L Cr',
    currentSizeNumeric: 13.4,
    basis: 'Outstanding credit balance',
    cagr: '15.08%\u201315.5%',
    cagrNumeric: 15.3,
    outlook: 'Projected to reach \u20b948.4 L Cr by 2034',
    outlookNumeric: 48.4,
    drivers: 'Fintech digital integration and small-ticket consumer credit',
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    category: 'Lending',
    label: 'Large MSME financing market',
    currentSize: '\u20b954.6 L Cr',
    currentSizeNumeric: 54.6,
    basis: 'Total MSME financing market',
    cagr: '11.1%\u201315.3%',
    cagrNumeric: 13.2,
    outlook: 'Projected to reach \u20b995.7 L Cr by 2030',
    outlookNumeric: 95.7,
    drivers: 'Formal credit penetration through the Unified Lending Interface',
  },
  {
    id: 'gold-loans',
    title: 'Gold Loans',
    category: 'Lending',
    label: 'Growing organised credit',
    currentSize: '\u20b96.7 L Cr',
    currentSizeNumeric: 6.7,
    basis: 'Organised lending portfolio',
    cagr: '11.9%\u201314.8%',
    cagrNumeric: 13.4,
    outlook: 'Expected to reach \u20b913\u201314 L Cr by 2029\u20132031',
    outlookNumeric: 13.5,
    drivers: 'High gold prices and the transition from informal to organised lenders',
  },
  {
    id: 'retail-insurance',
    title: 'Retail Insurance*',
    category: 'Insurance*',
    label: 'Expanding protection market',
    currentSize: '\u20b911.9 L Cr',
    currentSizeNumeric: 11.9,
    basis: 'Estimated retail premium segment',
    cagr: '12.4%',
    cagrNumeric: 12.4,
    outlook: 'Supported by the structural goal of "Insurance for All by 2047"',
    outlookNumeric: 22,
    keyProducts: 'Bike, Car, Health and Life Insurance',
  },
  {
    id: 'micro-insurance',
    title: 'Micro-insurance*',
    category: 'Insurance*',
    label: 'Inclusive insurance growth',
    currentSize: '\u20b94,160 Cr',
    currentSizeNumeric: 0.416,
    basis: 'Estimated general and life micro-insurance premium',
    cagr: '14.44%\u201315.67%',
    cagrNumeric: 15,
    outlook: 'Projected to exceed \u20b914,500 Cr by 2034',
    outlookNumeric: 1.45,
    keyProducts: 'Personal Accident, Daily Hospital Cash, Cyber Protect, Climate Protect and many more',
  },
];

export const MARKET_FILTERS = ['All markets', 'Lending', 'Wellness', 'Healthcare', 'Insurance*'];

export const MARKET_GAPS = [
  'Separate partnerships for each product',
  'Multiple vendor SPOCs',
  'Different technology integrations',
  'Complex lead-management processes',
  'Product-specific regulatory requirements',
  'Fragmented fulfilment and reconciliation workflows',
];

export const ARCHITECTURE_STEPS = [
  {
    id: 1,
    icon: 'Building2',
    title: 'Partner platform',
    body: 'Fintechs and corporate business correspondents connect their existing digital or assisted channels to RevaSure.',
    items: [],
  },
  {
    id: 2,
    icon: 'Cpu',
    title: 'RevaSure technology layer',
    body: 'The platform provides:',
    items: ['Single API', 'White-label interface', 'Product catalogue', 'Application journeys', 'Lead routing', 'Status tracking', 'Reporting and reconciliation'],
  },
  {
    id: 3,
    icon: 'Boxes',
    title: 'Product ecosystem',
    body: 'Customers can access:',
    items: ['Personal loans', 'Business loans', 'Gold loans', 'Wellness products', 'Healthcare products', 'AI in Healthcare', 'Retail insurance*', 'Micro-insurance*'],
  },
  {
    id: 4,
    icon: 'Cog',
    title: 'Operations layer',
    body: 'RevaSure coordinates relevant product and fulfilment workflows across the connected partner ecosystem.',
    items: [],
  },
  {
    id: 5,
    icon: 'Users',
    title: 'Customer experience',
    body: 'Customers receive access to more relevant products within your ecosystem.',
    items: [],
  },
];

export const COMPARISON = [
  ['Higher Manpower Cost', 'Lowest Manpower cost'],
  ['Separate partnership for each category', 'Unified platform relationship'],
  ['Multiple vendor contacts', 'Centralised coordination'],
  ['Separate integrations', 'Single API or white-label integration'],
  ['Fragmented product workflows', 'Coordinated operating layer'],
  ['Multiple reporting processes', 'Unified reporting and reconciliation'],
  ['Limited product coverage', 'Lending, wellness, healthcare and insurance* access'],
];

export const PARTNER_TYPES = ['Fintech', 'Corporate Business Correspondent', 'NGO', 'SHG', 'FPO', 'NBFC', 'Bank', 'Other'];
export const PRODUCT_CATEGORIES = ['Lending', 'Wellness', 'Healthcare', 'Insurance*', 'Multiple categories', 'None yet'];

export const INSURANCE_DISCLAIMER = '*Insurance products are subject to applicable regulatory requirements and the processes of authorised product partners.';

export const RURAL_IMPACT = {
  eyebrow: 'A Built-In Advantage for Insurers',
  title: 'Rural & Social Impact',
  description:
    'Indian insurers face mandatory rural and social sector obligations. RevaSure gives you a ready-made, execution-ready path to meet them profitably.',
  bullets: [
    'Vast rural & semi-urban distribution network: NGOs, SHGs, FPOs and RMFs.',
    'Consulting + distribution execution to design products that actually fit rural livelihoods.',
    'Meet regulatory obligations while building profitable, long-term rural relationships.',
  ],
  stat: {
    value: '$70B+',
    label: 'Projected wellness & protection market across rural and semi-urban India.',
  },
};
