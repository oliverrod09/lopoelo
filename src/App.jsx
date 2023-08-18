import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Credit from "./pages/Credit";
import Home from "./pages/Home";
import { Nav } from "./components/ui/Nav";
import Search from "./pages/Search";

function App() {
  const [count, setCount] = useState([]);

  return (
    <>
      <Router>
        <div className="mainC min-h-screen">
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/credit" element={<Credit></Credit>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
