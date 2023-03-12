import React from "react";

const ProfileModal = () => {
  return (
    <div>
      <input type="checkbox" id="ProfileModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white/70 rounded-md relative">
          <label
            htmlFor="ProfileModal"
            className="btn btn-sm  btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-center font-bold">
            User Info
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
