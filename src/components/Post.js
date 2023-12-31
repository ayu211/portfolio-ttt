import React from 'react'
import {post} from './data';
import Postarea from './Postarea'

function Post() {
  return (
    <>
        <div className="container">
            {post.map((data,key)=>{
                return (
                    <>
                    <Postarea key={key} title={data.title} post={data.post} postgenre={data.postgenre} />
                    <hr />
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Post
