import { Component } from "react";
import Navbar from "../Navbar";
import TodoItem from "../TodoItem"
import {v4} from "uuid"
import "./index.css"

class Todo extends Component{
    state={todoList:[],todoTitle:"",description:""}

    onTodoFormSubmit=event=>{
        event.preventDefault()
        const {todoTitle,description}=this.state
        const newTodoItem={
            id:v4(),
            title:todoTitle,
            description:description
        }
        this.setState(prevState=>({todoList:[...prevState.todoList,newTodoItem],todoTitle:"",description:""}))
    }
    onTodoTitleChange=event=>{
        this.setState({todoTitle:event.target.value})
    }
    onDescriptionChange=event=>{
        this.setState({description:event.target.value})
    }

    displayNoTodosView=()=>(
        <div className="no-todo-view-container">
            <h1>Todo List Empty</h1>
        </div>
    )
    removeTodoItem=id=>{
        const {todoList}=this.state
        const updatedTodoList=todoList.filter(eachItem=>eachItem.id!==id)
        this.setState({todoList:updatedTodoList})
    }

    displayTodoItems=()=>{
        const {todoList}=this.state
        return(
        <div className="todos">
            <h1 className="todo-list-heading">Todo List Items</h1>
            <ul className="todo-list-container">
                {todoList.map(eachTodo=><TodoItem key={eachTodo.id} todo={eachTodo} removeTodoItem={this.removeTodoItem}/>)}
            </ul>

        </div>
        )
    }

    

    render(){
        const {todoTitle,todoList,description}=this.state
        return(
            <div className="todo-page">
                <Navbar/>
                <div className="todo-body-page">
                    <div className="todo-container">
                        <form className="todo-form" onSubmit={this.onTodoFormSubmit}>
                            <div className="app-heading-container">
                            <h1 className="app-heading">Todo App</h1>
                            </div>
                        <input className="input-element"
                                value={todoTitle}
                                placeholder="Todo Title"
                                onChange={this.onTodoTitleChange}
                                required />
                        <textarea className="textarea-element"
                            placeholder="Enter Todo Description"
                            value={description}
                            onChange={this.onDescriptionChange}
                            required>

                        </textarea>
                        <button className="add-btn" type="submit">Add</button>
                        </form>
                        {todoList.length===0?this.displayNoTodosView():this.displayTodoItems()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Todo