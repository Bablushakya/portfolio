import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <p className="mono text-xs font-medium tracking-widest uppercase mb-3 inline-flex items-center gap-2" style={{ color: '#3B82F6' }}>
          <span style={{ width: 32, height: 1, background: '#3B82F6', display: 'inline-block' }} />
          {eyebrow}
          <span style={{ width: 32, height: 1, background: '#3B82F6', display: 'inline-block' }} />
        </p>
      )}
      <h2
        className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
