import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Slice/TodoSlice';

function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                        <span>{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TodoList;
