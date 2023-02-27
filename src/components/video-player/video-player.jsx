import { useStoreState } from "easy-peasy";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const playlists = useStoreState((actions) => actions.playlists.data);

  const { playlistId } = useParams();
  const current = playlists[playlistId];
  if (!current) return;

  let videoId = current.playListItems.map((item) => {
    let videoURL = `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`;
    return videoURL;
  });

  console.log("videoId", videoId);

  const youtubeOpts = {
    playerVars: {
      autoplay: 1,
      origin: window.location.origin,
    },
  };

  const playerConfig = {
    file: {
      forceVideo: true,
    },
  };

  return (
    <div>
      <div>
        <h4>{current.playlistTitle}</h4>
        <>
          {current.playListItems.map((item, index) => (
            <div className="player-wrapper">
              {console.log(item)}
              <ReactPlayer
                key={index}
                className="react-player"
                url={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
                width="100%"
                height="100%"
                config={{
                  file: {
                    forceVideo: true,
                  },
                  youtube: {
                    playerVars: {
                      listType: "playlist",
                      list: playlistId,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </div>
          ))}
        </>
        <p>{current.playlistDescription}</p>
      </div>
      <div></div>
    </div>
  );
};

export default VideoPlayer;

// {current.playListItems.map((item, index) => (
//     <>
//       {console.log(item)}
//       <ReactPlayer
//         key={index}
//         className="react-player"
//         url={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
//         width="100%"
//         height="100%"
//       />
//     </>
//   ))}

{
  /* <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            // url={videoId}
            url={`https://www.youtube.com/playlist?list=${playlistId}`}
            width="100%"
            height="100%"
            controls={true}
          />
        </div> */
}

// {current.playListItems.map((item, index) => (
//   <div className="player-wrapper" key={index}>
//     {console.log(item)}
//     <ReactPlayer
//       className="react-player"
//       url={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
//       width="100%"
//       height="100%"
//       config={{
//         youtube: {
//           playerVars: {
//             origin: "http://localhost:8080",
//             showinfo: 1,
//           },
//         },
//       }}
//     />
//   </div>
// ))}

{
  /* <div className="player-wrapper">
  <ReactPlayer
    className="react-player"
    url={videoId[0]}
    // url={`https://www.youtube.com/playlist?list=${playlistId}`}
    width="100%"
    height="100%"
    controls={true}
    youtube={youtubeOpts}
    // config={playerConfig}
    config={{
      youtube: {
        playerVars: {
          listType: "playlist",
          list: playlistId,
        },
      },
    }}
  />
</div>; */
}
