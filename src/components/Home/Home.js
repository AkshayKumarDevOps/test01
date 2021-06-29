import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="homeBox">
        <div className="homeHeader">
          <h2>Welcome to Temperature Conversion!</h2>
        </div>

        <div className="homeUpdateOptions">
          <div className="updateOption">
            <Link to={`/temperatures`}>
              {/* <img src="blogsIcon.png" alt="blog" className="addLinkImage" /> */}
              <p>Temperatures</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
