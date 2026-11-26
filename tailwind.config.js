/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Dark theme
        dark: {
          bg: '#080D18',
          secondary: '#101827',
          card: '#131E30',
          text: '#F8FAFC',
          muted: '#A7B4C8',
          border: 'rgba(148,163,184,0.16)',
        },
        // Light theme
        light: {
          bg: '#F8FAFC',
          secondary: '#FFFFFF',
          card: '#FFFFFF',
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          'blue-dark': '#2563EB',
          'cyan-dark': '#0891B2',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #080D18 0%, #101827 50%, #0a1628 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.15)',
        'glow-cyan': '0 0 30px rgba(34,211,238,0.15)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.4)',
        'card-light': '0 4px 24px rgba(0,0,0,0.08)',
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
