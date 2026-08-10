import { useState } from "react";
type Props = {
    onSearch: (query: string) => void;
};
function SearchBar({onSearch}: Props) {  
    const [query, setQuery] = useState<string>("");    
    return(
        <>
        <input 
            type="text" 
            placeholder="Buscar libro..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => onSearch(query)}>Buscar</button>
        </>
    )
}
export default SearchBar;