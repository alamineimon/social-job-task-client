import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProfileModal = () => {
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostingKey = "8ab0829af0fdf06d333782b540e01bbb";
  const navigate = useNavigate();

  const handelUpdateUser = (data) => {
        const profile = {
            name: user.name,
            email: user.email,
            bio: data.title,
            status: data.status,
            location: data.location,
            company: data.company,
          };

          fetch(
            `https://task-for-social-app-server.vercel.app/users/${user?.email}`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(profile),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            })
        }
  return (
    <div>
      <input type="checkbox" id="ProfileModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white rounded-md relative">
          <label
            htmlFor="ProfileModal"
            className="btn btn-sm  btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="text-center text-lg my-3">Your Info</p>
          {/* for input data from user */}
          <form onSubmit={handleSubmit(handelUpdateUser)}>
            <div className="form-control w-full ">
              <input
                type="text"
                placeholder="Insert Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered  px-8"
              />
              {errors.name && (
                <p className="text-orange-400">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control my-2 w-full ">
              <input
                type="text"
                placeholder="Input Your Title"
                {...register("title", {
                  required: "Title Address is required",
                })}
                className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered   px-8"
              />
              {errors.email && (
                <p className="text-orange-400">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full ">
              {/* <label className="label">
                  <span className="">Status</span>
                </label> */}
              <select
                {...register("status", { required: "role is required" })}
                className="w-full py-2 border  rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered   px-8"
              >
                <option>Single</option>
                <option>Married</option>
                <option>In a Relationship</option>
              </select>
            </div>
            <div className="form-control my-2 w-full ">
              <input
                type="text"
                placeholder="Enter Your Location"
                {...register("location", {
                  required: "Location Address is required",
                })}
                className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered px-8"
              />
              {errors.password && (
                <p className="text-orange-400">{errors.password?.message}</p>
              )}
            </div>
            <div className="form-control w-full ">
              <input
                type="text"
                placeholder="Enter Your Company Name"
                {...register("company", {
                  required: "Company Address is required",
                })}
                className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered  px-8"
              />
              {errors.password && (
                <p className="text-orange-400">{errors.password?.message}</p>
              )}
            </div>
            {/* for insert image */}
            {/* <div className="flex mt-2 gap-3 justify-between">
              <div className="form-control w-full flex ">
                <label htmlFor="profile image">For Profile</label>
                <input
                  type="file"
                  {...register("profile", {
                    required: "Profile Image  is required",
                  })}
                  className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered  px-8"
                />
                {errors.password && (
                  <p className="text-orange-400">{errors.password?.message}</p>
                )}
              </div>
              <div className="form-control w-full flex ">
                <label htmlFor="profile Banner">For Profile Banner</label>
                <input
                  type="file"
                  {...register("profileBanner", {
                    required: "Profile Banner Image  is required",
                  })}
                  className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered  px-8"
                />
                {errors.password && (
                  <p className="text-orange-400">{errors.password?.message}</p>
                )}
              </div>
            </div> */}

            <br />
            <input
             className="w-full px-3 py-2 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-xl uppercase text-white cursor-pointer"
              value="Update"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
