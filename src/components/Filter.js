// filter component responsible for filtering the tasks
import React from 'react';

export default function Filter(props) {

    function change(e) {
      // updating state variable of parent component by using props concept
      props.selectedVal(e.target.id);
    }
    return (
        <div className='row container'>
            <div className='col'>
              <button type="button" className="btn btn-outline-dark btn-md" id='upcoming' onClick={change}>Upcoming</button>
            </div>
            <div className='col-md-auto'>
              <button type="button" className="btn btn-outline-dark btn-md" id='all' onClick={change}>All</button>
            </div>
        </div>
    )
}