import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginButton from "./LoginButton";


const PageLogin = () => {
    const navigate = useNavigate();
    const [user,setUsername] = useState('')
    const [mdp,setPassword] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        if (!user || !mdp) {
            alert('Please enter a Username and a Password')
            return
        }
        console.log("form envoyé")
        // Check mdp&Username avec une fct en argument de PageLogin
        //pour l'instant :
        navigate('/')
    }
  return (
    <div className="container">
        <div className="form-title">Log in</div>
       <form className="login-form" onSubmit={onSubmit}>

        <div className="form-control">
            <label>Username :</label>
            <input type="text" 
            value={user}
            onChange={(e) => setUsername(e.target.value)}
            />

        </div>
        <div className="form-control">
            <label>Password :</label>
            <input type="password" 
            value={mdp}
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
        <input type="submit" value="Log in" className="ButtonLogin"/>
        
    </form>
    </div>
  )
}

export default PageLogin
