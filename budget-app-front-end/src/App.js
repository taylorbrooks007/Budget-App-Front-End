import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Create from "./Components/Create";
import React from "react";
import Home from "./Components/Home";
import Index from "./Components/Index";
import ShowDetails from "./Components/ShowDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/:id" element={<ShowDetails />} />
          <Route path="/transactions/new" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
