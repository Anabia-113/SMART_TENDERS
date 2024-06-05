import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#145289] flex md:justify-around items-center flex-wrap">
      <div className="logo">
        <img src={logo} alt="" width={200} />
      </div>
      <nav className="">
        <ul className="flex gap-20 text-[#fff] flex-wrap">
          <Link to='/'>Home</Link>
          <Link to='/aboutus'>About Us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/tender'>Tender</Link>
          <Link to='/contactus'>Contact Us</Link>
        </ul>
      </nav>
      <div className="flex gap-5">
        <button className="bg-[#fff] rounded p-2">LOGIN</button>
        <button className="bg-[#fff] rounded p-2">SIGN UP</button>
      </div>
    </header>
  );
}
