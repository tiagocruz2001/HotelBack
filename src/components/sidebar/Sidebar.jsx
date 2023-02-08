import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Users from "@mui/icons-material/PersonOutline";
import Rooms from "@mui/icons-material/Hotel";
import Hotel from "@mui/icons-material/House";
import Logout from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CidalHotels</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <br></br>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <br></br>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Users className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <br></br>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <Hotel className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <br></br>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <Rooms className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <br></br>
          <Link to="/login" style={{ textDecoration: "none" }}>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
