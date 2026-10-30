import { useState } from 'react';
import { TaskBoard } from './TaskBoard';
import type { Task } from './types';

function App() {
  const [tasks, _setTasks] = useState<Task[]>([
    { id: 1, title: 'Сделать практическую работу', isCompleted: true },
    { id: 2, title: 'Выучить TypeScript', isCompleted: false },
    { id: 3, title: 'Погулять', isCompleted: false },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Мой Таскборд</h1>
      
      <TaskBoard tasks={tasks} />

    </div>
  );
}

export default App;