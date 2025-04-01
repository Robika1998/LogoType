import { useState, useEffect } from "react";

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  return {
    isMobileMenuOpen,
    openMobileDropdown,
    toggleMobileMenu,
    toggleMobileDropdown,
  };
};
