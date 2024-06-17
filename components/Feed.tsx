import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'

const Feed = ({user}:{user:any}) => {
  const userData = JSON.parse(JSON.stringify(user));
  return (
    <div className='border flex-1 border-black'>
      <PostInput user={userData}/>
      <Posts />
    </div>
  )
}

export default Feed