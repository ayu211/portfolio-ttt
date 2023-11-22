import React, { useState } from 'react'
// import backImg from '../images/background.jpg';
import backImg2 from '../images/background2.jpg';
import profileImg from '../images/profilepic.jpeg';
import './profile.css';

function Profile() {
   const[countLike, setCountLike] = useState(0);
   const[countHeart, setCountHeart] = useState(0);
  return (
    <>
    <div className="container"> 
        {/* <div className="profile-card"> */}
            <img src={backImg2} alt='cover' className='cover-pic'/>
            <img src={profileImg} alt="profilePic" className='profile-pic' />
      <div className="details">
        <h1>Ayush Yadav</h1>
          <p className='num'>798</p>
          <p className='firstA'>Followers</p> 
      </div>
        {/* <p>Following</p> */}
      
          <p className='designation' style={{marginLeft:'10px'}}>Front-End Developer</p>
          <p className="summary" style={{marginLeft:'10px'}}>Disciplined, Calm, and creative IT
                    engineering student seeking an internship
                    as a Software developer. Have a deep
                    interest in problem-solving skills and web
                    development and also have great
                    interpersonal and communication skills.</p>
          <a style={{color:"blue",marginLeft:'10px',fontSize:"14px",fontFamily:"sans-serif"}} href="https://www.linkedin.com/in/ayush-yadav-6177121b9/">https://www.linkedin.com/in/ayush-yadav-6177121b9/</a>
          <div className="points">
            <button className='like' onClick={()=> setCountLike(countLike+1)}><i className="fa fa-thumbs-up"></i></button>
            <p>{countLike}</p>
            <button className='heart' onClick={()=> setCountHeart(countHeart+1)}><i className="fa fa-heart"></i></button>
            <p>{countHeart}</p>
          </div>
        {/* </div> */}
        <hr />
    </div>
    </>
  )
}

export default Profile
