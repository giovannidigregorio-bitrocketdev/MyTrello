import React from "react";
import "./AssignTo.css";

export const AssignTo = () => {
  return (
    <li class="Navbar-li">
      <label for="assegnazione">| Assegna all'utente :</label>

      <select name="assegnazione" class="assegnazione">
        <option value="Gabriele">Gabriele Culotta</option>
        <option value="Roberto">Roberto La Porta</option>
        <option value="Giorgio">Giorgio Sangiorgi</option>
        <option value="Mario">Mario isca</option>
        <option value="Giovanni">Giovanni Di Gregorio</option>
      </select>
    </li>
  );
};
