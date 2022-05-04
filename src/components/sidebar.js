import React from "react";
import { Link } from "react-router-dom";
import "./nav_style.css";
import home from "../images/home.svg";
import calender from "../images/calender.svg";
import settings from "../images/settings.svg";
// import topdown from "../images/topdown.svg";

export default function Sidebar() {
  return (
    <>
      <div class="navbar-icons">
        <div className="nav-item-icons">
          <ul>
            <li
              style={{
                background: "#EC4E6E",
                height: "15px",
                width: "30px",
                borderRadius: "50%",
                marginBottom: "30px",
              }}
            >
              <Link className="nav-icon" to="/">
                {/* <box-icon type='solid' name='home-circle' ></box-icon>
                 */}
                <img
                  src={home}
                  style={{ height: "18px", marginTop: "10px" }}
                  alt="BigCo Inc. logo"
                />
              </Link>
            </li>
            <li>
              <Link className="nav-icon" to="/about">
                {/* <box-icon name="calendar"></box-icon>
                 */}
                <img
                  src={calender}
                  style={{ height: "18px" }}
                  alt="BigCo Inc. logo"
                />
              </Link>
            </li>
            <li>
              <Link className="nav-icon" to="/contact">
                {/* <box-icon name="chat"></box-icon> */}
                <img
                  src={settings}
                  style={{ height: "18px" }}
                  alt="BigCo Inc. logo"
                />
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}
