import React, { Component } from 'react'
import { getTodos, postTodo, completeTodo } from '../api-utils.js'
import '../App.css';
export default class TodosListPage extends Component {
  state = {
    todos: [],
    todo: ''
  }

  componentDidMount = async () => {
    await this.fetchTodos();
  }

  handleTodo = e => this.setState({ todo: e.target.value })

  handleSubmit = async e => {
    e.preventDefault();

    await postTodo(this.state.todo, this.props.user.token);
    await this.fetchTodos();

    this.setState({ todo: '' })
  }

  fetchTodos = async () => {
    const todos = await getTodos(this.props.user.token);
    this.setState({ todos: todos });
  }

  handleComplete = async (todoId) => {
    await completeTodo(todoId, this.props.user.token);
    this.fetchTodos();
  }

  render() {
    console.log(this.state.todo);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todo} onChange={this.handleTodo}/>
          <button>Add to To Do List</button>
        </form>

        {!this.state.todos.length && <p>Nothing Here</p>}
        {this.state.todos.map(todo => 
          <p
          key={`${todo.id}`} 
          onClick={() => this.handleComplete(todo.id)}>
            { todo.todo } : 
            {todo.completed ? 'okay' : ' not done'}
          </p>
        )}

      </div>
    )
  }
}
