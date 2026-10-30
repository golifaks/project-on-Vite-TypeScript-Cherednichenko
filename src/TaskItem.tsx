import type { Task } from './types';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li
      style={{
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? 'gray' : 'white',
        marginBottom: '8px',
      }}
    >
      {task.title}
    </li>
  );
};