import React from 'react'
import { Link } from "react-router-dom";
import './nav_style.css';


export default function NavbarComp (){
   
     return (
         <>
      <div className="navbar">
          <div className="nav-item-text" style={{display:"flex"}}>
              <ul  style={{display:"flex"}}>
                  <li className="active">
                      <Link className="nav-text active" to="/">Home</Link>
                  </li>
                  <li>
                      <Link className="nav-text" to="/about">About</Link>
                  </li>
                  <li>
                      <Link className="nav-text" to="/contact">Contact</Link>
                  </li>
                  <li>
                      <Link className="nav-text" to="/services">Services</Link>
                  </li>
              </ul>
          </div>
      </div>
      </>
    )

}
    
  