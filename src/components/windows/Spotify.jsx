import React from 'react';
import MacWindow from './MacWindow';
import './spotif.scss'
const Spotify = ({windowName,setWindowsState}) => {
  return (
    <MacWindow width='35vw'  windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"         
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;