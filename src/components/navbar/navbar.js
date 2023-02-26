//Navbar i verdensklasse!

import React, { Component } from "react";
import MenuItems from "./MenuItems.js";
import "./navbar.css";

const ScrollTop = () => {
  return window.scrollTo(0, 0);
};

class Navbar extends Component {
  render() {
    return (
      <nav className="Nav">
        <a className="MainLogo" href="#" onClick={ScrollTop}>
          Show off
        </a>
        <ul className="MenuList">
          <li>{MenuItems[1].title}</li>
          <li>{MenuItems[2].title}</li>
          <li>{MenuItems[3].title}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
