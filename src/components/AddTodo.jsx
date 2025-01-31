import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slice/TodoSlice.jsx';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <form onSubmit={handleAddTodo} className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
            <input
                type='text'
                placeholder='Write your todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type='submit' className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
