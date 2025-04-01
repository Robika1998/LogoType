import "../../styles/Header.css";
import Search from "../../components/Search/Search";
import DesktopMenu from "../../components/DesktopMenu/DesktopMenu";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { useSearch } from "../../hooks/useSearch";
import { menuItems } from "../../data/menuItems";

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const isVisible = useScrollVisibility();
  const {
    isMobileMenuOpen,
    openMobileDropdown,
    toggleMobileMenu,
    toggleMobileDropdown,
  } = useMobileMenu();
  const { searchTerm, isSearchVisible, handleSearch, toggleSearch } = useSearch(
    { onSearch }
  );

  return (
    <header className={`header ${!isVisible ? "header-hidden" : ""}`}>
      <div className="header-title">
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      <div className="logo">LOGOTYPE</div>

      <div className="search">
        {isSearchVisible && (
          <Search searchTerm={searchTerm} onSearch={handleSearch} />
        )}
        <div onClick={toggleSearch} style={{ cursor: "pointer" }}>
          🔍︎
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        openDropdown={openMobileDropdown}
        onClose={toggleMobileMenu}
        onDropdownToggle={toggleMobileDropdown}
        menuItems={menuItems}
      />

      <DesktopMenu menuItems={menuItems} />
    </header>
  );
};

export default Header;
