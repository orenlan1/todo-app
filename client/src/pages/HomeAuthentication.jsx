import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

function HomeAuthentication({setIsAuthenticated}) {
    const [isSignUp, setIsSignUp] = useState(false);
    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-700">
        {isSignUp ? <Register toggleForm={toggleForm}/> : <Login setIsAuthenticated={setIsAuthenticated}  toggleForm={toggleForm}/>}
    </div>
  );
}

export default HomeAuthentication;