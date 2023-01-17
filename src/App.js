import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Greeting from "./Greetings";

function App() {
  return (
    <>
      <h1>Welcome Rails with React</h1>
      <ul className="link-list">
        <Link to="/greets" className="logo-title">
          Greetings
        </Link>
      </ul>

      <Routes>
        <Route path="/greets" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
