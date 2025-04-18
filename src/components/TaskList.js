import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                style={{ marginRight: '10px' }}
              />
              <span>{task.content} <span style={{ fontSize: '0.9rem', color: '#888' }}>({task.priority})</span></span>
            </div>
            <div>
              <button onClick={() => deleteTask(task.id)} style={{ marginRight: '5px' }}>Delete</button>
              <button onClick={() => {
                const updatedContent = prompt('Edit task:', task.content);
                if (updatedContent) editTask(task.id, updatedContent);
              }}>Edit</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;