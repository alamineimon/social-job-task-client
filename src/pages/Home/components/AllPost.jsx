import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { PostsData } from '../../../assets/Data/PostsData'
import PostCard from './PostCard'

const AllPost = ({allpost,handleLike,refetch}) => {




  return (
    <div className="flex-col gap-6">
    {allpost?.map((post)=>{
        return <PostCard key={post._id} data={post} refetch={refetch}  handleLike={handleLike} />
    })}
</div>
  )
}

export default AllPost