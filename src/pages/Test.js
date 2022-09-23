import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledTest = styled.div`
  .test {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

    .song-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      width: 200px;
      padding: 10px;
      margin: 10px;
      background-color: #cccccc;
      font-weight: 700;
    }
  }
`;

const Test = ({ setTrackIndex, musicTracks, setMusicTracks }) => {
  const [testSongs, setTestSongs] = useState([
    { key: 0, id: 0, name: "", artist: "", img: "", src: "" },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/music-track-data.json")
      .then((res) => res.json())
      .then((data) => {
        setTestSongs(data);
      });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("tracks", JSON.stringify(musicTracks));
    if (musicTracks.length !== 0) setTrackIndex(0);
  }, [musicTracks]);

  return (
    <StyledTest>
      <div className="test">
        {testSongs.map((el, i) => {
          return (
            <div className="song-box" key={el.key}>
              <div>{el.name}</div>
              <button
                onClick={() => {
                  if (!musicTracks.includes(el))
                    setMusicTracks([el, ...musicTracks]);
                  else alert("현재 재생목록에 이미 존재하는 곡입니다.");
                }}
              >
                재생
              </button>
            </div>
          );
        })}
      </div>
    </StyledTest>
  );
};

export default Test;
