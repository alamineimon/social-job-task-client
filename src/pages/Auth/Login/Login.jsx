import { React, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill, BsPersonFill } from "react-icons/bs";

import { FaLock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { loginUser, googleSignin } = useContext(AuthContext);
  const [signUpError, setSingUpError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("")
  const [loginError, setLoginError] = useState('')
  const [passwordShown, setPasswordShown] = useState(false);

const navigate = useNavigate();
 

 
  const handelLogin = data => {
      loginUser(data.email, data.password)
          .then(result => {
              setLoginUserEmail(data.email);
              navigate('/')
              toast.success(`Login successfully`);
          }).catch(error => {
              console.log(error.message)
              setLoginError(error.message);
          })
  }

  const handlerGoogleSignin = () => {
      googleSignin()
          .then(result => {
              const user = result.user;
              console.log(user);
              navigate('/')
              toast.success(`Login successfully`);
          })
          .catch(error => {
              console.error(error.message);
              setLoginError(error.message)
          })

  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
        </div>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full relative mt-4">
            <label className="absolute ml-2 mt-4 text-gray">
              <FiMail className="text-gray-400 focus:text-white"></FiMail>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email or Phone is required",
              })}
              placeholder="Email or Phone"
              className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered focus:text-white px-8"
            />
            {errors.email && (
              <p className="text-orange-400 mt-2">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full relative mt-8">
            <label className="absolute ml-2 mt-4 text-gray">
              <FaLock className="text-gray-400 focus:text-white"></FaLock>
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or length",
                },
                pattern: {
                  // value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must be Strong",
                },
              })}
              placeholder="Password"
              className="w-full py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered focus:text-white px-8"
            />
            {errors.password && (
              <p className="text-orange-400 mt-2">{errors.password?.message}</p>
            )}
            <label className=" right-2 mt-4 cursor-pointer absolute text-gray">
              {passwordShown ? (
                <BsEyeSlashFill
                  onClick={togglePassword}
                  className="text-xl"
                ></BsEyeSlashFill>
              ) : (
                <BsEyeFill
                  onClick={togglePassword}
                  className="text-xl"
                ></BsEyeFill>
              )}
            </label>
          </div>
          <br />

          <input
            className="w-full px-3 py-2 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-xl uppercase text-white cursor-pointer"
            value="Login"
            type="submit"
          />
          <div>
            {signUpError && <p className="text-orange-400">{signUpError}</p>}
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex mt-2 justify-center space-x-4">
          <button
          onClick={handlerGoogleSignin}
            aria-label="Log in with Google"
            className="flex justify-center item-center w-full  px-3 py-2 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-xl uppercase text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/register" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
