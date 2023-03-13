import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RxLockClosed } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlerLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className=" lg:block mx-auto border-2  md:max-w-full lg:w-full">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "42%", left: "-8rem" }}></div>
      <div className={` sm:py-2 bg-black1 text-white1`}>
        <div id="mainmenu" className={"navbar w-11/12 mx-auto px-0"}>
          <div className="navbar-start">
            <Link to="/">
              <p className="text-2xl text-primary cursor-pointer uppercase">
                Social App
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* <div className="Search">
              <input type="text" placeholder="#Explore" />
              <div className="s-icon">
                <CiSearch />
              </div>
            </div> */}
              <CiSearch size={24} className="text-primary z-10 -mt-2 cursor-pointer" />
            <input
              type="text"
              placeholder="Search anything"
              className="bg-gray-100 rounded-full -ml-12 w-[500px] text-md focus:outline-primary pl-12 p-3 mb-2 border-none outline-non "
            />
          </div>
          <div className="navbar-end z-10">
            {!user?.uid ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary btn-xs md:btn-sm mr-4 text-white font-bold rounded-none"
                >
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
              </>
            ) : (
              <>

                <RiLogoutCircleRLine
                  onClick={handlerLogOut}
                  size={28}
                  className="ml-3 cursor-pointer text-primary"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
