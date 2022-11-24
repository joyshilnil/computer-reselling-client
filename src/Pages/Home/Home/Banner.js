import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-screen"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&w=1000&q=80")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-100">
            <h1 className="mb-5 text-8xl font-bold text-cyan-300">Computer Shop</h1>
            <h1 className="mb-5 text-5xl font-bold">Computer Accosories</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae
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
