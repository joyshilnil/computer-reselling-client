import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    createUser,
    loading,
    setLoading,
    updateUserProfile,
    signInWithGoogle,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.fullname.value;
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = event.target.role.value;

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data.display_url);
        const photo = data.data.display_url;

        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, photo)
              .then(() => {
                saveUser(name, email, role);
                toast.success("User Create Successfuly");
                navigate(from, { replace: true });
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle().then((result) => {
      toast.success("Sign In Successfuly");
      navigate(from, { replace: true });
    });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col mt-4">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <label className="text-black dark:text-gray-200">Name</label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <label className="text-black dark:text-gray-200">Email</label>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              required
            />
            <label className="text-black dark:text-gray-200">User Image</label>
            <div className="mt-1 mb-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-black"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    required
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      className="sr-only"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
            <label
              className="text-black dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Role
            </label>
            <select
              name="role"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md mb-5"
            >
              <option>User</option>
              <option>Seller</option>
            </select>
            <label className="text-black dark:text-gray-200">Password</label>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
            />

            <button className="w-full text-center py-3 rounded btn btn-info hover:bg-green-dark focus:outline-none my-1">
              Create Account
            </button>
            <button
              onClick={handleGoogleSignUp}
              className="group p-3 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 w-full mt-2"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
