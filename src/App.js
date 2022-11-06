import React, { useState } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Task from './components/Task';
import './App.css';

export default function App() {
  // declaration of react state hook variables
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  let [filterText, updateFilterText] = useState("all");
  const [task, setTask] = useState(useBrowserStorage);

  //using broswer local storage
  localStorage.setItem("tasks", JSON.stringify(task));
  
  let filteredTasks = filterText === "all" ? task : task.sort((x, y) => new Date(x.stamp) - new Date(y.stamp)).slice(0, 3);

  // updating state variable filter 
  function onFilter(val) {
    updateFilterText(val);
  }

  return (
    <div className="main container">
      <div className="row">
        <div className="col-md-8">
          <h2 className='text-center'>Task Creator</h2>
          {/* form component renderering by passing state variables as props */}
          <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} date={date} setDate={setDate} time={time} setTime={setTime} task={task} setTask={setTask}/>
        </div>
        <div className="col-md-4">
          {/* rendering filter component by passing state variable as props */}
          <Filter selectedVal={onFilter} />
          <br />
          {/* conditional rendering of created tasks */}
          {
            (task.length===0)?<div className="card">
              <div className="card-body">
                No tasks to show
              </div>
            </div> : <div className='max-div'>
                      {
                          filteredTasks.map((ele) => {
                            return (
                            // rendering task component by passing a task object as prop
                            <Task key={ele.stamp} ele={ele}/>
                          )
                        })
                      }
            </div>
          }
        </div>
      </div>
    </div>
  );

  // function that make use of browser local storage
  function useBrowserStorage() {
    const task = JSON.parse(localStorage.getItem("tasks"));
    if (task) {
      return task;
    }
    else {
      return [];
    }
  }
}
