import React from 'react';
import LegalPage from '../components/LegalPage';
import Brand from '../components/Brand';

const intro = (
  <>
    <p>
      Welcome to the digital portal operated by{' '}
      <span className="font-semibold text-[#022F71]">REVASURE PRIVATE LIMITED</span>{' '}
      (hereinafter referred to as the &ldquo;Company&rdquo;, &ldquo;RevaSure&rdquo;, &ldquo;We&rdquo;,
      &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;). This Terms of Use document (the &ldquo;Terms&rdquo; or
      &ldquo;Agreement&rdquo;) governs your access to and use of the website{' '}
      <span className="underline">https://revasure.biz/</span>, including all software-as-a-service
      (SaaS) products, application programming interfaces (APIs), digital aggregator platforms,
      electronic marketplaces, referral engines, mobile applications, and B2B corporate support
      tools offered thereon (collectively referred to as the &ldquo;Services&rdquo;).
    </p>
  </>
);

const noticeBlock = (
  <div className="rounded-2xl border border-[#049297]/30 bg-[#F7FAFC] p-5 md:p-6">
    <div className="text-xs font-semibold uppercase tracking-widest text-[#049297]">
      Important Legal Notice
    </div>
    <p className="mt-2 text-sm md:text-[15px] text-[#22405e] leading-relaxed">
      Please read these Terms carefully before accessing or using the Services. This is a binding
      legal contract between you and the Company. By agreeing to these Terms, creating an account,
      purchasing healthcare wellness products, licensing proprietary SaaS tools, or accessing the
      network alliance ecosystem, you explicitly represent that you have read, understood, and
      concur to be bound by all provisions contained herein, including the arbitration clause,
      class action waiver, and indemnity strategies. If you do not agree, you must immediately
      cease using the Platform.
    </p>
  </div>
);

