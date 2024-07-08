import Header from "./ContentHeader";
import PartOfSpeech from "./PartOfSpeech";

const MainContent = ({ searchContents }: { searchContents: any }) => {
  console.log(searchContents, searchContents.word, searchContents.phonetic);
  return (
    <div className="flex flex-col gap-10">
      <Header phonetic={searchContents.phonetic} word={searchContents.word} />

      {searchContents.meanings.map((meaning: any, index: number) => (
        <PartOfSpeech meaning={meaning} key={index} />
      ))}
    </div>
  );
};

export default MainContent;
