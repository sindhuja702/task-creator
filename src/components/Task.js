// task component
import React from 'react';

export default function Task({ele}) {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-body row">
          <div className='col'>
            {ele.title}
          </div>
          <div className='col-md-auto'>
            <small>{ele.time} | {ele.date}</small>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}
