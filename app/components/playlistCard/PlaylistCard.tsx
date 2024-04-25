"use client";
import CardList from "./cardList/CardListPlaylist"
import Link from "next/link";

const PlaylistCard = () => {
  return (
    <div className="text-white bg-primary p-5">
      <div className="grid grid-cols-2 justify-between">
        <Link href={"#"} className="font-bold text-2xl hover:underline">
          Playlist Spotify
        </Link>
        <Link href={"#"} className="hover:underline text-end text-[#afafaf]">
          Tampilkan semua
        </Link>
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default PlaylistCard;
