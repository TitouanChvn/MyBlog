import React from 'react'
//import image from '../images/image1.jpg'


const FeedElement = ({feedelement}) => {
  //const { logoUrl } = feedelement.image
  
  return (
    
    <div className='FeedElement'>
      <div className="FeedElementTopPart">
        <div className="FeedElementTopPartLeft">
        <h3>{feedelement.title}</h3>
        <p>{feedelement.date}</p>
        <p>{feedelement.author}</p>
        </div>  
        <div className="FeedElementTopPartRight">
        <img src={feedelement.image} alt="post" />
        </div>
      </div>
      <div className="FeedElementBottomPart">
        <p>{feedelement.content}</p>
      </div>
    </div>
  )
}

export default FeedElement
