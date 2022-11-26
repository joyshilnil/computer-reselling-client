import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
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
