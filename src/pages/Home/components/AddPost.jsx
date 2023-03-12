import React, { useState, useRef, useContext } from "react";
import ProfileImage from "../../../assets/img/profileImg.jpg";
import { CiImageOn } from "react-icons/ci";
import { MdSlowMotionVideo, MdOutlineCancel } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { AiOutlineProfile } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";


const AddPost = () => {
  const [file, setFile] = useState([]);
  const [err, setErr] = useState("");
  const [imgUrl, setImgUrl] = useState("");


  const desc = useRef()
  // const handleChange = (e) => {
  //   if (e.target.files[0].size > 204800) {
  //     fileInputRef.current.value = "";
  //     return toast.error("Image size must be under 200Kb");
  //   }
  //   setImgUrl(URL.createObjectURL(e.target.files[0]));
  //   setErr("");
  //   setFile([...file, e.target.files[0]]);
  // };
  
  // const deleteImg = () => {
  //   fileInputRef.current.value = "";
  //   setFile("");
  //   setImgUrl("");
  // }; 204800


  const handleChange = (e) => {
    if (e.target.files[0].size >  404800) {
      fileInputRef.current.value = "";
      return toast.error("Image size must be under 200Kb");
    }
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setErr("");
    setFile([...file, e.target.files[0]]);
  };
  const deleteImg = () => {
    fileInputRef.current.value = "";
    setFile("");
    setImgUrl("");
  };
  

  const fileInputRef = useRef(null);
  const handleButtonClick = (e) => {
    fileInputRef.current.click();
  };





  const handlePostSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="flex bg-white p-4 rounded-md gap-4">
      <img src={ProfileImage} alt="" className="w-12 h-12 rounded-full" />
      <div className="flex-col w-11/12 gap-4">
          <input
          ref={desc}
          required
            type="text"
            name="email"
            placeholder="What's on your mind ?"
            className="bg-gray-100 rounded-md w-full text-md text-black focus:outline-primary p-3 mb-2 border-none outline-non "
          />
        <div className="flex justify-around">


          <button
          type="button"
            className=" p-1 pl-2 pr-2 rounded-sm flex justify-center items-center hover:cursor-pointer text-[#4CB256]"
            onClick={handleButtonClick}
          >
            <CiImageOn/>
            Photo
          </button>
          {err && (
                <p className="text-red-500 ml-5">
                  <small>{err}</small>
                </p>
              )}
          <input
                type="file"
                id="imageUrl"
                className="hidden"
                ref={fileInputRef}
                onChange={handleChange}
              />




          <div className="p-1 pl-2 pr-2 rounded-sm flex justify-center items-center hover:cursor-pointer text-[#4A4EB7]">
            <MdSlowMotionVideo />
            Video
          </div>{" "}
          <div className="p-1 pl-2 pr-2 rounded-sm flex justify-center items-center hover:cursor-pointer text-[#EF5757]">
            <GrLocation />
            Location
          </div>{" "}
          <div className="p-1 pl-2 pr-2 rounded-sm flex justify-center items-center hover:cursor-pointer text-[#E1AE4A]">
            <AiOutlineProfile />
            Shedule
          </div>
          <button 
          onClick={handlePostSubmit}
          className=" px-3 py-1 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-white">
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              id="imageUrl"
              className="hidden"
              ref={fileInputRef}
              onChange={handleChange}
            />
          </div>
        </div>
        {imgUrl && (
          <div className="flex -ml-10 w-full mt-2 justify-center items-center">
            <div className="relative">
              <MdOutlineCancel
                onClick={deleteImg} 
                className="absolute right-2 text-2xl text-red-600 top-2 cursor-pointer"
              />
              <img
                src={imgUrl}
                alt=""
                className="w-full max-h-80 object-cover rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPost;
