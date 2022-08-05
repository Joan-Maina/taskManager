import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />}></Route>
        <Route path="/home" element={<Landing />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
