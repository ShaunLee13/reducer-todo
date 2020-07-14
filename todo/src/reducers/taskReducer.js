export const initialTasks = [{
    id:12345,
    task: 'Learn Redux',
    completed: false
  }]

  export const reducer = (state, action) => {
    switch (action.type) {
        case 'FORM_IS_SUBMITTING':
            const entry = {
                id: Date.now(),
                task: action.payload,
                completed: false
            }
            return [...state,
                entry]
            
        case 'TASK_IS_COMPLETED':
            return state.map(task => {
                console.log(task)
                if (task.id === action.payload) {
                    console.log('reaching return statement')
                  return {
                    ...task,
                    completed: !task.completed
                  };
                }
                return task
              })
        case 'TASKS_ARE_CLEARED':
            return state.filter(task => !task.completed)
      default:
        return state;
    }
  };