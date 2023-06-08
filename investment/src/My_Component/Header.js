import React from 'react'
import PropTypes from 'prop-types'
import logimg from "./images/images1.jpeg";
export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ "backgroundImage": 'url("/images/download.jpg")' }}>
        <div className="container-fluid" style={{ "padding-right": "15%", "padding-left": "20%" }}>
          <a className="navbar-brand" href="#"><img src={logimg} className="suraj" style={{ "width": "60%", "height": "100%" }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ "padding-left": "75%" }}>
              {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">Log&nbsp;IN</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Hindi</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>

            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

{/* <!-- Use any element to open the sidenav --> */}
{/* <span onclick="openNav()">&#9776;</span> */}
            <span style={{"font-size":"20px", "cursor":"pointer"}} onclick="openNav()">&#9776;</span>
            

          </div>
        </div>
      </nav>
    </>
  )
}