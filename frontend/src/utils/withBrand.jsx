import React from 'react';
import Brand from '../components/Brand';

/**
 * withBrand — splits a plain string on occurrences of "RevaSure"
 * and returns React nodes so that RevaSure renders in brand colours.
 *
 * Example:
 *   {withBrand('RevaSure coordinates workflows.')}
 */
export const withBrand = (text, brandProps = {}) => {
  if (!text) return null;
  const parts = String(text).split(/(RevaSure)/g);
  return parts.map((part, i) => {
    if (part === 'RevaSure') return <Brand key={i} className="font-semibold" {...brandProps} />;
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};
