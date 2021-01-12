import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
 
function NavBar() {
  const [sidebar] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: "B8B8B8" }}>
        <div className={sidebar ? "nav-menu active" : "bottomnav"}>
          <ul className="navcontent">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;