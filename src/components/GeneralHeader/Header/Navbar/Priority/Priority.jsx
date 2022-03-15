import "./Priority.css";
import React from "react";

export const Priority = () => {
  return (
    <li class="Navbar-li">
      <label for="priority">| Priorità:</label>

      <select name="priority" class="priority">
        <option value="Low">Bassa</option>
        <option value="Medium">Media</option>
        <option value="High">Alta</option>
      </select>
    </li>
  );
};
