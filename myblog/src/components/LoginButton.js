import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = (props) => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/login');

    return (
        <button  className="ButtonLogin" onClick={handleClick}>
        Log in
        </button>
        )
    }

export default LoginButton
