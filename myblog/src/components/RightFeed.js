import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const RightFeed = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/CreatePost');

  const [login_id, setlogin_id] = useState([])
  
    useEffect(() => {
        const getElements = async () => {
            const id = await fetch_id()
            console.log("1",id)
            setlogin_id(id)
        } 
        getElements()
        //console.log("on a get")
        
    },[])

    const fetch_id = async () => {
        const res = await fetch('http://localhost:5000/login',{mode: "no-cors"})
        console.log(res)
        const data = await res.json()
        console.log("truc",data)
        return data.Log
    }


  return (
    <div className="rightFeed">
      <button className="ButtonRightFeed" onClick={handleClick}>
        Nouveau Post
      </button>
      <p>RightFeed part</p>
      <br/>
      <p>Login id is {login_id.login}</p>
    </div>
  )
}

export default RightFeed
