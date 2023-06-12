import React from "react";
import style from "./TodoItem.module.css"

function TodoItem(props){
    const handleInputCheckbox = function(event){
        let checkbox = event.target;
        let itemDescription = document.querySelector('#item_'+props.id + " > .todo_item_desc");
        if (checkbox.checked === true){
           itemDescription.classList.add(style.checked_item)
        }else{
            itemDescription.classList.remove(style.checked_item)
        }
    }
    const handleRemoveItem = function(event){
        // alert("remove item")
        let todoItem = document.getElementById('item_'+props.id)
        todoItem.parentNode.removeChild(todoItem);
    }
    return(
        <td className={style.todo_item} id={"item_"+props.id}>
            <input type="checkbox" onChange={handleInputCheckbox}/>
            <div className="todo_item_desc">{props.description}</div>
            <div className={style.remove_item} onClick={handleRemoveItem}>
                &times;
            </div>
        </td>
    )
}

export default TodoItem