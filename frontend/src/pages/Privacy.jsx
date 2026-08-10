import React from 'react';
import LegalPage from '../components/LegalPage';
import Brand from '../components/Brand';

const intro = (
  <p>
    This Privacy Policy (&ldquo;Policy&rdquo;) governs the collection, processing, storage, and usage of
    personal data by <span className="font-semibold text-[#022F71]">REVASURE PRIVATE LIMITED</span>{' '}
    (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;), a corporate entity
    incorporated under the Companies Act, 2013. This Policy applies to all visitors, end-users,
    customers, freelance marketing affiliates, distribution channels, corporate clients, and
    third-party partners (collectively referred to as &ldquo;User&rdquo;, &ldquo;You&rdquo;, or
    &ldquo;Your&rdquo;) accessing or utilising our digital ecosystem, mobile applications, web
    platforms and Software-as-a-Service (SaaS) products (collectively, the &ldquo;Platform&rdquo;).
  </p>
);

const sections = [
  {
    heading: '1. Introduction and Scope',
    body: (
      <p>
        Please read this Policy carefully. Your use of the Platform indicates your acceptance of the
        practices described in this document.
      </p>
    ),
  },
  {
    heading: '2. Nature of the Company\u2019s Ecosystem',
    body: (
      <p>
        The Company operates an integrated multi-sector technological ecosystem. By using the
        Platform, you acknowledge that our processing of data touches upon several distinctive
        business operations:
      </p>
    ),
    bullets: [
      { label: 'Technology & SaaS', text: 'Custom digital tools, cloud data architectures, software development, and license distributions.' },
      { label: 'Healthcare E-Commerce', text: 'Marketplaces for non-regulated human health and wellness products, health tracking tools, and alignment with third-party allied health providers.' },
      { label: 'Digital Lead Generation & Aggregator Systems', text: 'Referral routing engines and application structures connecting consumers to corporate partners in banking, insurance, and lending segments.' },
      { label: 'Affiliate & Distribution Networks', text: 'Network management tools, custom payout mechanisms, reward matrices, and commercial incentive tracks for registered distributors and independent lead generators.' },
    ],
  },
  {
    heading: '3. Information We Collect',
    body: (
      <p>
        We collect information that identifies, relates to, describes, or could reasonably be linked
        to an individual or business entity (&ldquo;Personal Data&rdquo;).
      </p>
    ),
    subsections: [
      {
        heading: 'A. Information Provided Directly by You',
        bullets: [
          { label: 'Identity and Contact Data', text: 'Full name, mailing address, billing address, email address, telephone numbers, and corporate credentials.' },
          { label: 'Account and Profile Credentials', text: 'Usernames, passwords, unique affiliate tracking codes, and operational metrics.' },
          { label: 'E-Commerce and Health-Tech Data', text: 'Non-regulated general wellness logs, health tracking metrics, transactional preferences, and health product purchases.' },
          { label: 'Financial Lead Data', text: 'Non-sensitive financial inquiries, loan/insurance application criteria, eligibility details, and document uploads channelled to partner underwriters.' },
        ],
      },
      {
        heading: 'B. Information Collected Automatically',
        bullets: [
          { label: 'Technical Logs', text: 'Internet Protocol (IP) address, device type, browser specifications, operating system versions, and unique device tokens.' },
          { label: 'Usage and Tracking Analytics', text: 'Interaction histories, clickstreams, page-response times, download errors, and feature engagement metrics via cookies, web beacons, and persistent scripts.' },
        ],
      },
    ],
  },
  {
    heading: '4. Legal Basis and Purpose of Data Processing',
    body: (
      <>
        <p>
          We process your Personal Data strictly in accordance with applicable laws under the
          following frameworks:
        </p>
      </>
    ),
    subsections: [
      {
        heading: 'SaaS & Cloud Operations',
        body: 'Technical Logs and Account Credentials are processed for contractual fulfilment and secure platform maintenance.',
      },
      {
        heading: 'E-Commerce Sales & Wellness Tracking',
        body: 'Contact Data, Health Tracking Logs and Purchase records are processed for transactional execution, customer support, and preventive wellness insights.',
      },
      {
        heading: 'FinTech / InsurTech Lead Routing',
        body: 'Lead Profiles and Application Data are processed based on your explicit consent for transmission to licensed financial brokers and insurance underwriters.',
      },
      {
        heading: 'Affiliate Matrix Management',
        body: 'Affiliate Tracking Codes and Payout Data are processed for performance tracking, commission calculation and reward verification.',
      },
    ],
  },
  {
    heading: '5. Robust Data Disclosures and Transmissions',
    body: (
      <p>
        To prevent legal exposure from information routing, you explicitly grant the Company the
        right to share or disclose data under the following conditions:
      </p>
    ),
    bullets: [
      { label: 'Strategic Alliances and Corporate Partners', text: 'Data may be transmitted to verified financial lending firms, insurance brokers, and allied health institutions to fulfil your explicit lead requests or service calls.' },
      { label: 'Affiliate Ecosystem Transparency', text: 'Basic promotional tracking metrics may be visible within the network matrix to ensure correct cross-channel commission payouts.' },
      { label: 'Third-Party Infrastructure Providers', text: 'Data is safely stored and processed via verified, encrypted cloud architectures, SMS gateways and secure banking portals.' },
      { label: 'Statutory Obligations', text: 'We reserve the right to disclose data to judicial, regulatory, or law enforcement bodies if required by statutory directives.' },
    ],
  },
  {
    heading: '6. User Rights and Data Autonomy',
    body: (
      <p>
        Subject to regional privacy protocols (such as the Digital Personal Data Protection Act,
        2023), users possess fundamental rights concerning their data:
      </p>
    ),
    bullets: [
      { label: 'Right to Access and Correction', text: 'You may review, modify, or update your information profile through your secure account settings dashboard.' },
      { label: 'Right to Erase / Forgotten', text: 'You may request total profile deletion. However, the Company reserves the right to retain specific subsets of transactional data to fulfil mandatory financial compliance laws and tax audits.' },
      { label: 'Right to Withdraw Consent', text: 'You can revoke marketing or lead-generation consents at any time. Revocation does not affect the legality of any data processing carried out before the withdrawal.' },
    ],
  },
  {
    heading: '7. Indemnification, Limitation of Liability, and Legal Shielding',
    bullets: [
      { label: 'Third-Party Fault Disclaimer', text: 'The Platform serves as a tech aggregator and distributor. The Company does not assume any liability for breaches, operational errors, or privacy lapses originating from third-party allied health providers, independent financial lending firms, or external product manufacturers.' },
      { label: 'User Responsibility for Credentials', text: 'You remain exclusively responsible for keeping all unique profile passwords, affiliate keys and digital tokens confidential.' },
      { label: 'Unintentional Interception Disclaimer', text: 'While we use robust technical firewalls to prevent unauthorised breaches, no data transfer over the internet is completely impregnable. The Company cannot be held liable for malicious, highly sophisticated cyber attacks, system failures, or unforeseen server intercepts carried out by criminal entities.' },
    ],
  },
  {
    heading: '8. International Data Transfers',
    body: (
      <p>
        Your data may be moved to and kept on secure cloud networks located outside your state or
        country. Your agreement to this Privacy Policy followed by your submission of such details
        means you consent to these cross-border data transfers.
      </p>
    ),
  },
  {
    heading: '9. Modifications to This Policy',
    body: (
      <p>
        The Company reserves the right to amend, alter, or restate this Policy at any point without
        prior individual warning. All modifications become legally binding the moment they are
        posted on the Platform. Continuing to use our system after changes are posted means you
        accept the revised Privacy Policy.
      </p>
    ),
  },
];

const contact = {
  heading: '10. Grievance Redressal and Contact Details',
  lines: [
    { label: 'Data Protection Team', value: 'Reach out via the official contact portal on the website.' },
    { label: 'Website', value: 'https://revasure.biz/' },
  ],
};

const Privacy = () => {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title={<>Privacy Policy at <Brand /></>}
      lastUpdated="August 10, 2026"
      intro={intro}
      sections={sections}
      contact={contact}
    />
  );
};

export default Privacy;
