import { Logo } from "../../Logo/Logo";
import "./GeneralHeader.css";

import { Navbar } from "./Header/Navbar/Navbar";

export const GeneralHeader = () => {
  return (
    <div className="App">
      <Logo />
      <Navbar />
    </div>
  );
};
