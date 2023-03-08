import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }

    // props.onAddTodo(enteredText);
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">
        Todo
        <input type="text" id="text" ref={todoTextInputRef} />
      </label>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
