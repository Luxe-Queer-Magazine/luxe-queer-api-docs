'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          {
            'bg-[#0047AB] text-white hover:bg-blue-700': variant === 'default',
            'border-2 border-[#0047AB] text-[#0047AB] hover:bg-blue-50': variant === 'outline',
            'text-[#0047AB] hover:bg-blue-50': variant === 'ghost',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-8 px-3': size === 'sm',
            'h-12 px-8': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
