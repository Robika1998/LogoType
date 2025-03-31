import { useState, useEffect } from "react";
import "../../styles/Header.css";
import Search from "../../components/Search/Search";

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPostDropdownOpen, setIsPostDropdownOpen] = useState(false);
  const [isDemosDropdownOpen, setIsDemosDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 200) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          🔍
        </div>
      </div>

      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-header">
          <div className="logo">LOGOTYPE</div>
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            ×
          </button>
        </div>
        <ul>
          <li className="mobile-menu-item has-dropdown">Demos</li>
          <li className="mobile-menu-item has-dropdown">Post</li>
          <li className="mobile-menu-item has-dropdown">Features</li>
          <li className="mobile-menu-item has-dropdown">Categories</li>
          <li className="mobile-menu-item ">Shop</li>
          <li className="mobile-menu-item">Buy Now</li>
        </ul>
      </div>

      <nav className="desktop-menu">
        <ul>
          <li
            className="has-dropdown"
            onMouseEnter={() => setIsDemosDropdownOpen(true)}
            onMouseLeave={() => setIsDemosDropdownOpen(false)}
          >
            Demos
            {isDemosDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <span>Demo 1</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Demo 2</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Demo 3</span> <span className="arrow">▸</span>
                </li>
              </ul>
            )}
          </li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setIsPostDropdownOpen(true)}
            onMouseLeave={() => setIsPostDropdownOpen(false)}
          >
            Post
            {isPostDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <span>Post Header</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Post Layout</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Share Buttons</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Gallery Post</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Video Post</span> <span className="arrow">▸</span>
                </li>
              </ul>
            )}
          </li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
            onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
          >
            Features
            {isFeaturesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <span>Feature 1</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Feature 2</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Feature 3</span> <span className="arrow">▸</span>
                </li>
              </ul>
            )}
          </li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
            onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
          >
            Categories
            {isCategoriesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <span>Category 1</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Category 2</span> <span className="arrow">▸</span>
                </li>
                <li>
                  <span>Category 3</span> <span className="arrow">▸</span>
                </li>
              </ul>
            )}
          </li>
          <li>Shop</li>
          <li>Buy Now</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
