import React, { useState } from 'react';
import Task from './Task';  
import "./index.css";  
import Button from '@material-ui/core/Button';
const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [newtask, setTask] = useState([]);
  const itemEvent = (event) => {
    setinputlist(event.target.value);
  }
  const updateList = () => {
    setTask((oldlist) => { 
      if(oldlist.length>=10) 
      prompt("Buy Subscription");
      else
      return ([...oldlist, inputlist])
    })
    setinputlist("");

  }
  const deleteList = (id) => {
    setTask((oldlist)=>{
      return oldlist.filter( (item,index) =>{
         return index!==id;
      })
    }

    )
  }
  return (<>
    <div className='todoframe'>
      <div className='todolist'>
        <h1 className='heading'>Todolist</h1>
        <input placeholder='Enter' onChange={itemEvent} value={inputlist}></input>

        <Button className="additem" onClick={updateList}>+</Button>
        <ol>
          {newtask.map((value, index) => {
            return <Task
              key={index} target={value}
              id={index}
              onSelect={deleteList}
            >
            </Task>
          })
          }
        </ol>
      </div>
    </div>
  </>
  );
}
export default App;