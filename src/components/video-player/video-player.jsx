import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import formatTime from "../../utils/formatTime";
import ChanelBar from "./ChanelBar";
import Description from "./Description";
import PrevNext from "./PrevNext";

import VideoContext from "./videoContext";

const VideoPlayer = () => {
  const playlists = useStoreState((actions) => actions.playlists.data);
  const currentPlayer = useStoreActions(
    (actions) => actions.currentPlayerItems
  );

  // get current player items
  const currentPlayerItems = useStoreState(
    (actions) => actions.currentPlayerItems.items
  );

  // current player action
  const currentVideo = useStoreActions((actions) => actions.currentPlayerItems);

  const currentPlayerVideo = useStoreState(
    (actions) => actions.currentPlayerItems.currentVideo
  );

  const { playlistId } = useParams();
  const current = playlists[playlistId];
  if (!current) return;

  const { chanelName, channelTitle, playlistTitle } = { ...current };

  useEffect(() => {
    currentPlayer.addPlayer(current.playlistItems);
  }, []);
  // console.log("currentPlayerItems", currentPlayerItems);

  let videoId =
    current.playlistItems[currentPlayerVideo - 1].contentDetails.videoId;
  const { title, description } = current.playlistItems[currentPlayerVideo - 1];

  const [notes, setNotes] = useState([
    { time: 10, text: "Note 1" },
    { time: 20, text: "Note 2" },
    { time: 30, text: "Note 3" },
  ]);

  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef(null);

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleTimeClick = (timeInSeconds) => {
    playerRef.current.seekTo(timeInSeconds);
  };

  return (
    <VideoContext.Provider value={{ playlistId, videoId, currentTime }}>
      <Box>
        <Box>
          <>
            <Box className="player-wrapper">
              <ReactPlayer
                className="react-player"
                // url={videoId}
                ref={playerRef}
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width="100%"
                height="100%"
                onProgress={handleProgress}
                controls={true}
              />
            </Box>
          </>
        </Box>
        <PrevNext
          currentPlayerVideo={currentPlayerVideo}
          currentVideo={currentVideo}
          current={current}
        />
        <p
          sx={{ cursor: "pointer" }}
          onClick={() => handleTimeClick(currentTime)}
        >
          Current Time: {formatTime(currentTime)}
        </p>
        <Box>
          <Typography sx={{ marginTop: 3 }} variant="h5" color="text.primary">
            {title}
          </Typography>
        </Box>
        <ChanelBar chanelName={chanelName} />
        <Divider />
        <Description description={description} />
      </Box>
    </VideoContext.Provider>
  );
};

export default VideoPlayer;
