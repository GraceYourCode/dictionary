const PartOfSpeech = ({ meaning }: { meaning: any }) => {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex-center gap-x-3">
        <p className="italic dark:text-white font-semibold">
          {meaning.partOfSpeech}
        </p>
        <span className="border-t w-full"></span>
      </header>

      <p className="text-gray-400">Meaning</p>

      <ol className="list-disc pl-8 text-sm *:mb-4 text-dark-bg dark:text-white">
        {meaning.definitions.map((definition: any, index: number) => (
          <div key={index}>
            <li className="marker:text-purple-700">{definition.definition}</li>
            <span className="text-gray-400">
              {definition.example && `"${definition.example}"`}
            </span>
          </div>
        ))}
      </ol>

      {meaning.synonyms.length > 0 && (
        <footer className="flex gap-x-6">
          <p className="text-gray-400">Synonyms</p>
          <ul className="text-purple-700 font-semibold flex-center gap-3 flex-wrap">
            {meaning.synonyms.map((synonym: any, index: number) => (
              <li key={index}>{synonym}</li>
            ))}
          </ul>
        </footer>
      )}

      {meaning.antonyms.length > 0 && (
        <footer className="flex gap-x-6">
          <p className="text-gray-400">Antonyms</p>
          <ul className="text-purple-700 font-semibold flex-center gap-3 flex-wrap">
            {meaning.antonyms.map((antonym: any, index: number) => (
              <li key={index}>{antonym}</li>
            ))}
          </ul>
        </footer>
      )}
    </div>
  );
};

export default PartOfSpeech;
