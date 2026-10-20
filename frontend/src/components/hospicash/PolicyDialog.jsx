import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import LegalSections from '../LegalSections';
import { HOSPICASH_DOCS } from '../../data/hospicash';

export const PolicyDialog = ({ docKey, onClose, onAgree }) => {
  const doc = docKey ? HOSPICASH_DOCS[docKey] : null;
  return (
    <Dialog open={!!doc} onOpenChange={(o) => !o && onClose()}>
      {doc && (
        <DialogContent data-testid={`policy-dialog-${docKey}`} className="max-w-3xl w-[94vw] p-0 gap-0 overflow-hidden rounded-2xl">
          <DialogHeader className="px-6 md:px-8 pt-7 pb-5 border-b border-[#022F71]/10 bg-[#F7FAFC] text-left">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#049297]">{doc.eyebrow}</div>
            <DialogTitle className="text-2xl md:text-3xl font-semibold text-[#022F71]">{doc.title}</DialogTitle>
            <DialogDescription className="text-xs text-[#22405e]">Last Updated: {doc.lastUpdated}</DialogDescription>
          </DialogHeader>
          <div className="max-h-[58vh] overflow-y-auto px-6 md:px-8 py-6 space-y-8" data-testid="policy-dialog-body">
            <p className="text-[15px] text-[#22405e] leading-relaxed">{doc.intro}</p>
            <LegalSections sections={doc.sections} contact={doc.contact} animate={false} />
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 px-6 md:px-8 py-4 border-t border-[#022F71]/10 bg-white">
            <Link
              to={`/products/hospicash/${doc.slug}`}
              target="_blank"
              data-testid="policy-dialog-full-page-link"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#049297] hover:text-[#022F71] transition-colors"
            >
              Open full page <ExternalLink size={14} />
            </Link>
            {onAgree ? (
              <button
                data-testid="policy-dialog-agree-btn"
                onClick={() => { onAgree(docKey); onClose(); }}
                className="btn-teal px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2"
              >
                <Check size={16} /> I have read & agree
              </button>
            ) : (
              <button data-testid="policy-dialog-close-btn" onClick={onClose} className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium">
                Close
              </button>
            )}
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PolicyDialog;
