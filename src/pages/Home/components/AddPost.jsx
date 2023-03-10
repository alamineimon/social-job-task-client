import React, { useState, useRef, useContext } from "react";
import ProfileImage from "../../../assets/img/profileImg.jpg";
import { CiImageOn } from "react-icons/ci";
import { MdSlowMotionVideo, MdOutlineCancel } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { AiOutlineProfile } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import moment from "moment/moment";

const AddPost = ({refetch}) => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState([]);
  const [err, setErr] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  let imghostKey = "8ab0829af0fdf06d333782b540e01bbb";
// image add for preview
  const handleChange = (e) => {
    if (e.target.files[0].size > 404800) {
      fileInputRef.current.value = "";
      return toast.error("Image size must be under 200Kb");
    }
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setErr("");
    setFile([...file, e.target.files[0]]);
  };
  //delete image on preview
  const deleteImg = () => {
    fileInputRef.current.value = "";
    setFile("");
    setImgUrl("");
  };


  const handelPostSubmit = (data) => {
    if (file.length === 0) {
      const post = {
        desc: data.postText,
        postTime: moment().format("Do MMM YYYY, h:mm a"),
        authorName: user.name,
        authorEmail: user.email,
      };
      addToDb(post);
      console.log("no picture");
      return;
    }
    if (file.length) {
      const image = file[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((bbdata) => {
          const post = {
            img: bbdata.data.display_url,
            desc: data.postText,
            postTime: moment().format("Do MMM YYYY, h:mm a"),
            name: user.displayName,
            email: user.email,
          };
          addToDb(post);
        });
    }
  };

  const addToDb = (post) => {
    fetch("https://task-for-social-app-server.vercel.app/allpost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((resdata) => {
        if (resdata?.acknowledged) {
          deleteImg();
          reset();
          refetch()
        }

      });
  };







  const fileInputRef = useRef(null);
  const handleButtonClick = (e) => {
    fileInputRef.current.click();
  };
  return (
    <form
    onSubmit={handleSubmit(handelPostSubmit)}
     className="flex bg-white p-4 rounded-md gap-4 mb-6">
      <img src={ProfileImage} alt="" className="w-12 h-12 rounded-full" />
      <div className="flex-col w-11/12 gap-4">
        <input
          {...register("postText", { required: true })}
          type="text"
          name="postText"
          placeholder="What's on your mind ?"
          className="bg-gray-100 rounded-md w-full text-md text-black focus:outline-primary p-3 mb-2 border-none outline-non "
        />
        <div className="flex justify-around">
          <button
            type="submit"
            className=" p-1 pl-2 pr-2 rounded-sm flex justify-center items-center hover:cursor-pointer text-[#4CB256]"
            onClick={handleButtonClick}
          >
            <CiImageOn />
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
          {user?.email? <>
            <button
          type="submit"
            className=" px-3 py-1 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-white"
          >Share</button>
          </> :<>
            <button
            disabled
            className=" px-3 py-1 cursor-not-allowed border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-white"
          >Share</button>
          </>}
          {/* {user?.email? <>
            <button
          type="submit"
            className=" px-3 py-1 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-white"
          >Share</button>
          </> :<>
            <button
            disabled
            className=" px-3 py-1 cursor-not-allowed border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-white"
          >Share</button>
          </>} */}
          

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
    </form>
  );
};

export default AddPost;
