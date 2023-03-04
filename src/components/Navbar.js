import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/calculate",
      text: "Calculator",
    },

    {
      id: 3,
      path: "/roman",
      text: "Roman",
    },
    {
      id: 4,
      path: "/quotes",
      text: "Quotes",
    },
  ];

  return (
    <div className="navbar">
      <h2>Math Magician</h2>
      <ul className="nav-items">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? "#fe9167" : "white",
                textDecoration: isActive ? "underline" : null,
              })} end
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
