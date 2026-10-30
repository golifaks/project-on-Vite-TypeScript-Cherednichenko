import type { Task } from './types';
import { TaskItem } from './TaskItem';


interface TaskBoardProps {
  tasks: Task[];
}

export const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Задач нет</p>;
  }

  return (
    <div>
      <h2>Список задач:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};