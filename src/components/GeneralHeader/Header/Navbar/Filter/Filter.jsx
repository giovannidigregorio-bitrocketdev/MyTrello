import React from "react";
import "./Filter.css";

export const Filter = () => {
  return (
    <li class="Navbar-li">
      <label for="filter">| Filtro task :</label>

      <select name="filter" class="filter">
        <option value="Completed">Completate</option>
        <option value="NoCompleted">Non Completate</option>
      </select>
    </li>
  );
};
