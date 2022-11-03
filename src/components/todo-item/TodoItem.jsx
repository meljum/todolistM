
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../../state/todoSlice";
import css from "./TodoItem.module.css";

const TodoItem = (props) => {
  // props ===  { text: "", status: false, handleDelete(), id: 1, handleStatus() }
  const [isInputShow, setInputShow ] = useState(false)
  const [inputValue, setInputValue] = useState(props.text);
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(todoSliceActions.deleteTodo(props.id))
    // props.handleDelete(props.id);
  };
  const handleStatus = () => {
    dispatch(todoSliceActions.changeStatus(props.id))
  }
   const onEdit = () => {
    //  dispatch(todoSliceActions.onEdit())
    setInputShow(!isInputShow)
  };

  const handleinputChange = (e) => {
    setInputValue(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    // props.handleEdit(props.id, inputValue)
    dispatch(todoSliceActions.editTodo({id:props.id, newText:inputValue}))
    setInputShow(false)
  }
  return (
    <div className={css.wrapper}>
      {isInputShow ? (
        <form onSubmit={submit}>
          <input autoFocus onChange={handleinputChange} value={inputValue} type="text" placeholder="Todo" />
          <button>Save</button>
        </form>
      ) : (
        <label>
          <input
            onChange={handleStatus}
            type="checkbox"
            checked={props.status}
          />
          <span className={props.status === true ? css.text : ""}>
            {props.text}
          </span>
        </label>
      )}
     
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Del</button>
      </div>
    </div>
  );
};

export default TodoItem;
