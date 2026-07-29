import React, { useEffect, useState } from 'react';

/**
 * Animated counter — counts from 0 to value when the component is mounted.
 * Accepts numeric value, optional prefix, suffix, and precision.
 */
const AnimatedCounter = ({ value = 0, prefix = '', suffix = '', duration = 1400, precision = 0 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf;

    const tick = (t) => {
      const elapsed = t - start;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  const formatted = precision > 0 ? display.toFixed(precision) : Math.round(display).toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
