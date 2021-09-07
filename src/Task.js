import React from 'react';  
// import IconButton from '@material-ui/core/IconButton';
import './index.css'
const Task = (props) => {
  return (<>
    <div className='todostyle'>
      <h4>
        <button className="delitem" onClick={() => {
          props.onSelect(props.id)
        }}>X</button> 
        {props.target} </h4>
    </div>
  </>
  );
}
export default Task;