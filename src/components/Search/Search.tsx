interface SearchProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export default function Search({ searchTerm, onSearch }: SearchProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: "100%", height: "10%" }}
      />
    </div>
  );
}
