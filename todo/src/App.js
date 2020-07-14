import React, { useState, useReducer } from 'react';
import TaskList from './components/TaskList'
import Form from './components/Form'
import { initialTasks, reducer } from "./reducers/taskReducer"
import './App.css'

const App = () => {
  const [newTask, setNewTask] = useState('')
  const [state, dispatch] = useReducer(reducer, initialTasks)
  console.log(state)
  
  const formHandler = e => {
    setNewTask(
      e.target.value
    )
  }

  //Start of Cleanup
  const formSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'FORM_IS_SUBMITTING', payload:newTask})
    setNewTask('')
  }

    const completed = taskId => {
      dispatch({type: 'TASK_IS_COMPLETED', payload: taskId})
    }

  const clearComplete = e => {
    e.preventDefault();
    dispatch({type: 'TASKS_ARE_CLEARED'})
  }
//End of Cleanup


    return (
      <div className='App-Container'>
        <h1>What do we have to do today?</h1>
        <Form
        className='form' 
        task={newTask}
        onChange={formHandler}
        onSubmit={formSubmit}
        clearTasks={clearComplete}
        />
        <TaskList 
        tasks={state}
        toggle={completed}/>
      </div>
    );
}

export default App;