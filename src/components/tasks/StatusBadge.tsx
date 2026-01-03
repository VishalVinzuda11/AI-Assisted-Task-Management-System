import { Status } from '@/types/task';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: Status;
}

const statusConfig = {
  new: {
    label: 'New',
    className: 'bg-primary/10 text-primary',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-warning/10 text-warning',
  },
  completed: {
    label: 'Completed',
    className: 'bg-success/10 text-success',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
