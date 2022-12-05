import React from 'react'
//import image from '../images/image1.jpg'


const FeedElement = ({feedelement}) => {
  //const { logoUrl } = feedelement.image
  
  return (
    
    <div className='FeedElement'>
      <div className='FeedElementTopPart'>
        <img src={feedelement.image} alt="post" />
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
    </div>
  )
}

export default FeedElement
