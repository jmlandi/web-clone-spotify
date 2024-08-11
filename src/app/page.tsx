import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainNavigation from "./components/Main/MainNavigation";
import MainTitle from "./components/Main/MainTitle";
import MainSubTitle from "./components/Main/MainSubTitle";
import PlaylistHorizontal from "./components/Playlist/PlaylistHorizontal";
import PlaylistVertical from "./components/Playlist/PlaylistVertical";

export default function Home() {
  return (
    <div className="h-screen flex flex-col no-scrollbar overflow-auto">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 mb-20">
          <MainNavigation />
          <MainTitle message="Good afternoon" name="Marcos" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
            <PlaylistHorizontal coverPath="/alice-in-chains.jpg" coverName="Facelift" coverDesc="Album, Alice In Chains" />
            <PlaylistHorizontal coverPath="/hariel.jpg" coverName="Chora Agora, Ri Depois" coverDesc="Album, MC Hariel" />
            <PlaylistHorizontal coverPath="/radiohead.jpg" coverName="In Rainbows" coverDesc="Album, Radiohead" />
            <PlaylistHorizontal coverPath="/kayblack.jpg" coverName="Tempo" coverDesc="Single, KayBlack" />
            <PlaylistHorizontal coverPath="/continuum.jpg" coverName="Continuum" coverDesc="Album, John Mayer" />
            <PlaylistHorizontal coverPath="/matue.jpg" coverName="Reza Do Milhão" coverDesc="Single, Matuê" />
          </div>
          <MainSubTitle message="Made for you!" />
          <div className="flex flex-wrap justify-start gap-3 mt-10">
            <PlaylistVertical
              coverPath="/alice-in-chains.jpg"
              coverName="Daily Mix 1"
              coverDesc="Alice In Chains, grunge rock and more"
            />
            <PlaylistVertical
              coverPath="/hariel.jpg"
              coverName="Daily Mix 2"
              coverDesc="MC Hariel, brazilian funk and more"
            />
            <PlaylistVertical
              coverPath="/kayblack.jpg"
              coverName="Daily Mix 3"
              coverDesc="Kayback, brazilian trap and more"
            />
            <PlaylistVertical
              coverPath="/radiohead.jpg"
              coverName="Daily Mix 4"
              coverDesc="Radiohead, grunge rock and more"
            />
            <PlaylistVertical
              coverPath="/continuum.jpg"
              coverName="Daily Mix 5"
              coverDesc="John Mayer, pop rock and more"
            />
          </div>
          <MainSubTitle message="Perfect for your weekend!" />
          <div className="flex flex-wrap justify-start gap-3 mt-10">
            <PlaylistVertical
              coverPath="/alice-in-chains.jpg"
              coverName="Daily Mix 1"
              coverDesc="Alice In Chains, grunge rock and more"
            />
            <PlaylistVertical
              coverPath="/hariel.jpg"
              coverName="Daily Mix 2"
              coverDesc="MC Hariel, brazilian funk and more"
            />
            <PlaylistVertical
              coverPath="/kayblack.jpg"
              coverName="Daily Mix 3"
              coverDesc="Kayback, brazilian trap and more"
            />
            <PlaylistVertical
              coverPath="/radiohead.jpg"
              coverName="Daily Mix 4"
              coverDesc="Radiohead, grunge rock and more"
            />
            <PlaylistVertical
              coverPath="/continuum.jpg"
              coverName="Daily Mix 5"
              coverDesc="John Mayer, pop rock and more"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
