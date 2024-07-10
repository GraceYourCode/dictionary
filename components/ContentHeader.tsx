import { useEffect, useRef, useState } from "react";
import { IoIosPlay } from "react-icons/io";

const Header = ({
  word,
  phonetic,
  audio,
}: {
  word: string;
  phonetic: string;
  audio?: string;
}) => {
  const [audioSource, setAudioSource] = useState(audio);
  const sound = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setAudioSource(audio);
  }, [audio, audioSource]);

  const playSound = () => {
    sound.current?.load();
    sound.current?.play();
  };

  return (
    <div className="flex-center justify-between text-black dark:text-white">
      <main>
        <h1 className="text-3xl font-semibold">{word}</h1>
        <p className="text-purple-300 dark:text-purple-700">{phonetic}</p>
      </main>
      {audioSource && (
        <>
          <audio controls className="hidden" ref={sound}>
            <source src={audioSource} type="audio/mpeg" />
          </audio>

          <button
            className="w-12 h-12 rounded-full bg-purple-300 dark:bg-purple-200/80 flex-center justify-center text-2xl text-purple-700"
            onClick={playSound}
          >
            <IoIosPlay />
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
