import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import formatTime from "../../utils/formatTime";
import ChanelBar from "./ChanelBar";
import Description from "./Description";
import PrevNext from "./PrevNext";

import VideoContext from "./videoContext";

const VideoPlayer = () => {
  // get playlist data
  const playlists = useStoreState((actions) => actions.playlists.data);
  const currentPlayer = useStoreActions(
    (actions) => actions.currentPlayerItems
  );

  // current player video & action
  const currentVideo = useStoreActions((actions) => actions.currentPlayerItems);
  const currentPlayerVideo = useStoreState(
    (actions) => actions.currentPlayerItems.currentVideo
  );

  // get url params from url
  const { playlistId } = useParams();
  const current = playlists[playlistId];
  if (!current) return;

  const { chanelName } = { ...current };

  // its need to testing before its remove
  // useEffect(() => {
  //   currentPlayer.addPlayer(current.playlistItems);
  // }, []);

  const {
    title,
    description,
    contentDetails: { videoId },
  } = current.playlistItems[currentPlayerVideo - 1];

  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef(null);

  // handle video progress
  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  // handle video time click
  const handleTimeClick = (timeInSeconds) => {
    playerRef.current.seekTo(timeInSeconds);
  };

  return (
    <VideoContext.Provider
      value={{ playlistId, videoId, currentTime, handleTimeClick }}
    >
      <Box>
        <Box>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="100%"
              onProgress={handleProgress}
              controls={true}
            />
          </Box>
        </Box>
        <PrevNext
          currentPlayerVideo={currentPlayerVideo}
          currentVideo={currentVideo}
          current={current}
        />
        <Typography
          sx={{ cursor: "pointer", marginTop: 4 }}
          onClick={() => handleTimeClick(currentTime)}
          variant="body2"
          color="text.secondary"
          component="span"
        >
          Current Time: {formatTime(currentTime)}
        </Typography>
        <Box>
          <Typography
            sx={{ marginTop: 3 }}
            variant="subtitle2"
            color="text.primary"
            component="span"
          >
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
