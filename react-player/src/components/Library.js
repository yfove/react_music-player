import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-song"></div>
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
    </div>
  );
};

export default Library;
