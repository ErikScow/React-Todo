import React from 'react'

//importing components
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      todoItems: [{
        task: 'Add Task To Todo List!',
        id: 1528817084358,
        completed: false
      }]
    }
  }

  toggleCompleted = taskId => {
    this.setState({
      todoItems: this.state.todoItems.map(task => {
        if (task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  addTask = taskName => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <h3>ToDo:</h3>
        <TodoList 
          todoItems={this.state.todoItems}k
          toggleCompleted={this.toggleCompleted} 
        />
        
      </div>
    );
  }
}

export default App
