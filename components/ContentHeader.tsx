import { IoIosPlay } from "react-icons/io";

const Header = ({word, phonetic}: {word: string, phonetic: string}) => {
  return (
    <div className="flex-center justify-between text-black dark:text-white">
      <main>
        <h1 className="text-3xl font-semibold">{word}</h1>
        <p className="text-purple-300 dark:text-purple-700">{phonetic}</p>
      </main>
      <button className="w-12 h-12 rounded-full bg-purple-300 dark:bg-purple-200/80 flex-center justify-center text-2xl text-purple-700">
        <IoIosPlay />
      </button>
    </div>
  );
};

export default Header;
