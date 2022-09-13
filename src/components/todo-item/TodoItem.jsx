import css from './TodoItem.module.css'

const TodoItem = () => {
  return (
    <div className={css.wrapper}>
        <label>
            <input type="checkbox" />
            Купить сахар 5кг
        </label>
        <div>
            <button>Edit</button>
            <button>Del</button>
        </div>
    </div>
  )
}

export default TodoItem;