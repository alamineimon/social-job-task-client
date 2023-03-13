import React from "react";
import { BsPencil } from "react-icons/bs";

import ProfileModal from "../../Modal/ProfileModal";

const InfoCard = () => {
  return (
    <div className="flex-col gap-1 z-10 pb-4 h-64 relative bg-white text-black p-4 rounded-md w-full ">
      <div className="flex justify-between items-center mb-4">
        <h4>Your Info</h4>
        {/* <div className="cursor-pointer">
          <label htmlFor="ProfileModal" className="btn-ghost cursor-pointer ">
            <BsPencil width="2rem" height="1.2rem" />
          </label>
          <ProfileModal/>
        </div> */}
      </div>

      <div className="mb-2">
        <span>
          <b>Status </b>
        </span>
        <span>in a Relationship</span>
      </div>

      <div className="mb-2">
        <span>
          <b>Lives in </b>
        </span>
        <span>Jhenaidah</span>
      </div>

      <div className="mb-2">
        <span>
          <b>Works at </b>
        </span>
        <span>Eimon Co. inst</span>
      </div>
      <div className="mt-12 mb-2 absolute bottom-4 right-4">
        <button
          type="submit"
          className=" px-3 py-1 border rounded-md bg-gradient-to-r to-primary from-secondary text-center  text-white"
        >
          Logout
        </button>
      </div>

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}

    </div>
  );
};

export default InfoCard;
