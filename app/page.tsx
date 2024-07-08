"use client";

import MainContent from "@/components/MainContent";
import SearchBar from "@/components/SearchBar";
import TopHeader from "@/components/TopHeader";
import { getData } from "@/utils/functions";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import sorryIcon from "@/public/sorry.png";
import bookAnimate from "@/public/search-book.gif";
import failedIcon from "@/public/remove.png";

const Index = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<any>();

  const searchHandler = async (e: FormEvent) => {
    e.preventDefault();
    setSearchResults(await getData(searchRef.current?.value as string));
  };

  return (
    <div className="dark:bg-black min-h-screen bg-white flex flex-col items-center">
      <div className="w-11/12 sm:w-4/5 md:w-3/4 xl:w-1/2 pt-8 pb-16 flex flex-col gap-y-8">
        <TopHeader />
        <SearchBar
          searchHandler={searchHandler}
          search={searchRef}
        />
        {searchResults ? (
          searchResults.info === "found" ? (
            <MainContent searchContents={searchResults && searchResults.data} />
          ) : searchResults.info === "not_found" ? (
            <div className="flex-center flex-col gap-10 text-2xl *:text-center dark:text-white">
              <Image src={sorryIcon} alt="sorry sticker" className="w-32" />
              <p>{searchResults.data.message}</p>
            </div>
          ) : (
            <div className="flex-center flex-col gap-10 text-2xl *:text-center dark:text-white">
              <Image src={failedIcon} alt="failed sticker" className="w-32" />
              <p>{searchResults}</p>
              <span>Check your internet connection and try again</span>
            </div>
          )
        ) : (
          <div className="flex-center flex-col gap-10 text-2xl *:text-center dark:text-white">
            <Image
              src={bookAnimate}
              alt="dictionary animated gif"
              className="w-44 dark:invert"
              priority={true}
            />
            <p>Enter a word to search!!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
