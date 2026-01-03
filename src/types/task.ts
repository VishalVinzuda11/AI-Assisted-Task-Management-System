export type Priority = 'low' | 'medium' | 'high';
export type Status = 'new' | 'in-progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  assignedTo: string;
  dueDate: Date;
  createdAt: Date;
  isDeleted: boolean;
}
