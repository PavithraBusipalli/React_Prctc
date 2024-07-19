import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTask() {
        setTasks(c => [...c, newTask]);
    }

    function DeleteTask(index) {
        setTasks(tasks.filter((val, ind) => ind != index))
    }

    function MoveTaskUp(index) {
        let movetask = tasks.splice(index, 1);
        setTasks(c => [movetask, ...c]);
        console.log(tasks);q
    }

    function MoveTaskDown(index) {
        let movetask = tasks.splice(index, 1);
        setTasks(c => [...c, movetask]);
        console.log(tasks);
    }

  return (
    <div>
        <center>
            <h2>To-Do List</h2>
            <input type='text' value={newTask} onChange={handleInputChange} placeholder='Enter your task...' id='input' />
            <button onClick={AddTask}>Add</button>
        </center>
        <ol>
        {/* 👆 👇*/}
            {
                tasks.map((val, ind) => 
                    
                        <li key={ind}>{val}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => DeleteTask(ind)}>❌</button> &nbsp;
                        <button onClick={() => MoveTaskUp(ind)}>⬆️</button> &nbsp;
                        <button onClick={() => MoveTaskDown(ind)}>⬇️</button>
                        <br/><br/>
                        </li>       
                )
            }
        </ol>
    </div>
  )
}

export default ToDoList
