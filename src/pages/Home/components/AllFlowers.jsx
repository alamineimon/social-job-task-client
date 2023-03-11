import React from "react";
import { Followers } from "../../../assets/Data/FollowersData";

const AllFlowers = () => {
  return (
    <div className="p-4 z-10 mt-10 h-64 w-full bg-white ">
      <h3 className="mt-8 mb-3 ">Who is following you</h3>

      {Followers?.map((follower, id) => {
        return (
          <div className="flex justify-between gap-4 items-center">
            <div className="flex gap-3">
              <img
                src={follower.img}
                alt=""
                className="h-14 w-14 rounded-full"
              />
              <div className="">
                <p>{follower.name}</p>
                <p>@{follower.username}</p>
              </div>
            </div>
            <button className="px-3 py-1 rounded-md bg-gradient-to-r to-primary from-secondary text-center  text-white">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllFlowers;
