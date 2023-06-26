import React, {useState} from "react";
import TodoItem from "./TodoItem";

function Todo(){
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleInputTaskChange = function(event){
        setTask(event.target.value)
        // console.log(event)
    }

    const handleFormSubmit = function(event){
        event.preventDefault()
        if(task.trim){
            setTasks([...tasks, task])
            setTask('')
        }
    }

    return(
       <>
            <form onSubmit={handleFormSubmit}>
                <input 
                    onChange={handleInputTaskChange} 
                    type="text"
                    data-testid="inputTask"
                    value={task} 
                />
                <button data-testid="btnTask">Adicionar nova tarefa</button>
            </form>
            
            <table>
                <thead>
                    <tr key="task">
                        <th>Tarefas</th>
                    </tr> 
                </thead>
                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index}>
                            <TodoItem description={t} id={index}/>
                        </tr>
                    ))}
                </tbody>
            </table>
       </>
    )
}

export default Todo