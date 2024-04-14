import React,{useState} from "react";

function ToDoList(){

    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState('');

    //change event....
    function addTask(event){
        setNewTask(event.target.value)
    }

    function  addToList(){
        if(newTask.trim() == '') return 
        setTasks(prevTasks=>[...prevTasks,newTask]);
        setNewTask('')
    }

    function removeTask(index){
        setTasks(prevTasks=> prevTasks.filter((_,i)=>i!==index))
    }

    function moveUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function moveDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }
    return (
        <div className="to_do_list">
            <h1>TO DO LIST</h1>
            <input type="text"
                    value={newTask}
                    placeholder='Enter the task'
                    onChange={addTask} />
            <button onClick={addToList}>Add to List</button>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index} className="list_item">
                        <span>{task}</span>
                        <button className="delete_button" onClick={()=>removeTask(index)}>Delete</button>
                        <button className="change_button" onClick={()=>moveUp(index)}>UP</button>
                        <button className="change_button" onClick={()=>moveDown(index)}>DOWN</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;