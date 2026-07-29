import React from 'react';
import useReveal from '../hooks/useReveal';

/**
 * Reveal — wraps children and animates them in when they enter the viewport.
 * variants: 'up' | 'left' | 'right' | 'fade' | 'scale'
 */
const Reveal = ({ children, delay = 0, variant = 'up', className = '', as: Tag = 'div' }) => {
  const [ref, visible] = useReveal();

  const base = 'reveal';
  const variantClass = `reveal--${variant}`;
  const style = { transitionDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref}
      style={style}
      className={`${base} ${variantClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
