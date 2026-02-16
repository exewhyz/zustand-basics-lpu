import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="focus-within:border focus-within:ring-1 focus-within:ring-blue-400 focus-within:border-blue-400 flex shadow-lg focus-within:shadow-gray-300/80 px-4 py-2 w-1/3 max-w-2xl rounded-2xl gap-2">
      <input
        type="text"
        className="w-full outline-0 placeholder:text-sm placeholder:text-gray-400"
        value={search}
        onChange={handleSearch}
        placeholder="Type to Search..."
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
