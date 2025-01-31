import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='container mx-auto p-6 w-200'>
      <div className='text-4xl text-center font-serif font-bold mb-4 underline'>Redux Toolkit - Todo App</div>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
