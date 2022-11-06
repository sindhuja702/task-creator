// form component used to take user data and update the state variables 
import React from 'react';

export default function Form({ title, setTitle, desc, setDesc, time, setTime, date, setDate, task, setTask }) {
  // taking inputs from user and updating those values with state varibales
  const inputHandler = (e) => {
    if (e.target.id === "title") {
        setTitle(e.target.value)
    }
    else if(e.target.id === "time") {
        setTime(e.target.value)
    }
    else if(e.target.id === "desc"){
        setDesc(e.target.value)
    }
    else {
        setDate(e.target.value)
    } 
}
  //updating state variable task by adding new task object contains data entered by user    
  const addTaskHandler = (e)=>{
      e.preventDefault();
      if (title && date && time) {
        setTask((task)=>{
            return(
                [...task,{
                    title:title,
                    desc: desc,
                    date: date,
                    time: time,
                    stamp: new Date(date+' '+time)
                }]
            )
        })
        //making form inputs to default empty
          setTitle("");
          setDesc("");
          setDate("");
          setTime("");
    }
    }
    
    return (
        <>
            {/* task name */}
            <div className='row'>
                <div className="form-group col-lg-9">
                    <label>Task Name</label>
                    {/* two binding concept using for using form values */}
                    <input type="text" className="form-control" id="title" value={title} onChange={inputHandler}/>
                </div>
            </div>
            <br/>
            {/* task description */}
            <div className='row'>
                <div className="form-group col-lg-9">
                    <label>Task Description(optional)</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={inputHandler}/>
                </div>
            </div>
            <br/>
            <div className='row'>
                {/* task date */}
                <div className='col-md-3'>
                    <div className="form-group">
                      <input type="date" className="form-control" id="date" value={date} onChange={inputHandler}/>
                    </div>
                </div>
                {/* task time */}
                <div className='col-md-3'>
                    <div className="form-group">
                        <input type="time" className="form-control" id="time" value={time} onChange={inputHandler}/>
                    </div>
                </div>
                {/* create button */}
                <div className='col-md-3'>
                    <button type="button" className="btn btn-primary" onClick={addTaskHandler}>Create Task</button>
                </div>
            </div>
        </>
  );
}
