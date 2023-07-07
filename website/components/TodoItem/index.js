import {AiOutlineCloseCircle} from "react-icons/ai"
import "./index.css"
const TodoItem=props=>{
    const {todo,removeTodoItem}=props
    const {id,title,description}=todo
    const clickOnRemove=()=>{
        removeTodoItem(id)
    }
    return(
        <li className="todo-list-item">
            <div className="title-description-container">
            <h1 className="todo-title-heading">{title}</h1>
            <p>{description}</p>
            </div>
            <div>
                <button className="remove-todo-button" onClick={clickOnRemove}>
                    <AiOutlineCloseCircle className="remove-icon"/>
                </button>
            </div>
        </li>
    )
}
export default TodoItem