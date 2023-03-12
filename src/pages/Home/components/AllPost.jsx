import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { PostsData } from '../../../assets/Data/PostsData'
import PostCard from './PostCard'

const AllPost = () => {

  const { data: allpost, isLoading } = useQuery({
    queryKey: ["allpost"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/allpost", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="flex-col gap-6">
    {allpost?.map((post, id)=>{
        return <PostCard data={post} id={id}/>
    })}
</div>
  )
}

export default AllPost