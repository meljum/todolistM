import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import TodoItem from "./components/todo-item/TodoItem";
import { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    { id: 111, text: "Купить хлеб", status: true },
    { id: 2, text: "Купить сок", status: true },
    { id: 3, text: "Купить соду", status: false },
    { id: 4, text: "Сделать проект на react.js", status: false },
  ]);
  console.log(arr);
  // const arr = [
  //   { text: "Купить хлеб", status: true },
  //   { text: "Купить сок", status: true },
  //   { text: "Купить соду", status: false },
  //   { text: "Сделать проект на react.js", status: false },
  // ]
  const result = arr.reduce((acc, item) => {
    return acc + Number(item.status);
  }, 0);

  const handleAddTodo = (newText) => {
    // arr.push({ text: "Купить сок", status: false })
    setArr([ ...arr, { text: newText, status: false, id: Date.now() } ])
  }

  const handleDeletTodo = (id) => {
    alert("Delete from App" + id)
    // Code here

  }
  const newArr = arr.map((item) => {
    return <TodoItem handleDelete={handleDeletTodo} id={item.id} text={item.text} status={item.status} />;
  });
  return (
    <div className="App">
      <Header length={arr.length} result={result} />
      <div className="content">
        <CreateTodo addNewTodo={handleAddTodo} />
        <div className="todos-wrapper">
          {/* TodoItem({ text: "Купить соль", status=false }) */}
          {/* <TodoItem text="Купить соль" status={false} />  */}
          {newArr}
        </div>
      </div>
    </div>
  );
}

export default App;
