import { useEffect, useState } from "react";

function Modal({todo, editTodo, addNewTodo, onClose }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
        }
    }, [todo]);

    const handleSubmit = () => {
        if ( title === "" || description === "") {
            setErrorMessage("Please fill in all fields!");
            return;
        }
        if (todo) {
            // If editing, call editTodo with updated data
            editTodo(todo._id, title, description);
        } else {
            // If creating, call addNewTodo
            addNewTodo(title, description);
        }
        onClose();  // Close the modal after saving
    };

  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96">
                <h2 className="text-xl font-bold mb-4">{todo? "Edit Task" : "Add New Task"}</h2>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter task title"
                    className="w-full border p-2 rounded-md mb-4"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                    className="w-full border p-2 rounded-md mb-4 h-44"
                ></textarea>
              
              <div className="flex justify-between items-center">
                    <span className="text-red-500">{errorMessage}</span>
                    <div className="flex gap-2">
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            onClick={handleSubmit}
                        >
                            {todo ? "Update" : "Save"}
                        </button>
                    </div>
                </div>
               
            
            </div>
        </div>
    );
}

export default Modal;
