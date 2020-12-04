import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'; 

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }
    addTodo(todo){
        this.setState({
            todos:[...this.state.todos, todo]
        });
    }
    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }
    updateTodo(id, updatedTodo){
        const updatedTodos = this.state.todos.map(t => {
            if(t.id === id){
                return {...t, todo:updatedTodo}
            }
            return t;
        })
        this.setState({todos:updatedTodos});
    }
    toggleTodo(id){
        const updatedTodos = this.state.todos.map(t => {
            if(t.id === id){
                return {...t, completed: !t.completed}
            }
            return t;
        })
        this.setState({todos:updatedTodos});
    }
    render(){
        return (
            <div className="TodoList">
                <h1>Todo List 
                    <span>A Simple React Todo List App.</span>
                </h1>
                <ul>
                    {this.state.todos.map(({todo, id, completed}) => {
                        return <Todo 
                            key={id} 
                            id={id} 
                            todo={todo}
                            removeTodo={this.removeTodo}
                            updateTodo={this.updateTodo}
                            toggleTodo={this.toggleTodo}
                            completed={completed}
                        />
                    })}
                </ul>
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList;