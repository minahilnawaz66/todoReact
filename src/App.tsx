import { useState } from 'react';
import './App.css';
import AddTask from './AddTask.tsx';


function App() {
  const [tasks, setTasks] = useState([]);

  // add task
  const addTask = text => setTasks([...tasks, { text }]);

  //remove task
  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index , 1);
    setTasks(newTasks);
  };

  //remove All task
  const removeTaskAll = () => {

    const newTasks = [...tasks];
    while(newTasks.length) {
      newTasks.pop();
    }
    setTasks(newTasks);
  };

  return (
    <>
      <h1>TODO APP</h1>
        <div>
        <AddTask addTask={addTask} />

          {tasks.map((task, index) => (
            <div>
              <span onClick={() => addTask(index)}>
                {task.text}
              </span>
              <button onClick={() => removeTask(index)}>Delete</button>
            </div>
          ))}
        </div>
        <button onClick={() => removeTaskAll()}>Delete All</button>
    </>

  );
}

export default App
