import React, { useContext } from "react";
import Comment from "../../../assets/img/comment.png";
import Share from "../../../assets/img/share.png";
import Heart from "../../../assets/img/like.png";
import NotLike from "../../../assets/img/notlike.png";
import { AuthContext } from "../../../context/AuthProvider";
import CommentModal from "../../Modal/CommentModal";

const PostCard = ({ data, handleLike }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex-col mb-6 p-4 bg-white rounded-md static getDerivedStateFromProps(nextProps, prevState) {}">
      <img
        src={data.img}
        alt=""
        className="w-full max-h-80 object-cover rounded-sm"
      />
      <div className="flex items-start gap-6 mt-3">
        {data?.likes?.includes(user?.email) ? (
          <img
            onClick={() => handleLike(data._id)}
            src={Heart}
            alt=""
            className="cursor-pointer"
          />
        ) : (
          <img
            onClick={() => handleLike(data._id)}
            src={NotLike}
            alt=""
            className="cursor-pointer"
          />
        )}
{/* for comment modal */}
        <label htmlFor="CommentModal" className="btn-ghost cursor-pointer ">
          <img src={Comment} alt="" className="cursor-pointer" />
        </label>
        <CommentModal/>
        <img src={Share} alt="" className="cursor-pointer" />
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">
          {data?.quantity ? (
            data.quantity
          ) : (
            <span className="text-xs">Be the first one</span>
          )}{" "}
          likes
        </span>
        <span className="text-gray-500 underline cursor-pointer">
          {data.likes} Comments
        </span>
      </div>
      <div className="detail text-gray-500">
        <span className="text-black font-bold text-md">{data.name}</span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostCard;
