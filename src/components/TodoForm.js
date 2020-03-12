import React from 'react'
import { render } from '@testing-library/react'

class TodoForm extends React.Component {

    constructor(){
        super()
        this.state = {
            taskName: ''
        }
    }

    handleChange = e => {
        this.setState({ taskName : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTask(this.state.taskName)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input
                    type='text'
                    name='add'
                    placeholder='new task...'
                    value={this.state.taskName}
                    onChange={this.handleChange} />

                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
  
}

export default TodoForm