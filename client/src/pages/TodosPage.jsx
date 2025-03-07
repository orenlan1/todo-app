
import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from '../components/Todo';
import Modal from '../components/Modal';

function TodosPage({userId}) {
    
    const [todos, setTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoToEdit, setTodoToEdit] = useState(null);

    const openModal = (todo = null) => {
        setTodoToEdit(todo);
        setIsModalOpen(true);
    }


    const deleteTodo = async (id) => {
        const res = await axios.delete('http://localhost:3000/todos/' + id);
        console.log(res.data);
        setTodos(todos.filter((todo) => todo._id !== id));
    }

    const addNewTodo = async (title, description) => {
        const newTodo = {
            title: title,
            description: description,
            _id: userId
        }
        const res = await axios.post('http://localhost:3000/todos/create/', newTodo);
        console.log(res.data);
        setTodos([...todos, res.data]);
    }

    const editTodo = async (id, newTitle, newDescription) => {
        const res = await axios.put('http://localhost:3000/todos/' + id, {
            title: newTitle, description: newDescription, completed: false});
        console.log(res.data);
        setTodos(todos.map(todo => todo._id === id ? res.data : todo)); 
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await axios.get('http://localhost:3000/todos/' + userId);
            console.log(res.data);
            setTodos(res.data);
        }
        fetchTodos();

    }, []);



    return (
        <div className='bg-slate-700 min-h-screen p-10'>
            <div className='h-auto bg-slate-400 rounded-xl p-5'>
                <div className='text-center text-4xl pt-10 rounded-xl'>
                    <h1>TODO LIST</h1>
                </div>
                <div>
                    <button onClick={() => openModal()} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 
                    py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Add New</button>
                    <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4
                     focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Sign Out</button>
                </div>
                <div>
                    {todos.map((todo) => (
                        <Todo key={todo._id} deleteTodo={deleteTodo} todo={todo} onEdit={() => openModal(todo)} />
                    ))}
                </div>
            </div>

            {isModalOpen && <Modal todo={todoToEdit} editTodo={editTodo} addNewTodo={addNewTodo} onClose={() => setIsModalOpen(false)}/>}
        </div>
        
    )
}

export default TodosPage;