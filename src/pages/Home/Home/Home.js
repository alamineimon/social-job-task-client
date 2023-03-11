import React from "react";
import ProfileCard from "../components/ProfileCard";
import AllFlowers from "../components/AllFlowers";
import TrendsForYou from "../components/TrendsForYou";
import AllPost from "../components/AllPost";

const Home = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* mini profile and followers section */}
        <div>
          <ProfileCard />
          <AllFlowers />
        </div>
        {/* All types of post here */}
        <div className="lg:col-span-2 space-y-5">
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

export default Home;
