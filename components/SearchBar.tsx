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
    <form className="dark:bg-dark-bg bg-gray-100 rounded-md py-3 px-5 flex-center gap-4 sm:gap-10" onSubmit={searchHandler}>
      <input
        type="search"
        ref={search}
        placeholder="Enter a word..."
        className="w-full bg-transparent text-dark-bg dark:text-white border-r"
        onFocus={focusHandler}
      />
      <button type="submit">
        <CgSearch className="text-xl text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBar;
