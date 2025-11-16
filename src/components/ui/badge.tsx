import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 text-[11px] font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-sm",
        secondary:
          "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm",
        destructive:
          "border-red-300 bg-red-100 text-red-900 hover:bg-red-200 hover:shadow-sm",
        outline:
          "border-gray-300 text-gray-800 hover:bg-gray-100 hover:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);




export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
