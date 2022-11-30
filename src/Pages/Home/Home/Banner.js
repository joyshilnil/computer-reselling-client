import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-100">
            <h1 className="mb-5 text-7xl font-bold text-cyan-400">Computer Shop</h1>
            <h1 className="mb-5 text-5xl font-bold">Computer Accories</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br />
              excepturi exercitationem quasi. In deleniti eaque aut <br />repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
