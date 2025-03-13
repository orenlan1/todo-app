import { useState } from 'react';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login({ toggleForm, setUserId }) {

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        try {
            const response = await axios.post('http://localhost:3000/users/login', data);
            console.log(response.data);
            setUserId(response.data.userId);
            
        } catch (error) {
            if (error.response) {
                console.error('Error: ', error.response.data.message);
                setMessage(error.response.data.message);
            }
            else {
                console.error('Error: ', error);
            }
        }
    }


    return (
        <div className="flex flex-col h-96 w-80 border-2 border-solid
          rounded-lg bg-gray-200 p-5">
            <h1 className="text-center text-3xl ">Login</h1>
            <form action="/login" method="POST" onSubmit={handleSubmit}>
                <div className="flex flex-col my-5">
                    <label htmlFor="email">Email:</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaUser className="text-gray-400" />
                        </span>
                        <input className='p-2 pl-10 border rounded-md border-slate-400 w-full' type="email" id="email" name="email" placeholder='Enter email' required />
                    </div>
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="password">Password:</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaLock className="text-gray-400" />
                        </span>
                        <input className='p-2 pl-10 border rounded-md border-slate-400 w-full' type="password" id="password" name="password" placeholder='Enter password' required />
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <button className="bg-slate-700 text-white hover:bg-slate-800 w-full h-10 rounded-md"
                     type="submit">Sign In</button>
                </div>
                <div className='text-red-500 text-center'>
                    <p>{message}</p>
                </div>
            </form>
            <div className="flex justify-center items-center mt-5">
                <span className="">
                    Don't have an account? 
                </span>
                <button className="text-slate-700 text-md hover:text-slate-400 " onClick={toggleForm}>
                &nbsp;Sign Up
                </button>
            </div>
        </div>
    )
}

export default Login;