import { useState } from "react";
import axios from "axios";

function Register({toggleForm}) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        try {
            const response = await axios.post("http://localhost:3000/users/register", data);
            console.log(response);
        } catch (error) {
            if (error.response) {
                console.error("Error: ", error.response.data.message);
            }
            else {
                console.error("Error: ", error);
            }
        }
       
    }

    return(
        <div className="flex flex-col h-5/6 w-80 border-2 border-solid
        rounded-lg bg-gray-200 p-5">
          <h1 className="text-center text-3xl ">Sign Up</h1>
          <form action="/login" method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-col my-5">
                <label htmlFor="name">Full Name:</label>
                <input className='p-2 border rounded-md border-slate-400' type="text" id="name" name="name" placeholder='Enter full name' required />
            </div>
            <div className="flex flex-col my-5">
                <label htmlFor="email">Email:</label>
                <input className='p-2 border rounded-md border-slate-400' type="email" id="email" name="email" placeholder='Enter email' required />
            </div>
            <div className="flex flex-col my-5">
                <label htmlFor="password">Password:</label>
                <input className='p-2 border rounded-md border-slate-400' type="password" id="password" name="password" placeholder='Enter password' required />
            </div>
            <div className='text-center mt-10'>
                <button className=" bg-slate-700 text-white hover:bg-slate-800 w-full h-10 rounded-md"
                type="submit">Sign Up</button>
            </div>
          </form>
          <div className="flex justify-center items-center mt-5">
              <span className="">
                  Already have an account? 
              </span>
              <button className="text-slate-700 text-md hover:text-slate-400 " onClick={toggleForm}>
              &nbsp;Sign In
              </button>
          </div>
      </div>
    )
}

export default Register;