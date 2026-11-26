import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'relative w-10 h-10 rounded-xl flex items-center justify-center',
        'border border-light-border dark:border-dark-border',
        'bg-light-secondary dark:bg-dark-secondary',
        'text-light-muted dark:text-dark-muted',
        'hover:text-accent-blue hover:border-accent-blue/50',
        'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
        className
      )}
    >
      {theme === 'dark' ? (
        <Sun size={16} className="transition-transform duration-200" />
      ) : (
        <Moon size={16} className="transition-transform duration-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
