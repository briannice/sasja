import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    borderRadius: {
      DEFAULT: 'var(--border-radius)',
    },
    colors: {
      bg: {
        DEFAULT: 'var(--color-bg)',
        accent: 'var(--color-bg-accent)',
      },
      text: {
        DEFAULT: 'var(--color-text)',
        accent: 'var(--color-text-accent)',
      },
      primary: {
        DEFAULT: 'var(--color-primary)',
        dark: 'var(--color-primary-dark)',
        text: 'var(--color-primary-text)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        dark: 'var(--color-secondary-dark)',
        text: 'var(--color-secondary-text)',
      },
      tertiary: {
        DEFAUL: 'var(--color-tertiary)',
        dark: 'var(--color-tertiary-dark)',
        text: 'var(--color-tertiary-text)',
      },
      success: {
        DEFAULT: 'var(--color-success)',
        dark: 'var(--color-success-dark)',
        text: 'var(--color-success-text)',
      },
      error: {
        DEFAULT: 'var(--color-error)',
        dark: 'var(--color-error-dark)',
        text: 'var(--color-error-text)',
      },
      warning: {
        DEFAULT: 'var(--color-warning)',
        dark: 'var(--color-warning-dark)',
        text: 'var(--color-warning-text)',
      },
      info: {
        DEFAULT: 'var(--color-info)',
        dark: 'var(--color-info-dark)',
        text: 'var(--color-info-text)',
      },
      border: {
        DEFAULT: 'var(--color-border)',
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
