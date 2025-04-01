import { useState } from "react";
import "../../styles/Header.css";

interface MenuItem {
  label: string;
  dropdownItems?: string[];
}

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMouseEnter = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: true }));
  };

  const handleMouseLeave = (label: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: false }));
  };

  return (
    <nav className="desktop-menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={item.dropdownItems ? "has-dropdown" : ""}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={() => handleMouseLeave(item.label)}
          >
            {item.label}
            {item.dropdownItems && openDropdowns[item.label] && (
              <ul className="dropdown-menu">
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem}>
                    <span>{dropdownItem}</span>
                    <span className="arrow">▸</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
