import React from "react";
import { Link } from "react-router-dom";
import { RxLockClosed } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className=" lg:block mx-auto  md:max-w-full lg:w-full">
      <div className={` sm:py-2 bg-black1 text-white1`}>
        <div id="mainmenu" className={"navbar w-11/12 mx-auto px-0"}>
          <div className="navbar-start">
            <Link to="/">
                <p className="text-2xl text-primary cursor-pointer uppercase">Social App</p>
            </Link>
          </div>
          {/* <div className="navbar-center hidden lg:flex">
          <div className="Search">
           <input type="text" placeholder='#Explore' />
           <div className="s-icon">
               <CiSearch/>
           </div>
       </div>
          </div> */}
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn btn-primary btn-xs md:btn-sm mr-4 text-white font-bold rounded-none"
            >
              {" "}
              <MdOutlineLogout className="mr-2 " />
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn btn-primary btn-xs md:btn-sm text-white font-bold rounded-none"
            >
              <RxLockClosed className="mr-2" />
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
