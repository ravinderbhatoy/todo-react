import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Sidebar from "./components/Sidebar";
import Todos from "./components/Todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [allTodo, setAllTodo] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );

  useEffect(() => {
    updateLocal();
  }, [allTodo]);

  const [currentTodo, setCurrentTodo] = useState("");

  function updateLocal() {
    localStorage.setItem("todos", JSON.stringify(allTodo));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentTodo === "") {
      return;
    }
    const todo = {
      id: nanoid(),
      text: currentTodo,
      isDone: false,
    };
    setAllTodo((oldState) => {
      let updatedTodos;
      if (oldState) {
        updatedTodos = [...oldState, todo];
      } else {
        updatedTodos = [todo];
      }
      return updatedTodos;
    });

    setCurrentTodo("");
  }

  function handleComplete(id){
    let todos = [...allTodo]
    todos.forEach((todo, index)=>{
      if(todo.id===id){
        todos[index] = {
          ...todo,
          isDone: !todo.isDone
        }
      }
    })
    setAllTodo(todos)
  }

  function deleteTodo(id) {
    setAllTodo((oldTodo) => oldTodo.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    let todoToEdit = allTodo.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit.text)
    deleteTodo(id)
  }

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Sidebar />
          <Todos
            todos={allTodo}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            handleSubmit={handleSubmit}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            handleComplete={handleComplete}
          ></Todos>
        </>
      ),
    }
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
