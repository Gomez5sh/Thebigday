import React, { useState } from "react";
import Drawer from "../organisms/Drawer";
import useGetAxios from "../hooks/useGetAxios";
import play from "../../assets/play.png";
import lyric from "../../assets/lyric.png";
import DrawerTwo from "../organisms/DrawerTwo";

const Songs = ({ stataSongs, setStataSongs, closeSongs }) => {
  const songs = useGetAxios({ endpoint: "songs" });
  const [isOpen, setIsOpen] = useState(false);
  const [stateSong, setStateSong] = useState({
    artist: "",
    lyrics: "",
    song: "",
    image: "",
    title: "",
  });

  return (
    <>
      <Drawer
        close={closeSongs}
        isOpen={stataSongs}
        setIsOpen={setStataSongs}
        title="NUESTRO GRAN DÍA"
        subtitle="Nuestro gran día en canciones"
        description="¡Den gracias al Señor, porque él es bueno!
        Su fiel amor perdura para siempre. - 1 Crónicas 16:34"
        children={
          <article className="min-h-full w-full p-4 lg:pb-10 flex flex-col space-y-6 overflow-y-scroll">
            <header className="p-4 font-sans not-italic text-xl leading-6">
              Elige una canción
            </header>
            <div className="flex flex-col lg:p-4 lg:space-y-4">
              <h1 className="font-sans lg:p-5 mx-50 not-italic font-bold text-xl leading-10">
                Nuestras canciones
              </h1>
            </div>
            <div className="flex flex-col lg:p-4 space-y-4 justify-center items-center">
              <table className="table w-full lg:w-8/12">
                <thead className="border-b-2 border-slate-900/80">
                  <tr>
                    <th className="p-3 text-sm font-sans tracking-wide text-center italic whitespace-pre leading-snug">
                      # Canción / Artista
                    </th>
                    <th className="p-3 text-sm font-sans tracking-wide text-center italic whitespace-pre leading-snug">
                      Acciones
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {songs.data &&
                    songs.data.map((song, index) => {
                      const handleClick = (event) => {
                        event.preventDefault();
                        setStateSong({
                          artist: song.artist,
                          lyrics: song.lyrics,
                          song: song.title,
                          image: song.image,
                          title: song.title,
                        });
                        setIsOpen(true);
                      };
                      return (
                        <tr
                          key={index}
                          className="border-b-2 border-dashed border-grey-500"
                        >
                          <td className="p-3">
                            <div className="flex items-center flex-col lg:flex-row lg:justify-between w-3/5">
                              <div className="flex-shrink-0 h-auto w-full lg:w-1/2">
                                <img
                                  className="aspect-auto object-cover h-auto w-full p-1 lg:p-4 m-2 shadow-2xl border border-gray-100 "
                                  src={song.image}
                                  alt="avatar"
                                />
                              </div>
                              <div className="lg:mb-4 w-full lg:w-1/2 lg:p-5">
                                <div className="text-gray-900 flex flex-wrap text-center font-bold justify-center text-sm lg:justify-start lg:text-xl mb-2">
                                  {song.title}
                                </div>
                                <p className="text-gray-700 text-sm lg:text-base flex flex-wrap justify-center lg:justify-start">
                                  {song.artist}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center justify-center w-full">
                                <img
                                  className="h-auto w-full p-1 m-2 cursor-pointer hover:shadow-2xl hover:shadow-[#9f7a6e]"
                                  src={play}
                                  alt="play"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    window.open(song.song_url, "", "_blank");
                                  }}
                                />
                                <img
                                  className="h-auto w-full p-1 m-2 cursor-pointer hover:shadow-2xl hover:shadow-[#9f7a6e]"
                                  src={lyric}
                                  alt="lyric"
                                  onClick={(event) => {
                                    handleClick(event);
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <DrawerTwo
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              close={() => setIsOpen(false)}
              header={
                <div className="items-center w-3/5">
                  <div className="lg:mb-4 w-full lg:p-1">
                    <p className="text-white text-sm lg:text-base flex flex-wrap justify-start">
                      {stateSong.artist}
                    </p>
                    <div className="text-white flex flex-wrap text-center font-bold text-sm lg:text-xl mb-2">
                      {stateSong.title}
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <img
                      className="aspect-auto object-cover h-auto w-full m-2 shadow-2xl border border-gray-100 "
                      src={stateSong.image}
                      alt="avatar"
                    />
                  </div>
                </div>
              }
              children={
                <>
                  <h3 className="p-4 font-sans not-italic font-normal text-xl leading-6">
                    Cantemos juntos
                  </h3>
                  <p className="p-4 font-sans not-italic font-bold text-xl leading-10">
                    Letras
                  </p>
                  <span className="p-4 italic whitespace-pre font-sans leading-4 text-sm">
                    {stateSong.lyrics}
                  </span>
                </>
              }
            />
          </article>
        }
      />
    </>
  );
};

export default Songs;
