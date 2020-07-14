  
import React from 'react';

const Form = props => {
    const {
        onSubmit,
        value,
        onChange,
        clearTasks
    } = props

        return(
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <input 
                    type= 'text'
                    name='task'
                    value={value}
                    onChange={onChange}
                    placeholder="What's next?"/>
                    <button>Add Task</button>
                </form>

                <button
                className='clear'
                onClick={clearTasks}>Clear Completed</button>
            </div>
        )
    }


export default Form