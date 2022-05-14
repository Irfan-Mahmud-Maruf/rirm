import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App