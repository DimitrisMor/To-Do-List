import React, { useState } from 'react';
import '../plan.css';
import {FiEdit} from 'react-icons/fi'
import {MdDeleteForever} from 'react-icons/md'


function Plan(props) {
  const [todo, setTodo] = useState(props.text);
  const[check,setCheck]=useState(true);
  const [editMode, setEditMode]=useState(false);
  const [active, setActive]=useState(true);

  function done(){
    setActive(!active);
  }

  function edit(){
    setEditMode(true);
  }

  function makeChanges(e){
    setEditMode(false);
  }

  function del(){
    setCheck(false);
  }

  return (
    <div>
    {editMode?<>
      <div className='planContainer'>        
        <p id='planText'><input required id='editInput' onChange={(e)=>setTodo(e.target.value)}  ></input></p>
        <button id='doneButton' onClick={makeChanges}>Done</button>        
      </div></>
      :<>{check?<>
          <div className={active?'planContainer': 'planContainerDone'} onClick={done}>        
            <p id='planText'>{todo}</p>
            <div id='planButtons'>
              <span  onClick={edit}><FiEdit id='editButton'/></span>
              <span onClick={del}><MdDeleteForever id='deleteButton'/></span>
            </div>
          </div></>:<></>}</>}
    </div>
  )
}

export default Plan