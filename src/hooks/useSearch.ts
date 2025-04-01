import { useState } from "react";

interface UseSearchProps {
  onSearch: (term: string) => void;
}

export const useSearch = ({ onSearch }: UseSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return {
    searchTerm,
    isSearchVisible,
    handleSearch,
    toggleSearch,
  };
};
