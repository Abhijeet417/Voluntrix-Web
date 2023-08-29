import React from "react";
import { useNavigate } from "react-router-dom";
function Onboarding(){
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        // window.location.reload()
        navigate('/');
    }
    return (
        <div>
            <h1>Onboarding Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Onboarding;
