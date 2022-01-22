import React, { useEffect, useState } from "react";
import DrawerLayout from "./DrawerLayout";
import axios from "axios";

const Songs = ({ close, isOpen, setIsOpen }) => {
  const url = process.env.REACT_APP_BACKEND;

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    try {
      axios(url + "/api/v1/songs/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          setSongs(response.data?.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DrawerLayout
      close={close}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="THE BIG DAY"
      subtitle="Owr big moments in songs"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore."
      Children={
        <div className="bg-red-200">
          {songs.map((song) => {
            return (
              <>
                <img src={song.image} alt="song" />
                <div>
                  {song.title} - {song.artist}
                </div>
                <div>
                  <a href={song.song_url}>Play</a>
                  <p>{song.duration}</p>
                </div>
                <div>
                  {song.lyrics}
                </div>
              </>
            );
          })}
        </div>
      }
    />
  );
};

export default Songs;
