import css from "./TodoItem.module.css";

const TodoItem = (props) => {
  // props ===  { text: "", status: false, handleDelete(), id: 1 }
  
  const onDelete = () => {
    props.handleDelete(props.id)
  }
  return (
    <div className={css.wrapper}>
      <label>
        <input type="checkbox" checked={props.status} />
        <span className={props.status === true ? css.text : ""}>
          {props.text}
        </span>
      </label>
      <div>
        <button>Edit</button>
        <button onClick={onDelete} >Del</button>
      </div>
    </div>
  );
};

export default TodoItem;
