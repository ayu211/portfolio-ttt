import React from 'react'
import './postarea.css';

function Postarea(props) {
    let{title,post,postgenre} = props;
  return (
    <>
                <div className='container1'>
                        <h2>{title}</h2>
                        <div className='postContainer'>
                            <p>{post}</p>
                        </div>
                        <br />
                        <div className='genre'>
                            <p>{postgenre} by Ayush </p>
                        </div>
                </div>
    </>
  )
}

export default Postarea