const sections = [
  {
    heading: '1. Legal Compliance and Acceptance of Terms',
    body: (
      <p>
        These Terms are published and formulated in strict adherence to the Companies Act, 2013,
        the Information Technology Act, 2000, and the Information Technology (Intermediary
        Guidelines and Digital Media Ethics Code) Rules, 2021.
      </p>
    ),
    bullets: [
      { label: 'Contractual Capacity', text: 'You affirm that you are at least 18 years of age and possess the legal capacity to enter into a binding contract under the Indian Contract Act, 1872. If you are registering or executing this Agreement on behalf of a corporate entity, firm, or institutional network, you represent that you possess explicit authority to bind such entity to these Terms.' },
      { label: 'Modifications', text: 'RevaSure reserves the unilateral right to amend, alter, modify, or replace these Terms at any time without prior individual notice. Any changes will become effective immediately upon being posted on revasure.biz. Your continued engagement with the platform constitutes irrevocable acceptance of the modified Terms.' },
    ],
  },
  {
    heading: '2. Multi-Vertical Service Scope & User Obligations',
    body: (
      <p>
        The Company operates a highly diversified operational framework spanning multiple
        tech-enabled segments. Users are subject to specific provisions depending on their type of
        interface:
      </p>
    ),
    subsections: [
      {
        heading: 'A. Software-as-a-Service (SaaS) & Tech Licenses',
        bullets: [
          { text: 'The Company grants a limited, non-exclusive, non-transferable, revocable license to use its cloud architectures, enterprise software, custom digital tools and user interfaces.' },
          { text: 'Users shall not reverse-engineer, decompile, copy, exploit, or duplicate the source codes, algorithms, or proprietary software architectures of the Company.' },
        ],
      },
      {
        heading: 'B. E-Commerce Platforms & Online Product Sales',
        bullets: [
          { text: 'RevaSure provides digital marketplace and aggregator structures for non-regulated human health and medical wellness products.' },
          { text: 'All product dimensions, imagery, descriptions and insights on the platform are provided for contextual awareness and informational purposes only.' },
        ],
      },
      {
        heading: 'C. B2B Lead Generation & Affiliate Distributions',
        bullets: [
          { text: 'The Company deploys application routing architectures, data processing frameworks, referral engines and commission metrics for corporate clients, registered platform distributors, freelance agents and affiliate channels.' },
          { text: 'Distributors and network partners are independent contractors. Nothing in these Terms shall establish an employee-employer relationship, partnership, or joint venture between the user and RevaSure.' },
        ],
      },
    ],
  },
  {
    heading: '3. Account Registration, Security, and Access Termination',
    bullets: [
      { label: 'Credential Protection', text: 'To access certain SaaS applications, affiliate dashboards, or purchase portals, you may be required to register a secure user account. You are entirely responsible for maintaining the confidentiality of your login credentials and for any activities transacted under your account.' },
      { label: 'Accuracy of Data', text: 'You must provide accurate, updated and legitimate information. Falsifying corporate details, PAN, DIN, or bank routing values will result in immediate, unconditional termination of access and potential referral to statutory enforcement bodies.' },
      { label: 'Right to Refuse Service', text: 'The Board of Directors and the operating compliance head of RevaSure reserve an absolute right to restrict, suspend, or terminate any user account, platform access, or commercial distribution payout track at their sole discretion, with or without cause, and without liability.' },
    ],
  },
  {
    heading: '4. Medical & Healthcare Disclaimer',
    bullets: [
      { label: 'No Medical Advice', text: 'RevaSure\u2019s platform coordinates wellness tracking, preventive health insights, connection parameters with third-party allied health providers, and the sale of non-regulated medical wellness products. The contents of the Services and the products sold are not medical advice.' },
      { label: 'Allied Health Providers', text: 'Any connection, lead routing, or communication with third-party allied health professionals or independent ambulance activities facilitated through the platform is done strictly at the user\u2019s independent risk. RevaSure does not endorse, verify, or guarantee the efficacy, safety, or legality of services rendered by such external third parties.' },
      { label: 'Consultation', text: 'Users must explicitly seek independent medical consultation from licensed physicians before acting upon any insight, tracking parameter, or wellness product acquired through the Services.' },
    ],
  },
  {
    heading: '5. Proprietary Intellectual Property Rights',
    bullets: [
      { label: 'Ownership', text: 'All right, title and interest in and to the platform, including but not limited to proprietary source codes, digital assets, patents, copyrights, algorithms, user interfaces, corporate trade dress, domain names, graphic layouts, and display media are the exclusive intellectual property of REVASURE PRIVATE LIMITED.' },
      { label: 'Trademarks', text: 'The name "RevaSure", "RevaSure Private Limited", its logo markers and distinct product taglines are registered or common law trademarks of the Company. No license or right to utilise these marks is granted without prior explicit written authorisation from the Company\u2019s Board of Directors.' },
    ],
  },
  {
    heading: '6. Payment Channels, Billing Systems and Fee Structures',
    bullets: [
      { label: 'Processing Mechanics', text: 'All electronic marketplace collections, SaaS license fees and corporate payouts are securely processed through integrated escrow setups, digital merchant gateways and electronic clearing systems authorised by the Reserve Bank of India.' },
      { label: 'Taxes and Tariffs', text: 'All pricing sheets displayed are subject to applicable statutory deductions, Goods and Services Tax (GST), withholding mechanisms and handling surcharges.' },
      { label: 'Refund and Forfeiture Policy', text: 'All subscription fees and transactional purchases made for SaaS applications or marketplace systems are strictly non-refundable unless specified otherwise by an explicit written SLA. In the event of a breach of these Terms, any accrued commercial incentive or distribution commission may be withheld or forfeited by the Company.' },
    ],
  },
  {
    heading: '7. Prohibited Uses and Platform Audits',
    body: <p>Users explicitly covenant and agree that they shall NOT:</p>,
    bullets: [
      { text: 'Upload, stream, or distribute any malicious content, trojans, backdoors, scraping engines, or software designed to interrupt, destroy, or compromise the data logs or network infrastructure of the Company.' },
      { text: 'Exploit the application routing or referral systems to generate fake traffic, fraudulent leads, or manipulation of the payout matrix schemas.' },
      { text: 'Infringe upon the privacy or data rights of other corporate clients, end-consumers or distribution channel partners registered on the web environment.' },
      { text: 'Frame, mirror, deep-link, or mask the website or any portion of the Services without prior, unambiguous written sanction.' },
    ],
  },
  {
    heading: '8. Indemnification Strategy',
    body: (
      <p>
        You agree to defend, indemnify and hold completely harmless REVASURE PRIVATE LIMITED, its
        subsidiaries, promoters, affiliates, directors, managers, compliance secretary officers and
        operational agents from and against any and all claims, financial leakages, liabilities,
        statutory penalties, legal expenses, damages and accounting settlements arising out of or
        fundamentally relating to:
      </p>
    ),
    bullets: [
      { text: 'Your breach of any clause or warranty enshrined in these Terms.' },
      { text: 'Your negligent, illegal, or fraudulent use of the SaaS frameworks, financial technologies, or e-commerce networks.' },
      { text: 'Your violation of any third-party right, including but not limited to privacy, intellectual property, or trade secrets.' },
    ],
  },
  {
    heading: '9. Absolute Limitation of Liability',
    bullets: [
      { label: 'As-Is Basis', text: 'The Services, all digital architectures, SaaS products, channels and marketplace content are accessible on an "as is" and "as available" footing, devoid of representations or warranties of any variety, express or implied.' },
      { label: 'Exclusion of Damages', text: 'To the maximum margin allowed by applicable compliance jurisdictions, in no event shall RevaSure, its directors, shareholders, or agents be liable for any indirect, consequential, incidental, special or punitive damages. This includes loss of system profits, revenue gaps, data corruption, or service interruptions stemming out of your coupling with the digital ecosystem.' },
      { label: 'Maximum Cap', text: 'The comprehensive recovery cap for all claims fundamentally allied to these Terms shall not exceed the total amount paid by the specific user to the Company for the disputed service over the immediate preceding three (3) month period.' },
    ],
  },
  {
    heading: '10. Governing Law and Jurisdictional Mandate',
    body: (
      <p>
        These Terms, corporate compliance frameworks and your relationship with RevaSure shall be
        interpreted, construed, governed and adjudicated strictly under the laws of the Republic of
        India. Any cause of action or structural dispute arising from this document that cannot be
        resolved amicably shall be subjected to the exclusive jurisdictional authority of the
        courts located in Mumbai/Thane, Maharashtra, India.
      </p>
    ),
  },
  {
    heading: '11. Arbitration Protocols and Class Action Waiver',
    bullets: [
      { label: 'Arbitration Mechanic', text: 'Any dispute, interpretation conflict, or actionable claim arising out of these Terms shall be referred to and conclusively settled by binding arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996. The arbitral bench shall consist of a sole arbitrator appointed mutually by the Company and the disputing party. The legal seat and venue of the arbitration process shall be Mumbai, India. The language of the proceedings shall be English.' },
      { label: 'Class Action Disseverance', text: 'You and the Company agree that each party may bring intentional claims against the other only in your or its individual capacity, and not as a plaintiff or class member in any purported class suit, representative motion, or integrated corporate arbitration environment.' },
    ],
  },
  {
    heading: '12. Severability and Non-Waiver',
    bullets: [
      { label: 'Severability', text: 'If any specific provision, paragraph, or liability cap outlined in this Agreement is adjudicated by an authorised court or arbitral forum to be invalid, illegal, or completely unenforceable, such provision shall be minimised or severed to the lowest necessary margin. The remaining structural tenets of these Terms shall continue in full force, operation and effect.' },
      { label: 'Non-Waiver', text: 'No failure or delay by RevaSure in exercising any right, power, or statutory privilege under these Terms shall function as a waiver of that or any other right.' },
    ],
  },
];

const contact = {
  heading: '13. Compliance & Grievance Officer Redressal',
  lines: [
    { label: 'Attention', value: 'Grievance Officer, Compliance & Legal Wing' },
    { label: 'Corporate Entity', value: 'RevaSure Private Limited' },
    { label: 'Digital Communication Intake', value: 'legal@revasure.biz' },
    { label: 'Registered Address', value: 'Maharashtra, India' },
  ],
};

const Terms = () => {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title={<>Terms of Use at <Brand /></>}
      lastUpdated="August 10, 2026"
      intro={intro}
      noticeBlock={noticeBlock}
      sections={sections}
      contact={contact}
    />
  );
};

export default Terms;
