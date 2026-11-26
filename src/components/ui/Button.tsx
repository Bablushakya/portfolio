import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  target,
  rel,
  children,
  className,
  fullWidth,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-accent-blue hover:bg-blue-500 text-white shadow-md hover:shadow-glow-blue active:scale-95',
    secondary:
      'bg-accent-cyan hover:bg-cyan-400 text-dark-bg shadow-md hover:shadow-glow-cyan active:scale-95',
    outline:
      'border border-current text-accent-blue hover:bg-accent-blue/10 dark:border-accent-blue dark:text-accent-blue active:scale-95',
    ghost:
      'text-light-muted dark:text-dark-muted hover:text-accent-blue hover:bg-accent-blue/10 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);

  if (Tag === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
