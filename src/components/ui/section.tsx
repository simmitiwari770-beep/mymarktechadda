import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  id?: string;
}

export const Section = ({ children, className, gradient = false, id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "py-16 lg:py-24",
        gradient && "section-gradient",
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, centered = true, className }: SectionHeaderProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}>
      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
