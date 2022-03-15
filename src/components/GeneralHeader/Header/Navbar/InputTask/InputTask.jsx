import React from "react";
import "./InputTask.css";

export const InputTask = () => {
  return (
    <li class="Navbar-li">
      <input
        class="searchTask"
        type="text"
        placeholder="Crea la tua task qui"
      />
    </li>
  );
};
