import { useState } from 'react';

function Login({ toggleForm }) {

    return (
        <div className="flex flex-col h-96 w-80 border-2 border-solid
          rounded-lg bg-gray-200 p-5">
            <h1 className="text-center text-3xl ">Login</h1>
            <form action="/login" method="POST">
                <div className="flex flex-col my-5">
                    <label htmlFor="email">Email:</label>
                    <input className='p-2 border rounded-md border-slate-400' type="email" id="email" name="email" placeholder='Enter email' required />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="password">Password:</label>
                    <input className='p-2 border rounded-md border-slate-400' type="password" id="password" name="password" placeholder='Enter password' required />
                </div>
                <div className='text-center mt-10'>
                    <button className="bg-slate-700 text-white hover:bg-slate-800 w-full h-10 rounded-md"
                     type="submit">Sign In</button>
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