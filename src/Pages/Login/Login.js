import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {

  const [userEmail, setUserEmail] = useState('');

  const { loading, setLoading, signin, signInWithGoogle, resetPassword } =
    useContext(AuthContext);


    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";



  if (token) {
    navigate(from, { replace: true });
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signin(email, password)
      .then((result) => {
        setLoginUserEmail(email);        
        toast.success("Login Successfuly");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle().then((result) => {
      toast.success("Sign In Successfuly");
    });
  };


  const handleReset = () => {
    resetPassword(userEmail)
    .then( () => {
      toast.success('Please check your email..')
    })    
    .catch((err) => {
      toast.error(err.message);
      setLoading(false);
    });
  }

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col mt-4">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
            onBlur={event => setUserEmail(event.target.value)}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded btn btn-info hover:bg-green-dark focus:outline-none my-1"
            >
              Login
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
            <div className="divider">
              <Link onClick={handleReset} className="text-red-500">Forgot Password</Link>
            </div>
          </form>

          <div className="text-grey-dark mt-6">
            Create new account?
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
