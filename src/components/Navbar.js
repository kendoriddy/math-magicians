import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const closeNav = () => setIsNavOpen(false);

    document.querySelectorAll(".nav-items a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    return () => {
      document.querySelectorAll(".nav-items a").forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
    };
  }, [isNavOpen]);

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
    {
      id: 5,
      path: "/generate-qr",
      text: "QR Code Generator",
    },
  ];

  return (
    <div className="navbar">
      <h2>Math Magician</h2>
      <button className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-items ${isNavOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? "#fe9167" : "white",
                textDecoration: isActive ? "underline" : null,
              })}
              end
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
