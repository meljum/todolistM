import { useState } from "react";
import { useDispatch } from "react-redux";
import "./CreateTodo.css";
import { todoSliceActions } from "../../state/todoSlice";

// const input = document.getElementById("inp")

// input.addEventListener('change', (event) => {
//   console.log("asfag");
// })

const CreateTodo = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  
  const submit = (event) => {
    event.preventDefault();
    dispatch(todoSliceActions.addTodo(value));
    // props.addNewTodo(value);
    setValue("")
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submit} className="wrapper">
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo"
        autoFocus
      />
      <button>+Create</button>
    </form>
  );
};

export default CreateTodo;
