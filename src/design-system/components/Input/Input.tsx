import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const inputVariants = cva(
  'flex w-full rounded-md border px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input bg-background focus-visible:ring-1 focus-visible:ring-ring',
        filled:
          'border-transparent bg-muted focus-visible:bg-background focus-visible:ring-1 focus-visible:ring-ring',
        ghost:
          'border-transparent bg-transparent focus-visible:bg-muted focus-visible:ring-1 focus-visible:ring-ring',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        default: 'h-9 px-3',
        lg: 'h-10 px-4',
        xl: 'h-12 px-4 text-base',
      },
      state: {
        default: '',
        error: 'border-destructive focus-visible:ring-destructive',
        success: 'border-green-500 focus-visible:ring-green-500',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      state: 'default',
    },
  }
)

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      state: {
        default: 'text-foreground',
        error: 'text-destructive',
        success: 'text-green-600',
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-destructive",
        false: '',
      },
    },
    defaultVariants: {
      state: 'default',
      required: false,
    },
  }
)

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      size,
      state,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      id,
      required,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()
    const finalId = id || inputId
    const actualState = error ? 'error' : state

    return (
      <div className='space-y-2'>
        {label && (
          <Label htmlFor={finalId} state={actualState} required={required}>
            {label}
          </Label>
        )}
        <div className='relative'>
          {leftIcon && (
            <div className='absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground'>
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            id={finalId}
            className={cn(
              inputVariants({ variant, size, state: actualState }),
              leftIcon && 'pl-8',
              rightIcon && 'pr-8',
              className
            )}
            ref={ref}
            required={required}
            {...props}
          />
          {rightIcon && (
            <div className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground'>
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={cn('text-xs', error ? 'text-destructive' : 'text-muted-foreground')}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, state, required, ...props }, ref) => (
    <label ref={ref} className={cn(labelVariants({ state, required }), className)} {...props} />
  )
)
Label.displayName = 'Label'

export { Input, Label }
