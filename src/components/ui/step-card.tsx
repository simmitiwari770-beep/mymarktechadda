import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

export const StepCard = ({
  number,
  title,
  description,
  icon,
  className,
  delay = 0,
}: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative p-6 rounded-xl border border-border bg-card card-hover",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon && <span className="text-primary">{icon}</span>}
            <h3 className="font-display font-semibold text-foreground">
              {title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
