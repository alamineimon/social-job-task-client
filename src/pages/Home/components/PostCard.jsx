import React from 'react'
import Comment from '../../../assets/img/comment.png'
import Share from '../../../assets/img/share.png'
import Heart from '../../../assets/img/like.png'
import NotLike from '../../../assets/img/notlike.png'


const PostCard = ({data}) => {
  return (
    <div className="flex-col p-4 rounded-md static getDerivedStateFromProps(nextProps, prevState) {}">
    <img src={data.img} alt="" className='w-full max-h-80 object-cover rounded-sm' />
    <div className="flex items-start gap-6 mt-3">
        <img src={data.liked===true?Heart: NotLike} alt="" className='cursor-pointer'/>
        <img src={Comment} alt="" className='cursor-pointer' />
        <img src={Share} alt=""  className='cursor-pointer'/>
    </div>
    <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>
    <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
    </div>
</div>
  )
}

export default PostCard