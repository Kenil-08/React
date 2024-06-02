import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(null); // Track which todo is being edited
    const [editText, setEditText] = useState(''); // Track the new text for the todo

    const handleEdit = (id, text) => {
        setEditMode(id); // Set the current todo in edit mode
        setEditText(text); // Set the current text of the todo
    };

    const handleSave = (id) => {
        dispatch(updateTodo({
            id,
            changes: { text: editText }
        }));
        setEditMode(null); // Exit edit mode
        setEditText(''); // Clear the edit text
    };

    return (
        <>
            <div className="text-2xl font-bold flex justify-center p-3">Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                <li
                    className="mt-4 flex justify-start items-center bg-zinc-800  px-4 py-2 rounded"
                    key={todo.id}
                >
                    {editMode === todo.id ? (
                        <>
                            <input 
                                type="text" 
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="text-black"
                            />
                            <button 
                                onClick={() => handleSave(todo.id)}
                                className="bg-white-500 border-0 py-1 px-4 focus:outline-none rounded text-md"
                            >
                                📁
                            </button>
                        </>
                    ) : (
                        <>
                            <div className='text-white'>{todo.text}</div>
                            <button 
                                onClick={() => handleEdit(todo.id, todo.text)}
                                className=" bg-white-500 border-0 py-1 px-4 focus:outline-none rounded text-md"
                            >
                                ✏️
                            </button>
                        </>
                    )}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className=" bg-white-500 border-0 py-1 px-4 focus:outline-none rounded text-md"
                    >
                        ❌
                    </button>
                </li>
                ))}
            </ul>
        </>
    )
}

export default Todos;
