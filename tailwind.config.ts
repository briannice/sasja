import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    borderRadius: {
      DEFAULT: 'var(--border-radius)',
    },
    colors: {
      bg: {
        DEFAULT: 'var(--bg)',
        accent: 'var(--bg-accent)',
      },
      text: {
        DEFAULT: 'var(--text)',
        accent: 'var(--text-accent)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        dark: 'var(--primary-dark)',
        text: 'var(--primary-text)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        dark: 'var(--secondary-dark)',
        text: 'var(--secondary-text)',
      },
      tertiary: {
        DEFAUL: 'var(--tertiary)',
        dark: 'var(--tertiary-dark)',
        text: 'var(--tertiary-text)',
      },
      success: {
        DEFAULT: 'var(--success)',
        dark: 'var(--success-dark)',
        text: 'var(--success-text)',
      },
      error: {
        DEFAULT: 'var(--error)',
        dark: 'var(--error-dark)',
        text: 'var(--error-text)',
      },
      warning: {
        DEFAULT: 'var(--warning)',
        dark: 'var(--warning-dark)',
        text: 'var(--warning-text)',
      },
      info: {
        DEFAULT: 'var(--info)',
        dark: 'var(--info-dark)',
        text: 'var(--info-text)',
      },
      border: {
        DEFAULT: 'var(--border)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
      screens: {
        lg: '1024px',
        xl: '1280px',
      },
    },
    fontFamily: {
      title: ['var(--font-kanit)'],
      text: ['var(--font-roboto)'],
    },
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}

export default config
