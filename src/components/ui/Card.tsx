import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-accent-bg/30 bg-secondary-bg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md",
        glass && "glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
