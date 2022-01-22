import React, { useEffect } from "react";
import "./Homepage.css";
import logo from "../../images/bct.png";
import tet from "../../images/tet.png";
import tet2 from "../../images/tet2.png";
import tet4 from "../../images/tet4.gif";
import mualan from "../../images/mualan.gif";
import { Link } from "react-router-dom";
function Homepage( ) {
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector(".login").classList.toggle("color");
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <div className="logo">
            <img src={tet} alt="logo" />
          </div>
          <div className="logo mualan" >
            <img src={mualan} alt="logo" />
          </div>
        </div>
        <div className="wrap">
          <div className="logo" >
            <img src={logo} alt="logo" />
          </div>
          <Link to="/login" className="button login">
            {" "}
            Đăng nhập{" "}
          </Link>
          <Link to="/register" className="button">
            {" "}
            Đăng kí{" "}
          </Link>
        </div>
        <div>
          <div className="logo">
            <img src={tet2} alt="logo" />
          </div>
          <div className="logo">
            <img src={tet4} alt="logo" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Homepage;
