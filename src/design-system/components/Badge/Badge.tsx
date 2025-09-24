import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success:
          "border-transparent bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300",
        warning:
          "border-transparent bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300",
        info:
          "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300",
        outline: "text-foreground border-current",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  removable?: boolean
  onRemove?: () => void
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    size, 
    icon, 
    removable, 
    onRemove, 
    children,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(badgeVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
        {removable && onRemove && (
          <button
            type="button"
            className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-black/20 focus:bg-black/20 focus:outline-none"
            onClick={onRemove}
            aria-label="Remove badge"
          >
            <svg
              className="h-2 w-2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 8 8"
            >
              <path strokeLinecap="round" d="m1 1 6 6m0-6-6 6" />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge }