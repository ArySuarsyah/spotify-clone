import PlaylistCard from "../playlistCard/PlaylistCard";
import HomeAside from "./homePageAside/HomeAside";

export default function MainLayout({ children }: any) {
  return (
    <div className="bg-black grid grid-cols-4 p-2 gap-3">
      <div className="col-span-1">
        <HomeAside />
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
}
