import FeedElement from "./FeedElement"
import { useState,useEffect } from "react";

const MiddleFeed = () => {
    const [feedElementsList, setFeedElementsList] = useState([])
  
    useEffect(() => {
        const getElements = async () => {
            const listElements = await fetchElement()
            //console.log("1",listElements)
            setFeedElementsList(listElements)
        } 
        getElements()
        //console.log("on a get")
        
    },[])

    const fetchElement = async () => {
        const res = await fetch('http://localhost:5000/Feed_content')
        //console.log(res)
        const data = await res.json()
        //console.log("truc",data)
        return data
    }

  return (
    
    <div className="middleFeed">
      MiddleFeed part
      <div>
      {feedElementsList.map((feedelement,index) => (
        <FeedElement key={index} feedelement={feedelement}/>
      ))}
      </div>
    
      
      
    </div>
  )
}

export default MiddleFeed
