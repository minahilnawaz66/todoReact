import React, { useState } from 'react';

// Task component to display individual tasks
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
	      {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

// TodoList component to manage the list of tasks
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputText, completed: false }]);
      setInputText('');
    }
  };

  // Function to handle marking a task as completed
  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      ))}
    </div>
  );
};

export default TodoList;