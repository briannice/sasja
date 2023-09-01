import React, { ButtonHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const buttonStyles = cva(
  'rounded font-title font-semibold px-5 py-2.5 ring-offset-2 focus-visible:outline-none focus-visible:ring-2',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-text ring-primary hover:bg-primary-dark hover:ring-primary-dark',
        secondary:
          'bg-secondary text-secondary-text ring-secondary hover:bg-secondary-dark hover:ring-secondary-dark',
        tertiary:
          'bg-tertiary text-tertiary-text ring-tertiary hover:bg-tertiary-dark hover:ring-tertiary-dark',
        success:
          'bg-success text-success-text ring-success hover:bg-success-dark hover:ring-success-dark',
        warning:
          'bg-warning text-warning-text ring-warning hover:bg-warning-dark hover:ring-warning-dark',
        error: 'bg-error text-error-text ring-error hover:bg-error-dark hover:ring-error-dark',
        info: 'bg-info text-info-text ring-info hover:bg-info-dark hover:ring-info-dark',
        link: 'bg-link text-link-text ring-link hover:bg-link-dark hover:ring-link-dark',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(className, buttonStyles({ variant }))} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
