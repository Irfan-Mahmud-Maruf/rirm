import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Signup";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="singup" element={<SignUp />} />
          <Route path="home" element={<Home />} />

        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App