import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const CommentModal = () => {
    const [signUpError, setSingUpError] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
  return (
        <div>
      <input type="checkbox" id="CommentModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white rounded-md relative">
          <label
            htmlFor="CommentModal"
            className="btn btn-sm  btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          {/* for input data from user */}
          <form onSubmit={handleSubmit()} className="pt-12">
            <div className="form-control w-full ">
              <textarea
                type="text"
                placeholder="Insert Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full py-6 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 input input-primary input-bordered"
              />
              {errors.name && (
                <p className="text-orange-400">{errors.name?.message}</p>
              )}
            </div>
            

            <br />
            <input
             className="w-full px-3 py-2 border rounded-md bg-gradient-to-r to-primary from-secondary text-center text-xl uppercase text-white cursor-pointer"
              value="Comment"
              type="submit"
            />
            <div>
              {signUpError && <p className="text-orange-400">{signUpError}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentModal