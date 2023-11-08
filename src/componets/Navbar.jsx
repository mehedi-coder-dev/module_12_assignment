import { NavLink } from "react-router-dom";
import img from  '../assets/img/ostad.png'


const Navbar = () => {
  return (
    <nav  className='main_nav'>
      <div>
        <img src={img} alt="" />
      </div>
      <ul className="nav_bar">
        <li>
          <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/About">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/Service">Service</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/Blog">Blog</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/Project">Project</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
