/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function App() {
  return (
    <Navbar>
      <NavItem icon="😄" />
      <NavItem icon="😄" />
      <NavItem icon="😄" />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navBar">
      <ul className="navBar-nav"></ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}
export default App;
