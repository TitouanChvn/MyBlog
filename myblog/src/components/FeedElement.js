import React from 'react'
import image from '../images/image1.jpg'


const FeedElement = ({feedelement}) => {
  
  //const { logoUrl } = this.feedelement.image

  return (
    
    <div className='FeedElement'>
        <h3>{feedelement.title}</h3>
        <p>{feedelement.content}</p>
        <p>{feedelement.author}</p>
        <img src={image} alt="post" />
"

      
    </div>
  )
}

export default FeedElement
