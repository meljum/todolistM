import './CreateTodo.css'

const CreateTodo = () => {
  return (
    <div className="wrapper">
      <input type="text" placeholder="Enter todo" />
      <button>+Create</button>
    </div>
  );
};

export default CreateTodo;
