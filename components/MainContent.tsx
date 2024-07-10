import Header from "./ContentHeader";
import PartOfSpeech from "./PartOfSpeech";

const MainContent = ({
  searchContents,
  search,
}: {
  searchContents: any;
  search: () => void;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <Header
        phonetic={searchContents.phonetic}
        word={searchContents.word}
        audio={
          searchContents.phonetics.length > 0 &&
          searchContents.phonetics.filter(
            (phonetic: any) => phonetic.audio !== ""
          ).length > 0 &&
          searchContents.phonetics.filter(
            (phonetic: any) => phonetic.audio !== ""
          )[0].audio
        }
      />

      {searchContents.meanings.map((meaning: any, index: number) => (
        <PartOfSpeech search={search} meaning={meaning} key={index} />
      ))}
    </div>
  );
};

export default MainContent;
