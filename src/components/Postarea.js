import React from 'react'

function Postarea(props) {
    let{title,post,postgenre} = props;
  return (
    <>
                <div className='container2'>
                        {title}
                        <div className='postContainer'>
                            {post}
                        </div>
                        <br />
                        <div className='genre'>
                            {postgenre} by Ayush Yadav
                        </div>
                </div>
    </>
  )
}

export default Postarea
