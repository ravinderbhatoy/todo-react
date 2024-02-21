export default function Todos(prop) {
  let todos;
  if (prop.todos) {
    todos = prop.todos.map((todo) => (
      <li key={todo.id} className="list-group-item">
        <input className="form-check-input me-1" onChange={()=>prop.handleComplete(todo.id)} checked={todo.isDone} type="checkbox" id={todo.id} />
        <label className="form-check-label " htmlFor={todo.id} style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>
          {todo.text}
        </label>
      <div className="todo-icons">
        <svg
          onClick={() => prop.editTodo(todo.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="green"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-pen-line"
        ><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
        </svg>

        <svg
          onClick={() => prop.deleteTodo(todo.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="tomato"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trash-2"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </div>
      </li>
    ));
  }
  if(todos.length === 0){
    todos=[<h3>No todos to display</h3>]
  }

  return (
    <div className="todos-contanier">
      <form onSubmit={prop.handleSubmit} className="row g-3">
        <div className="col-auto">
          <input
            autoComplete="off"
            onChange={(e) => prop.setCurrentTodo(e.target.value)}
            type="text"
            value={prop.text ? prop.text : prop.currentTodo}
            className="form-control"
            id="inputPassword2"
            placeholder="Enter to do..."
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
      <ul className="list-group">{todos}</ul>
    </div>
  );
}

// <li className="list-group-item">
//     <input className="form-check-input me-1" type="checkbox" value="" id="first"/>
//     <label className="form-check-label stretched-link" htmlFor="first">First checkbox</label>
// </li>
