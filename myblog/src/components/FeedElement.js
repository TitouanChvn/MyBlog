import React from 'react'
//import image from '../images/image1.jpg'
import { useState } from 'react'
import { createPortal } from 'react-dom';


const FeedElement = ({feedelement}) => {
  //const { logoUrl } = feedelement.image

  const [imgPleinEcran, setImgPleinEcran] = useState(null);
  
  const handleImgPleinEcran = (img) => {
    if (imgPleinEcran !== img){
      setImgPleinEcran(img);
      //console.log(imgPleinEcran);
    } else {
      setImgPleinEcran(null);
    }
  }

  const handleClickDelete = async event => {
    console.log("delete")
    //get id of the post
    //console.log(feedelement.id)
    const formData = new FormData();
    formData.append('id', feedelement.id);
    try {
      console.log(JSON.stringify({id: feedelement.id}))
      const response = await fetch('http://localhost:5000/deletePost', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      //update the feed
      window.location.reload(); //reload the whole page, might be a better way to do it
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    
  }
  
  return (
    
    <div className='FeedElement'>
      <div className='FeedElementTopPart'>
        <img className="Imgfeedelement" src={feedelement.image} alt="post" onClick={()=>handleImgPleinEcran(feedelement.image)} />
        <h2>{feedelement.title}</h2>
        <p>{feedelement.date}</p>
        <p>{feedelement.author}</p>
        <p>{feedelement.content}</p>
      </div>
        
      <div className="FeedElementBottomPart">
        <p>feedelement.comments</p>
        <p>feedelement.likes</p>
        <button className="ButtonRightFeed" onClick={handleClickDelete}>
          Delete
        </button>
      </div>
      {imgPleinEcran!=null && createPortal(
      <div className="dark-background" onClick={() => handleImgPleinEcran(null)}>
        <img src={imgPleinEcran} alt="post" className='ImagePleinEcran' />
      </div>, 
      document.body
      )}


    </div>
    
  )
  
}

export default FeedElement
