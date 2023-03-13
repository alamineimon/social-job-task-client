import React, { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import AllFlowers from "../components/AllFlowers";
import TrendsForYou from "../components/TrendsForYou";
import AllPost from "../components/AllPost";
import '../../../App.css'
import AddPost from "../components/AddPost";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

//for get all post
  const { data: allpost, isLoading, refetch } = useQuery({
    queryKey: ["allpost"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/allpost", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });


  // for like
  const handleLike = (id) => {
    fetch(
      `http://localhost:9000/allpost/like/${id}?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <section className="App">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* mini profile and followers section */}
        <div>
          <ProfileCard />
          <AllFlowers />
        </div>
        {/* All types of post here */}
        <div className="lg:col-span-2 space-y-5">
          <AddPost/>
          <AllPost allpost={allpost} handleLike={handleLike} />
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
