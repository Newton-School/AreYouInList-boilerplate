import { useContext } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  return (
    <div id="dashboardPage">
      <h1>Welcome to Dashboard name</h1>
      <button>Log Out</button>
    </div>
  );
}

export default Dashboard;
