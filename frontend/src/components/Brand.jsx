import React from 'react';

/**
 * Brand — renders the RevaSure wordmark using the exact logo colours:
 *   "Reva" in Deep Trust Blue (#022F71)
 *   "Sure" in Digital Teal (#049297)
 *
 * Props:
 *   className: extra classes for size/weight
 *   variant:   'default' (uses the two brand colors)
 *              'onDark'  (uses white + light aqua for use on dark backgrounds)
 */
const Brand = ({ className = '', variant = 'default' }) => {
  const isDark = variant === 'onDark';
  const first = isDark ? '#FFFFFF' : '#022F71';
  const second = isDark ? '#A0C8D6' : '#049297';
  return (
    <span className={`brand-name font-bold ${className}`}>
      <span style={{ color: first }}>Reva</span>
      <span style={{ color: second }}>Sure</span>
    </span>
  );
};

export default Brand;
