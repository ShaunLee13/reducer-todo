import React from 'react'

const Task = props => {
    const {task, 
        completed, 
        toggle, 
        id
    } = props

    console.log(task)
    return(
        <div
        className={`task${completed ? ' complete' : ''}`}
        onClick={() => toggle(id)}>
            <p>{task}</p>
        </div>
    )
}

export default Task