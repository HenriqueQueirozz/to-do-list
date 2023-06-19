import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  const handleTaskClick = (taskid) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskid){
        return {
          ... task,
          completed: !task.completed
        }
      }

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskid) => {
    const newTasks = tasks.filter(task => task.id !== taskid);

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={
              <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
            }
          />
          <Route path="/:taskTitle" exact Component={TaskDetails}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
