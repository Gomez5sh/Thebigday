import React from "react";
import Drawer from "../organisms/Drawer";
import useGetAxios from "../hooks/useGetAxios";

const Songs = ({ stataSongs, setStataSongs, closeSongs }) => {
  const songs = useGetAxios({ endpoint: "songs" });

  console.log(songs);

  return (
    <Drawer
      close={closeSongs}
      isOpen={stataSongs}
      setIsOpen={setStataSongs}
      title="THE BIG DAY"
      subtitle="Owr big moments
      in songs"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore."
      Children={
        <div className="bg-red-200">
          {/*songs.map((song) => {
            return (
              <>
                {songs.map((song) => (
                  <div className="flex flex-col justify-center columns-auto p-24 items-center w-auto max-h-screen overflow-y-scroll snap snap-mandatory object-top">
                    <img src={song.image} alt="song" />
                    <div>
                      {song.title} - {song.artist}
                    </div>
                    <div>
                      <a href={song.song_url}>Play</a>
                      <p>{song.duration}</p>
                    </div>
                    <div>{song.lyrics}</div>
                  </div>
                ))}
              </>
            );
          })*/}
        </div>
      }
    />
  );
};

export default Songs;
