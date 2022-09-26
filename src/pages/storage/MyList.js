import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const StyledMyList = styled.div`
  .my-list-inner-box {
    display: flex;
    flex-wrap: wrap;
    padding: 80px 0 60px 0;

    .play-list-container {
      display: flex;
      width: 480px;
      margin-right: 20px;
      margin-bottom: 20px;
      /* background-color: #777777; */

      .play-list-cover {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        .first-box {
          width: 170px;
          height: 170px;
          border-radius: 5px;
          background-color: #f3f3f3;
        }

        .second-box {
          width: 185px;
          height: 185px;
          margin-top: -165px;
          border-radius: 5px;
          background-color: #e9e9e9;
        }

        .third-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 200px;
          margin-top: -180px;
          border-radius: 5px;
          background-color: #dfdfdf;
          color: #3f3fff;

          &:hover {
            filter: brightness(70%);
          }
        }

        .play {
          position: absolute;
          bottom: 25px;
          right: 22.5px;
          color: white;
          transform: scale(1.75);
          cursor: pointer;

          &:hover {
            color: #3f3fff;
          }
        }
      }

      .song-info {
        margin: 30px 20px;

        .title {
          color: black;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;

          &:hover {
            color: #3f3fff;
          }
        }

        .quantity {
          margin: 25px 0 10px 0;
          font-size: 14px;
        }

        .date {
          font-size: 14px;
          color: #969696;
        }

        .add-list {
          margin-top: 70px;
          color: #3f3fff;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
  }
`;

const MyList = ({ musicTracks, setMusicTracks }) => {
  const [myListData, setMyListData] = useState([
    {
      userId: 0,
      playlistId: 0,
      title: "",
      songTotalCount: "",
      albumImage: "",
      createdAt: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/storage", {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setMyListData(data.data);
      });
  }, []);

  return (
    <StyledMyList>
      <div className="my-list-inner-box">
        {myListData.map((el, i) => (
          <PlayListContainer
            key={el.playlistId}
            data={el}
            musicTracks={musicTracks}
            setMusicTracks={setMusicTracks}
          />
        ))}
        <div className="play-list-container">
          <div className="play-list-cover">
            <div className="first-box" />
            <div className="second-box" />
            <div className="third-box">
              <AiOutlinePlus size="50" />
            </div>
          </div>
          <div className="song-info">
            <div className="add-list">새로운 리스트 만들기</div>
          </div>
        </div>
      </div>
    </StyledMyList>
  );
};

const PlayListContainer = ({ data, musicTracks, setMusicTracks }) => {
  return (
    <div className="play-list-container">
      <Link
        to={`/detail/mylist/${data.playlistId}`}
        className="play-list-cover"
      >
        <div className="first-box" />
        <div className="second-box" />
        <img src={data.albumImage} className="third-box" />
        <FaPlay
          className="play"
          onClick={() => {
            fetch("localhost:8000/play/addsongs/song/1", {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJsZWVAY29kZXIuY29tIiwiaWF0IjoxNjY0MTc1NDY3LCJleHAiOjE2NjQyNjE4Njd9.9pNW1D-OA_0p6__0CPyBaD-0Xn1nxmJGtp9Sje5uDYY",
              },
            })
              .then((res) => res.json())
              .then((plData) => {
                const musicTracksId = musicTracks.map((el) => el.songId);
                const filteredNewTracks = plData.filter(
                  (el, i) => musicTracksId.includes(el.songId) === false
                );
                setMusicTracks([...filteredNewTracks, ...musicTracks]);
              });
          }}
        />
      </Link>
      <div className="song-info">
        <Link to={`/detail/mylist/${data.playlistId}`} className="title">
          {data.title}
        </Link>
        <div className="quantity">총 {data.songTotalCount} 곡</div>
        <div className="date">{data.createdAt}</div>
      </div>
    </div>
  );
};

export default MyList;
