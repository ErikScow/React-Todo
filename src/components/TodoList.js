import React from 'react'

import Todo from './Todo'

const TodoList = props => {
    console.log(props.toggleCompleted)
    return(
        <div>
            {props.todoItems.map(task => (
                <Todo
                    key={task.id}
                    task={task}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    )
}

export default TodoList