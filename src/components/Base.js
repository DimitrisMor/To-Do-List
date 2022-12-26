import React, { Component, useState } from 'react'
import '../base.css'
import Plan from './Plan';


function Base() {
    const [text, setText]=useState("");
    const [plans, setPlans]=useState([]);
    const [number, setNumber]=useState(0);

    function addNewPlan(){
        plans.unshift({id:number, plan:text});
        setNumber(number+1);
    }

  return (
    <div className='baseContainer'>
        <h4 id='header'>Any plans..?</h4>
        <div>
            <input id='input'
                   value={plans.text}
                   placeholder=''
                   onChange={(e)=>setText(e.target.value)}></input>
            <button id='addbutton'
                    type='submit'
                    onClick={addNewPlan}>Add</button>
        </div>   
        {plans.map((plan)=>{
          return <div key={plan.id}><Plan text={plan.plan}/></div> 
        })}
      </div>
  )
}

export default Base