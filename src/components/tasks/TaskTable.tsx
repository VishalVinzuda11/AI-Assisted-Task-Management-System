import { format } from 'date-fns';
import { MoreHorizontal, Pencil, Trash2, ArrowRight } from 'lucide-react';
import { Task, Status } from '@/types/task';
import { PriorityBadge } from './PriorityBadge';
import { StatusBadge } from './StatusBadge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TaskTableProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, status: Status) => void;
}

const getNextStatus = (currentStatus: Status): Status | null => {
  switch (currentStatus) {
    case 'new':
      return 'in-progress';
    case 'in-progress':
      return 'completed';
    default:
      return null;
  }
};

function TaskCard({ task, onEdit, onDelete, onUpdateStatus }: { task: Task; onEdit: (task: Task) => void; onDelete: (id: string) => void; onUpdateStatus: (id: string, status: Status) => void }) {
  const nextStatus = getNextStatus(task.status);

  return (
    <div className="bg-card rounded-xl border border-border p-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-foreground">{task.title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => onEdit(task)}>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            {nextStatus && (
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, nextStatus)}>
                <ArrowRight className="h-4 w-4 mr-2" />
                Move to {nextStatus === 'in-progress' ? 'In Progress' : 'Completed'}
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onDelete(task.id)}
              className="text-destructive focus:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {task.description && (
        <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
      )}

      <div className="flex flex-wrap gap-2">
        <PriorityBadge priority={task.priority} />
        <StatusBadge status={task.status} />
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
        <span>{task.assignedTo}</span>
        <span>{format(task.dueDate, 'MMM d, yyyy')}</span>
      </div>
    </div>
  );
}

export function TaskTable({ tasks, onEdit, onDelete, onUpdateStatus }: TaskTableProps) {
  if (tasks.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <p className="text-muted-foreground">No tasks found</p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold">Title</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
              <TableHead className="font-semibold">Priority</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Assigned To</TableHead>
              <TableHead className="font-semibold">Due Date</TableHead>
              <TableHead className="font-semibold w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => {
              const nextStatus = getNextStatus(task.status);
              return (
                <TableRow key={task.id} className="group">
                  <TableCell className="font-medium">{task.title}</TableCell>
                  <TableCell className="text-muted-foreground max-w-[200px] truncate">
                    {task.description || '—'}
                  </TableCell>
                  <TableCell>
                    <PriorityBadge priority={task.priority} />
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={task.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">{task.assignedTo}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {format(task.dueDate, 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => onEdit(task)}>
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        {nextStatus && (
                          <DropdownMenuItem onClick={() => onUpdateStatus(task.id, nextStatus)}>
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Move to {nextStatus === 'in-progress' ? 'In Progress' : 'Completed'}
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => onDelete(task.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
