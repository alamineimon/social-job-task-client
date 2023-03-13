import React, { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import AllFlowers from "../components/AllFlowers";
import TrendsForYou from "../components/TrendsForYou";
import AllPost from "../components/AllPost";
import "../../../App.css";
import AddPost from "../components/AddPost";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  //for get all post
  const {
    data: allpost,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allpost"],
    queryFn: async () => {
      const res = await fetch("https://task-for-social-app-server.vercel.app/allpost", {
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
    fetch(`https://task-for-social-app-server.vercel.app/allpost/like/${id}?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <section className="App">
      <div className="w-10/12 mx-auto">
        {user?.email &&  <AddPost refetch={refetch} />}

        <AllPost allpost={allpost} handleLike={handleLike} refetch={refetch} />
      </div>
    </section>
  );
};

export default Home;
