import React from "react";
import { AssignTo } from "./AssignTo/AssignTo";
import { InputTask } from "./InputTask/InputTask";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <InputTask />
        <AssignTo />
      </ul>
    </div>
  );
};
