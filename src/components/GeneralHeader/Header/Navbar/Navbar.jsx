import React from "react";
import { AssignTo } from "./AssignTo/AssignTo";
import { InputTask } from "./InputTask/InputTask";
import "./Navbar.css";
import { Priority } from "./Priority/Priority";
import { Filter } from "./Filter/Filter";
import { TaskButton } from "./CreateTaskButton/TaskButton";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <InputTask />
        <AssignTo />
        <Priority />
        <Filter />
        <TaskButton />
      </ul>
    </div>
  );
};
