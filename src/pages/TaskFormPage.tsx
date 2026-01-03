import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTasks } from '@/context/TaskContext';
import { TaskForm } from '@/components/tasks/TaskForm';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function TaskFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addTask, updateTask, getTaskById } = useTasks();
  const { toast } = useToast();

  const isEditing = Boolean(id);
  const task = id ? getTaskById(id) : undefined;

  if (isEditing && !task) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-muted-foreground mb-4">Task not found</p>
        <Button variant="outline" onClick={() => navigate('/tasks')}>
          Back to Tasks
        </Button>
      </div>
    );
  }

  const handleSubmit = (data: {
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'new' | 'in-progress' | 'completed';
    assignedTo: string;
    dueDate: Date;
  }) => {
    if (isEditing && id) {
      updateTask(id, data);
      toast({
        title: 'Task updated',
        description: 'Your task has been updated successfully.',
      });
    } else {
      addTask(data);
      toast({
        title: 'Task created',
        description: 'Your new task has been created successfully.',
      });
    }
    navigate('/tasks');
  };

  return (
    <div className="max-w-2xl animate-fade-in">
      <Button
        variant="ghost"
        className="mb-6 -ml-2"
        onClick={() => navigate('/tasks')}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Tasks
      </Button>

      <div className="bg-card rounded-xl border border-border p-6">
        <h1 className="text-xl font-semibold text-foreground mb-6">
          {isEditing ? 'Edit Task' : 'Create New Task'}
        </h1>
        <TaskForm
          task={task}
          onSubmit={handleSubmit}
          onCancel={() => navigate('/tasks')}
        />
      </div>
    </div>
  );
}
