import { ClipboardList, CheckCircle2, Clock } from 'lucide-react';
import { useTasks } from '@/context/TaskContext';
import { SummaryCard } from '@/components/dashboard/SummaryCard';
import { TaskTable } from '@/components/tasks/TaskTable';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { tasks, deleteTask, updateStatus } = useTasks();
  const navigate = useNavigate();

  const activeTasks = tasks.filter((t) => !t.isDeleted);
  const completedTasks = activeTasks.filter((t) => t.status === 'completed');
  const pendingTasks = activeTasks.filter((t) => t.status !== 'completed');
  const recentTasks = activeTasks.slice(0, 5);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-sm sm:text-base">Overview of your tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Tasks"
          value={activeTasks.length}
          icon={ClipboardList}
          variant="default"
        />
        <SummaryCard
          title="Completed"
          value={completedTasks.length}
          icon={CheckCircle2}
          variant="success"
        />
        <SummaryCard
          title="Pending"
          value={pendingTasks.length}
          icon={Clock}
          variant="warning"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Tasks</h2>
          <button
            onClick={() => navigate('/tasks')}
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all
          </button>
        </div>
        <TaskTable
          tasks={recentTasks}
          onEdit={(task) => navigate(`/tasks/${task.id}/edit`)}
          onDelete={deleteTask}
          onUpdateStatus={updateStatus}
        />
      </div>
    </div>
  );
}
