import React from "react";
import Comment from "../../../assets/img/comment.png";
import Share from "../../../assets/img/share.png";
import Heart from "../../../assets/img/like.png";
import NotLike from "../../../assets/img/notlike.png";

const PostCard = ({ data }) => {
  return (
    <div className="flex-col mb-6 p-4 bg-white rounded-md static getDerivedStateFromProps(nextProps, prevState) {}">
      <img
        src={data.img}
        alt=""
        className="w-full max-h-80 object-cover rounded-sm"
      />
      <div className="flex items-start gap-6 mt-3">
        <img
          src={data.liked === true ? Heart : NotLike}
          alt=""
          className="cursor-pointer"
        />
        <img src={Comment} alt="" className="cursor-pointer" />
        <img src={Share} alt="" className="cursor-pointer" />
      </div>
      <span className="text-gray-500">{data.likes} likes</span>
      <div className="detail text-gray-500">
        <span className="text-black font-bold text-md">{data.name}</span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostCard;
