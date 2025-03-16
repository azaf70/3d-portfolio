import React from 'react';
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo1 } from "../assets";

const Navbar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <img src={logo1} alt="logo" className="w-24 h-12 object-contain"/>
            </Link>
        </div>
        <div className="navbar-end">
            <ul className="list-none hidden sm:flex flex-row gap-10">
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="dropdown lg:hidden md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Navbar;