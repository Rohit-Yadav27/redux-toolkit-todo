import { useSelector } from "react-redux";
import { Form } from "./todoForm";
import { deleteTodo, marksAsDone } from "../features/Todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markHandler = (id, isDone) => {
    dispatch(marksAsDone(id));
  };

  return (
    <>
      <Form />
      <h2>The Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
          >
            {todo.task}
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            <button onClick={() => markHandler(todo.id, todo.isDone)}>
              Mark isDone
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
