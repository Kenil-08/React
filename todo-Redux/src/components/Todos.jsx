import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                <li
                    className="mt-4 flex justify-start items-center bg-zinc-800 w-full px-4 py-2 rounded"
                    key={todo.id}
                >
                    <div className='text-white'>{todo.text}</div>
                    <button 
                    onClick={() => dispatch(updateTodo(todo.id, {text: todo.text, completed: !todo.completed}))}
                    className=" bg-white-500 border-0 py-1 px-4 focus:outline-none rounded text-md"
                    >
                        ✏️
                    </button>
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
export default Todos