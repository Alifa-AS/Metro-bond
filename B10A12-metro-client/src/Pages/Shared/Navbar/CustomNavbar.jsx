import React from "react";
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <div>
      <FlowbiteNavbar
        fluid
        rounded
        className="fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto w-full bg-black text-yellow-200"
      >
        <FlowbiteNavbar.Brand>
          <img src={logo} className="mr-3 sm:h-9 h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            M<span className="text-pink-500">etr</span>O
          </span>
        </FlowbiteNavbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <FlowbiteNavbar.Toggle />
        </div>
        <FlowbiteNavbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/bioData"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }>
            Bio-Data
          </NavLink>

          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }>
            About Us
          </NavLink>

          <NavLink
            to="/contactUs"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }>
            Contact Us
          </NavLink>
        </FlowbiteNavbar.Collapse>
      </FlowbiteNavbar>
    </div>
  );
};

export default CustomNavbar;
