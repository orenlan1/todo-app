
import { GoCheckCircle } from "react-icons/go";
import { useState } from "react";
import axios from "axios";

function Todo({onEdit, deleteTodo, todo }) {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleTodoComplete = async () => {
    try {
      const result = await axios.put(`http://localhost:3000/todos/${todo._id}`, {
        title: todo.title,
        description: todo.description,
        completed: true
      });
      console.log(result.data);
      setIsIconClicked(!isIconClicked);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  return (
    <div className={` p-5 m-5 border-2 rounded-xl ${(isIconClicked || todo.completed) && 'bg-green-200'}`}>
      <div className='flex gap-2 group'>
        <GoCheckCircle
         className={`text-2xl ${(isIconClicked || todo.completed) ? 'text-green-600' : 'text-gray-500 group-hover:text-gray-900'}`}
         onClick={() => handleTodoComplete()} />
        <h1 className="mb-2 text-xl font-medium leading-tight">{todo.title}</h1>  
      </div>
      <div className="flex justify-between items-start">
        <p className={`${(isIconClicked || todo.completed) && 'line-through'}`}>{todo.description}</p>
        <div className="flex  space-x-2">
            <button onClick={onEdit} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
            <button onClick={() => {deleteTodo(todo._id)}} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;