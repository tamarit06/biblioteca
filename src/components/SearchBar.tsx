import "./SearchBar.css";
import { useState } from "react";
type Props = {
  onSearch: (query: string) => void;
};
function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState<string>("");
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar libro..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={() => onSearch(query)}>
        Buscar
      </button>
    </div>
  );
}
export default SearchBar;
