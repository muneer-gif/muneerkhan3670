import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LegalPage from '../components/LegalPage';
import { HOSPICASH_DOCS } from '../data/hospicash';

export default function HospicashLegal() {
  const { doc } = useParams();
  const d = HOSPICASH_DOCS[doc];
  if (!d) return <Navigate to="/products/hospicash" replace />;

  return (
    <LegalPage
      key={doc}
      eyebrow={d.eyebrow}
      title={d.title}
      lastUpdated={d.lastUpdated}
      intro={<p>{d.intro}</p>}
      noticeBlock={
        <Link to="/products/hospicash#checkout" data-testid="hospicash-legal-back-link" className="inline-flex items-center gap-2 text-sm font-medium text-[#049297] hover:text-[#022F71]">
          <ArrowLeft size={16} /> Back to Hospicash
        </Link>
      }
      sections={d.sections}
      contact={d.contact}
    />
  );
}
