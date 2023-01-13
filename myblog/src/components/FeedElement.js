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
        <p>Button edit</p>
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
