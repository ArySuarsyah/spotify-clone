import Image from "next/image";
import logoWhite from "../../../public/Spotify_Logo_RGB_White.png";

const Header = () => {
  return (
    <div className="bg-primary py-8 px-14 w-full">
      <Image src={logoWhite} alt="spotify logo" width={120} height={130} />
    </div>
  );
};

export default Header;
