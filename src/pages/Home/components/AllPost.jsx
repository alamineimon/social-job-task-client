import React from 'react'
import { PostsData } from '../../../assets/Data/PostsData'
import PostCard from './PostCard'

const AllPost = () => {
  return (
    <div className="flex-col gap-4">
    {PostsData.map((post, id)=>{
        return <PostCard data={post} id={id}/>
    })}
</div>
  )
}

export default AllPost