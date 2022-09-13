import './App.css';
import Header from "./components/header/Header"
import CreateTodo from "./components/create-todo/CreateTodo"
import TodoItem from "./components/todo-item/TodoItem"

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <CreateTodo />
        <div className='todos-wrapper'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
      </div>
    </div>
  );
}

export default App;
