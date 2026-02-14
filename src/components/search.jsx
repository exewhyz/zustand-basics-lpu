import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    //search using your data
    
  }

  return (
    <div className="flex shadow-lg shadow-gray-300 px-4 py-2 w-1/3 rounded-2xl gap-2">
      <input 
        type="text" 
        className="w-full outline-0" 
        value={search} 
        onChange={handleSearch}
    />
      <SearchIcon />
    </div>
  );
};

export default Search;
