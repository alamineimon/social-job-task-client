import React, { useContext } from "react";
import Comment from "../../../assets/img/comment.png";
import Share from "../../../assets/img/share.png";
import Heart from "../../../assets/img/like.png";
import NotLike from "../../../assets/img/notlike.png";
import { AuthContext } from "../../../context/AuthProvider";
import CommentModal from "../../Modal/CommentModal";
import { AiOutlineDelete } from "react-icons/ai";
import useAdmin from "../../../Hooks/UseAdmin/UseAdmin";

const PostCard = ({ data, handleLike , refetch}) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const handlerDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure ?"
    );
    if (proceed) {
      fetch(`https://task-for-social-app-server.vercel.app/userPostDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
          }
        });
    }
  };

  return (
    <div className="flex-col relative mb-6 p-4 bg-white rounded-md  getDerivedStateFromProps(nextProps, prevState) {}">
      <img
        src={data.img}
        alt=""
        className="w-full max-h-80 object-cover rounded-sm"
      />
      {/* for delete any post */}
      {
        user?.email && <>
        {(data?.email === user?.email ||
                (isAdmin && user?.email)) && (
                  <AiOutlineDelete onClick={() => handlerDelete(data?._id)} className=" absolute top-4 right-4 text-2xl text-red-600 cursor-pointer" />

              )}

        </>
      }

      



      <div className="flex items-start gap-6 mt-3">
        {user?.email? <>
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
        </> :
        <>
        {data?.likes?.includes(user?.email) ? (
        <img
         
          src={Heart}
          alt=""
          className="cursor-pointer"
        />
      ) : (
        <img
          
          src={NotLike}
          alt=""
          className="cursor-pointer"
        />
      )}
      </>
        }
        
        {/* for comment modal */}
        <label htmlFor="CommentModal" className="btn-ghost cursor-pointer ">
          <img src={Comment} alt="" className="cursor-pointer" />
        </label>
        <CommentModal />
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
        {/* <span className="text-gray-500 underline cursor-pointer">Comments</span> */}
      </div>
      <div className="detail text-gray-500">
        <span className="text-black font-bold text-md">{data.name}</span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostCard;
