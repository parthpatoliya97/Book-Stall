import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Course from "./components/Course";
import SighUp from "./components/SighUp";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/SignUp" element={<SighUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
