import { Logo } from "../../Logo/Logo";
import "./GeneralHeader.css";
import { InputTask } from "./Header/Navbar/InputTask/InputTask";
import { Navbar } from "./Header/Navbar/Navbar";

export const GeneralHeader = () => {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <InputTask />
    </div>
  );
};
