import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import TodoItem from "./components/todo-item/TodoItem";
import { useEffect, useState } from "react";

function App() {
  let [arr, setArr] = useState( JSON.parse(localStorage.getItem('todo')) || [] );

  useEffect(() => {
    console.log("State Arr is changed");
    localStorage.setItem("todo", JSON.stringify(arr))
  }, [arr]);

  const result = arr.reduce((acc, item) => {
    return acc + Number(item.status);
  }, 0);

  const handleAddTodo = (newText) => {
    // arr.push({ text: "Купить сок", status: false })
    setArr([...arr, { text: newText, status: false, id: Date.now() }]);
  };

  const handleDeletTodo = (id) => {
    console.log(arr);
    const newArr = arr.filter((item) => {
      return item.id !== id;
    });
    console.log(newArr);
    setArr(newArr);
  };

  const handleStatus = (id) => {
    const newArr = arr.map( (item) => {
      if(item.id === id) {
        return { ...item, status: !item.status}  
      }
      return item
    })
    console.log(newArr);
    setArr(newArr)
  };

  const handleEdit = (id, newText) => {
    const newArr = arr.map( (item) => {
      if(item.id === id) {
        return { ...item, text: newText}  
      }
      return item
    })
    console.log(newArr);
    setArr(newArr)
  }

  const todoLists = arr.map((item) => {
    return (
      <TodoItem
        handleDelete={handleDeletTodo}
        handleStatus={handleStatus}
        handleEdit={handleEdit}
        id={item.id}
        text={item.text}
        status={item.status}
      />
    );
  });
  return (
    <div className="App">
      <Header length={arr.length} result={result} />
      <div className="content">
        <CreateTodo addNewTodo={handleAddTodo} />
        <div className="todos-wrapper">
          {/* TodoItem({ text: "Купить соль", status=false }) */}
          {/* <TodoItem text="Купить соль" status={false} />  */}
          {
            todoLists.length 
              ? todoLists 
              : <h1 className="watermark">Please add some Todo element</h1> 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
