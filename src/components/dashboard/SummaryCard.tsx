import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SummaryCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning';
}

export function SummaryCard({ title, value, icon: Icon, variant = 'default' }: SummaryCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow border border-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-semibold text-foreground mt-2">{value}</p>
        </div>
        <div
          className={cn(
            'p-3 rounded-lg',
            variant === 'success' && 'bg-success/10',
            variant === 'warning' && 'bg-warning/10',
            variant === 'default' && 'bg-primary/10'
          )}
        >
          <Icon
            className={cn(
              'h-6 w-6',
              variant === 'success' && 'text-success',
              variant === 'warning' && 'text-warning',
              variant === 'default' && 'text-primary'
            )}
          />
        </div>
      </div>
    </div>
  );
}
