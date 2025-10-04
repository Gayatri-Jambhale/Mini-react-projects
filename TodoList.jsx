import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample list", id: uuidv4(), isDone: false },
  ]);
  let [newtodo, setNewTodo] = useState("");

  let addnewlist = () => {
    if (newtodo.trim() === "") return;
    setTodos([...todos, { task: newtodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let updatetodolist = (event) => {
    setNewTodo(event.target.value);
  };

  let deletetodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let MarkDoneall = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let Markasdone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow-lg bg-light" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4 text-primary">📝 To-Do List</h2>

      <div className="input-group mb-3">
        <input
          placeholder="Add a new task"
          value={newtodo}
          onChange={updatetodolist}
          className="form-control"
        />
        <button onClick={addnewlist} className="btn btn-success">
          Add
        </button>
      </div>

      <hr />

      <h5 className="text-secondary">Your Tasks:</h5>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              style={todo.isDone ? { textDecoration: "line-through", color: "gray" } : {}}
            >
              {todo.task}
            </span>
            <div>
              <button
                onClick={() => Markasdone(todo.id)}
                className="btn btn-sm btn-outline-primary me-2"
                disabled={todo.isDone}
              >
                Done
              </button>
              <button
                onClick={() => deletetodos(todo.id)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center mt-4">
        <button onClick={MarkDoneall} className="btn btn-warning">
          Mark All as Done
        </button>
      </div>
    </div>
  );
}
