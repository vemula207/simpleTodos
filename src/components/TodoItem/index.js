import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {id, title} = todoList

  const onDeleteItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="item-cont">
      <p className="title">{title}</p>

      <button type="button" className="delete" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
