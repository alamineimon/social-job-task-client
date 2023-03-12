import React from "react";

import "../../../App.css";
import AddPost from "../../Home/components/AddPost";
import AllFlowers from "../../Home/components/AllFlowers";
import AllPost from "../../Home/components/AllPost";
import InfoCard from "../../Home/components/InfoCard";
import ProfileCard from "../../Home/components/ProfileCard";
import TrendsForYou from "../../Home/components/TrendsForYou";

const Profile = () => {
  return (
    <section className="App">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* mini profile and followers section */}
        <div>
          <InfoCard />
          <AllFlowers />
        </div>
        {/* All types of post here */}
        <div className="lg:col-span-2 space-y-5">
          <ProfileCard/>
          <AddPost/>
          <AllPost />
        </div>
        {/* trends for you */}
        <div>
          <div className="space-y-5 sticky top-5">
            <TrendsForYou />
            <button className="w-full py-2 rounded-md bg-gradient-to-r to-primary from-secondary text-center  text-white">
              Share
            </button>
          </div>
        </div>
      </div>
      {/* 
  {currentPost && (
    <CommentModal
      currentPost={currentPost}
      setCurrentPost={setCurrentPost}
      user={userinfo}
      handleLike={handleLike}
      postRefetch={postRefetch}
    />
  )} */}
    </section>
  );
};

export default Profile;
