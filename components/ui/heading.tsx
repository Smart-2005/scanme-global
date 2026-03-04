import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export function Heading({ level, children, className }: HeadingProps) {
  const Tag: ElementType = `h${level}`;
  
  const baseClasses = "font-semibold tracking-tight";
  const sizeClasses = {
    1: "text-4xl sm:text-5xl md:text-6xl",
    2: "text-3xl sm:text-4xl md:text-5xl",
    3: "text-2xl sm:text-3xl md:text-4xl",
    4: "text-xl sm:text-2xl md:text-3xl",
    5: "text-lg sm:text-xl md:text-2xl",
    6: "text-base sm:text-lg md:text-xl",
  };

  return (
    <Tag className={cn(baseClasses, sizeClasses[level], className)}>
      {children}
    </Tag>
  );
}
