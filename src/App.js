import "./App.css";
import { GeneralHeader } from "../src/components/GeneralHeader/GeneralHeader";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <GeneralHeader />
      <TaskList />
    </div>
  );
}

export default App;
