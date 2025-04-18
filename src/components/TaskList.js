import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span>{task.content}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => {
            const updatedContent = prompt('Edit task:', task.content);
            if (updatedContent) editTask(task.id, updatedContent);
          }}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;