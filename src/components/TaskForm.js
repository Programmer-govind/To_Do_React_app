import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    addTask({
      id: Date.now(),
      content,
      completed: false,
      priority,
    });
    setContent('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;