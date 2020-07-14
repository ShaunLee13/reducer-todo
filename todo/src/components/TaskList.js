import React from 'react';
import Task from './Task'

const TaskList = props => {
    const { tasks, toggle } = props
    console.log(tasks)

        return(
            <div>
                {tasks.map(task => (
                    <Task 
                    key={task.id} 
                    task={task.task}
                    id={task.id}
                    completed={task.completed}
                    toggle={toggle}/>
                    ))}
            </div>
        )
    }

export default TaskList