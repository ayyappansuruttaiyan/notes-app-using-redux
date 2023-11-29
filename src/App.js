import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Notes from "./Pages/Notes";
import Tasks from "./Pages/Tasks";
import Archive from "./Pages/Archive";
import Bin from "./Pages/Bin";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="bg-light-purple text-black p-5 w-[80%]">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={Search} />
          <Route path="/notes" Component={Notes} />
          <Route path="/tasks" Component={Tasks} />
          <Route path="/archive" Component={Archive} />
          <Route path="/bin" Component={Bin} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
