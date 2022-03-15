import React from "react";
import { AssignTo } from "./AssignTo/AssignTo";
import { InputTask } from "./InputTask/InputTask";
import "./Navbar.css";
import { Priority } from "./Priority/Priority";
import { Filter } from "./Filter/Filter";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <InputTask />
        <AssignTo />
        <Priority />
        <Filter />
      </ul>
    </div>
  );
};
