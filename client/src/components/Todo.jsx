
function Todo({onEdit, deleteTodo, todo }) {
  return (
    <div className='p-5 m-5 border-2 rounded-xl'>
        <h1 className="mb-2 text-xl font-medium leading-tight">{todo.title}</h1>
        <div className="flex justify-between items-start">
          <p>{todo.description}</p>
          <div className="flex  space-x-2">
              <button onClick={onEdit} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
              <button onClick={() => {deleteTodo(todo._id)}} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
          </div>
        </div>
    </div>
  );
}

export default Todo;