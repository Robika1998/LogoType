import "../../styles/Header.css";

interface MenuItem {
  label: string;
  dropdownItems?: string[];
}

interface MobileMenuProps {
  isOpen: boolean;
  openDropdown: string | null;
  onClose: () => void;
  onDropdownToggle: (dropdown: string) => void;
  menuItems: MenuItem[];
}

const MobileMenu = ({
  isOpen,
  openDropdown,
  onClose,
  onDropdownToggle,
  menuItems,
}: MobileMenuProps) => {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
      <div className="mobile-menu-header">
        <div className="logo">LOGOTYPE</div>
        <button className="mobile-menu-close" onClick={onClose}>
          ×
        </button>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`mobile-menu-item has-dropdown ${
              openDropdown === item.label ? "open" : ""
            }`}
            onClick={() => item.dropdownItems && onDropdownToggle(item.label)}
          >
            {item.label}
            {item.dropdownItems && (
              <ul className="dropdown-menu">
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem}>{dropdownItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
