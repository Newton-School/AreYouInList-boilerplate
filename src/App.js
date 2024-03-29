import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [name, setName] = useState("");
  const answer = "10";
  const names = ["jai", "karan", "piyush", "rahul"];

  return <RouterProvider />;
};

export default App;
