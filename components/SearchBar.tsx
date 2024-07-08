import { ChangeEvent, LegacyRef } from "react";
import { CgSearch } from "react-icons/cg";

interface SearchBarProps {
  focusHandler: () => void;
  searchHandler: () => void;
  search: LegacyRef<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  focusHandler,
  search,
  searchHandler,
}) => {
  return (
    <div className="dark:bg-dark-bg bg-gray-100 rounded-md py-3 px-5 flex-center gap-4 sm:gap-10">
      <input
        type="search"
        ref={search}
        placeholder="Enter a word..."
        className="w-full bg-transparent text-dark-bg dark:text-white"
        onFocus={focusHandler}
      />
      <button onClick={searchHandler}>
        <CgSearch className="text-xl text-gray-500" />
      </button>
    </div>
  );
};

export default SearchBar;
