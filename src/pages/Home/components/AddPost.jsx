import React, { useState, useRef } from "react";
import ProfileImage from "../../../assets/img/profileImg.jpg";
import { CiImageOn } from 'react-icons/ci';
import { MdSlowMotionVideo ,MdOutlineCancel } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineProfile } from 'react-icons/ai';

const AddPost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="flex bg-white p-4 rounded-md gap-4">
    <img src={ProfileImage} alt="" className="w-12 h-12 rounded-full"/>
    <div className="flex-col w-11/12 gap-4" >
      <input type="text" placeholder="What's on your mind?"  className="bg-gray-200 rounded-md w-full text-md p-3 mb-2 border-none outline-none"/>
      <div className="flex justify-around">
        <div className="p-1 pl-2 pr-2 rounded-sm flex justify-center items-center hover:cursor-pointer text-[#4CB256]"
        onClick={()=>imageRef.current.click()}
        >
          <CiImageOn />
          Photo
        </div>
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
        <button className="button ps-button">Share</button>
        <div style={{ display: "none" }}>
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>
    {image && (

      <div className="relative">
        <MdOutlineCancel onClick={()=>setImage(null)} className="absolute right-4 text-2xl text-red-600 top-2 cursor-pointer"/>
        <img src={image.image} alt="" className="w-full max-h-80 object-cover rounded-md"/>
      </div>

    )}


    </div>
  </div>
  )
}

export default AddPost