import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cover from "../../../assets/img/cover.png";
import Profile from "../../../assets/img/profileImg.jpg";

const ProfileCard = () => {
  const location = useLocation();
  let currentPath = location.pathname.split("/")[1];
  return (
    <div className="flex-col relative gap-4 overflow-x-clip rounded-lg bg-white text-black ">
      {currentPath !== "profile" ? 
      (<div className="flex-col relative items-center justify-center">
        <img src={Cover} alt="" className="w-full " />
        <img
          src={Profile}
          alt=""
          className="w-20 rounded-full absolute
        top-16 left-28"
        />
      </div>) :
      (<div className="flex-col relative items-center justify-center">
        <img src={Cover} alt="" className="w-full " />
        <img
          src={Profile}
          alt=""
          className="w-28 rounded-full absolute
        top-[160px] left-[240px]"
        />
      </div>)}
      <div className="p-4">
        <div className="text-center mt-12 gap-2">
          <p className="font-bold">Al Amin Eimon</p>
          <p className="my-3">MERN Stack Developer</p>
        </div>
        <hr />
        <div className="flex items-center text-center justify-center">
          <div className="follow">
            <p className="font-bold">6,890</p>
            <p className="text-gray-400">Followings</p>
          </div>
          <div className="w-[1px] h-[60px] ml-4 bg-gray-400"></div>
          <div className="follow mx-4">
            <p className="font-bold">1364</p>
            <p className="text-gray-400">Followers</p>
          </div>
          <div className="w-[1px] h-[60px] mr-4 bg-gray-400"></div>
          <div className="follow">
            <p className="font-bold">3</p>
            <p className="text-gray-400">Posts</p>
          </div>

          <hr />
        </div>
        {currentPath !== "profile" ?<Link to='/profile'>
          <p className="text-center text-primary font-bold mt-6" >My Profile</p>
        </Link>
        : ""}
        
      </div>
    </div>
  );
};

export default ProfileCard;
