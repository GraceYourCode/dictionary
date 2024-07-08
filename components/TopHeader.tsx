import Image from "next/image";
import dictionary from "@/public/dictionary.png";
import ThemeController from "./ThemeController";

const TopHeader = () => {
  return (
    <div className="flex-center justify-between">
      <Image
        src={dictionary}
        alt="dictionary logo image"
        className="w-8 dark:invert"
        priority={true}
      />
      <ThemeController />
    </div>
  );
};

export default TopHeader;
