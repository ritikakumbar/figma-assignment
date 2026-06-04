import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const menu = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>

      <ul className="nav-links">
        {menu.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={active === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="btn">Sign Up</button>
    </nav>
  );
}