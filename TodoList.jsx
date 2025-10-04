import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"Sample list" , id:uuidv4() , isDone:false}])
    let[newtodo,setNewTodo]=useState([""])

    let addnewlist=() => {
        setTodos([...todos,{ task:newtodo, id:uuidv4() , isDone:false}]);
        setNewTodo("");
    }

    let updatetodolist=(event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let deletetodos=(id) => {
        // setTodos((prevesTodo) => todos.filter((prevTodo) => prevesTodo.id != id));
        // console.log("todos deleted");
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let MarkDoneall= () => {
        setTodos(todos.map((todo) => {
        return{
            ...todo,
            // task:todo.task.toUpperCase(),
            isDone:true,
        };
         
       }));
    }

     let Markasdone= (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id==id){
                return{
                    ...todo,
                    // task:todo.task.toUpperCase(),
                    isDone:true,
                };
            }else{
                return todo;
            }
       }));
    }



    return(
        <div>
            <input placeholder="Add to do task" value={newtodo} onChange={updatetodolist} ></input>
            <br></br>
            <br></br>
            <button onClick={addnewlist}>Add list </button>
            <br></br><br></br>
            <hr></hr>
            <h3> To do list </h3>
            <ul>
                {
                todos.map((todo) => {
                    return <li key={todo.id}>
                        <span style={todo.isDone ? {color:"red"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={ () => deletetodos(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                         <button onClick={ () =>  Markasdone(todo.id)}>Mark as Done</button>
                    </li>;
                    console.log(todo);
                })
            }
            </ul>
            <br/><br/>
            <button onClick={MarkDoneall}>Mark Done All</button>
        </div>
    )
}


