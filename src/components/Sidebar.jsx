import { NavLink } from "react-router-dom"

export default function Sidebar(props){
    return (
<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px", minHeight: '100vh'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <h1 className="fs-4 nav-heading">To-do App</h1>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <NavLink to="/"  className="nav-link line-dark">
          Todos
        </NavLink>
      </li>
    </ul>
  </div>

    )
}