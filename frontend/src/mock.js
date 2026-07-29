// Mock data for RevaSure landing site

export const NAV_LINKS = [
  { label: 'Markets', href: '#markets' },
  { label: 'Platform', href: '#platform' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Trust', href: '#trust' },
];

export const MARKET_TILES = [
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    category: 'Lending',
    label: 'High-growth consumer credit',
    currentSize: '₹13.4 L Cr',
    currentSizeNumeric: 13.4,
    basis: 'Outstanding credit balance',
    cagr: '15.08%–15.5%',
    cagrNumeric: 15.3,
    outlook: 'Projected to reach ₹48.4 L Cr by 2034',
    outlookNumeric: 48.4,
    drivers: 'Fintech digital integration and small-ticket consumer credit',
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    category: 'Lending',
    label: 'Large MSME financing market',
    currentSize: '₹54.6 L Cr',
    currentSizeNumeric: 54.6,
    basis: 'Total MSME financing market',
    cagr: '11.1%–15.3%',
    cagrNumeric: 13.2,
    outlook: 'Projected to reach ₹95.7 L Cr by 2030',
    outlookNumeric: 95.7,
    drivers: 'Formal credit penetration through the Unified Lending Interface',
  },
  {
    id: 'gold-loans',
    title: 'Gold Loans',
    category: 'Lending',
    label: 'Growing organised credit',
    currentSize: '₹6.7 L Cr',
    currentSizeNumeric: 6.7,
    basis: 'Organised lending portfolio',
    cagr: '11.9%–14.8%',
    cagrNumeric: 13.4,
    outlook: 'Expected to reach ₹13–14 L Cr by 2029–2031',
    outlookNumeric: 13.5,
    drivers: 'High gold prices and the transition from informal to organised lenders',
  },
  {
    id: 'wellness',
    title: 'Wellness',
    category: 'Wellness',
    label: 'Preventive health demand',
    currentSize: '₹13.8 L Cr',
    currentSizeNumeric: 13.8,
    basis: 'Broad health and wellness ecosystem',
    cagr: '5.14%–5.55%',
    cagrNumeric: 5.3,
    outlook: 'Forecast to reach ₹21.6 L Cr by 2034',
    outlookNumeric: 21.6,
    drivers: 'Preventive healthcare, organic functional foods and immunity products',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    category: 'Healthcare',
    label: 'Fast-growing healthcare market',
    currentSize: '₹34.9 L Cr',
    currentSizeNumeric: 34.9,
    basis: 'Broad overall industry',
    cagr: '17.5%–22.5%',
    cagrNumeric: 20,
    outlook: 'Expected to surpass ₹53.6 L Cr within the next few years',
    outlookNumeric: 53.6,
    drivers: 'Medical tourism, diagnostics demand and private infrastructure expansion',
  },
  {
    id: 'retail-insurance',
    title: 'Retail Insurance',
    category: 'Insurance',
    label: 'Expanding protection market',
    currentSize: '₹11.9 L Cr',
    currentSizeNumeric: 11.9,
    basis: 'Estimated retail premium segment',
    cagr: '12.4%',
    cagrNumeric: 12.4,
    outlook: 'Supported by the structural goal of "Insurance for All by 2047"',
    outlookNumeric: 22,
    drivers: 'Retail digital health insurance and standalone motor policies',
  },
  {
    id: 'micro-insurance',
    title: 'Micro-insurance',
    category: 'Insurance',
    label: 'Inclusive insurance growth',
    currentSize: '₹4,160 Cr',
    currentSizeNumeric: 0.416,
    basis: 'Estimated general and life micro-insurance premium',
    cagr: '14.44%–15.67%',
    cagrNumeric: 15,
    outlook: 'Projected to exceed ₹14,500 Cr by 2034',
    outlookNumeric: 1.45,
    drivers: 'Bima Sugam, microfinance channels and government-supported rural safety nets',
  },
];

export const MARKET_FILTERS = ['All markets', 'Lending', 'Wellness', 'Healthcare', 'Insurance'];

export const MARKET_GAPS = [
  'Separate partnerships for each product',
  'Multiple vendor SPOCs',
  'Different technology integrations',
  'Complex lead-management processes',
  'Product-specific regulatory requirements',
  'Fragmented fulfilment and reconciliation workflows',
];

export const VALUE_CARDS = [
  {
    icon: 'Layers',
    title: 'One platform',
    text: 'Access lending, wellness, healthcare and insurance products through a unified product ecosystem.',
  },
  {
    icon: 'Plug',
    title: 'One integration',
    text: 'Connect through a single API or deploy RevaSure’s white-label interface within your existing platform.',
  },
  {
    icon: 'Workflow',
    title: 'One operating layer',
    text: 'RevaSure coordinates product, technology and operational workflows across the connected ecosystem.',
  },
  {
    icon: 'Sparkles',
    title: 'Partner outcome',
    text: 'Your organisation can focus on its core business while offering customers more relevant products.',
  },
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
    items: ['Personal loans', 'Business loans', 'Gold loans', 'Wellness products', 'Healthcare products', 'Retail insurance', 'Micro-insurance'],
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
    body: 'Customers receive access to more relevant products through the platform they already use.',
    items: [],
  },
];

export const COMPARISON = [
  ['Separate partnership for each category', 'Unified platform relationship'],
  ['Multiple vendor contacts', 'Centralised coordination'],
  ['Separate integrations', 'Single API or white-label integration'],
  ['Fragmented product workflows', 'Coordinated operating layer'],
  ['Multiple reporting processes', 'Unified reporting and reconciliation'],
  ['Limited product coverage', 'Lending, wellness, healthcare and insurance access'],
];

export const TRUST_CARDS = [
  {
    icon: 'Code2',
    title: 'Technology',
    text: 'API-led and white-label integration options for digital and assisted channels.',
  },
  {
    icon: 'Package',
    title: 'Product breadth',
    text: 'Access to lending, wellness, healthcare and insurance categories through one platform.',
  },
  {
    icon: 'HeartPulse',
    title: 'Healthcare focus',
    text: 'Designed to support the growing demand for wellness and healthcare products in India.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Operational reliability',
    text: 'Structured workflows for product discovery, lead movement, fulfilment and reporting.',
  },
];

export const PARTNER_TYPES = ['Fintech', 'Corporate Business Correspondent', 'NBFC', 'Bank', 'Other'];
export const PRODUCT_CATEGORIES = ['Lending', 'Wellness', 'Healthcare', 'Insurance', 'Multiple categories', 'None yet'];
