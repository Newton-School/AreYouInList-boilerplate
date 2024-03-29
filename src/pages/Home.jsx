import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div id="loginPage">
      <h1>Type your name below</h1>
      <input type="text" id="name" />
      <h1>Type puzzle answer below 8/4+2*6-4 :</h1>
      <input type="number" id="answer" />
      <button>Click</button>
    </div>
  );
}
