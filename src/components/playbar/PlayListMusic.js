import styled from "styled-components";
import { AiOutlineMore } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { IoDiscOutline } from "react-icons/io5";
import { VscNewFolder } from "react-icons/vsc";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";

const StyledPlayListMusic = styled.div`
  display: flex;
  flex-direction: column;

  .play-list-music-inner-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 630px;

    .song-info {
      padding: 10px 0;
      cursor: pointer;

      .cover {
        width: 50px;
        border-radius: 5px;
        margin-right: 20px;
      }

      .title-and-artist {
        .title {
        }
        .artist {
          margin-top: 10px;
          color: #849898;
          font-size: 14px;
        }
      }
    }

    .icons {
      position: relative;
      color: #85a0a0;

      .add-play-list {
        transform: scale(1.5);
        margin-right: 30px;
        cursor: pointer;
      }

      .more {
        transform: scale(1.5);
        cursor: pointer;
      }

      .more-menu-list {
        position: absolute;
        right: 0;
        top: 35px;
        padding: 10px 0;
        border-radius: 3px;
        background-color: white;
        z-index: 30;

        .more-menu {
          display: flex;
          align-items: center;
          padding: 15px;
          width: 180px;
          height: 40px;
          color: black;
          font-size: 15px;
          cursor: pointer;

          &:hover {
            color: blue;
            background-color: #f5f5f5;
          }

          .icon {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

const PlayListMusic = ({
  musicTracks,
  setMusicTracks,
  setTrackIndex,
  setIsMyPlayListClicked,
  selectedSongId,
  setSelectedSongId,
  isMoreMenuClicked,
  setIsMoreMenuClicked,
}) => {
  const mapMusic = musicTracks.map((el, i) => {
    if (el.src !== "")
      return (
        <div className="play-list-music-inner-box" key={el.key}>
          <div
            className="song-info flex-center"
            onClick={() => {
              setTrackIndex(i);
              setIsMoreMenuClicked(false);
            }}
          >
            <img src={el.img} alt="cover" className="cover" />
            <div className="title-and-artist">
              <div className="title">{el.name}</div>
              <div className="artist">{el.artist}</div>
            </div>
          </div>

          <div className="icons">
            <VscNewFolder
              className="add-play-list"
              onClick={() => {
                setSelectedSongId(el.id);
                setIsMyPlayListClicked(true);
                setIsMoreMenuClicked(false);
              }}
            />
            <AiOutlineMore
              className="more"
              onClick={() => {
                setSelectedSongId(el.id);
                if (el.id === selectedSongId)
                  setIsMoreMenuClicked(!isMoreMenuClicked);
                else setIsMoreMenuClicked(true);
              }}
            />
            {/* el.id !== selectedSongId 가 없으면 static 포지션을 가진 부모의 menulist가 출력됨 */}
            {el.id !== selectedSongId || !isMoreMenuClicked || (
              <div
                className="more-menu-list"
                onClick={() => {
                  setSelectedSongId(el.id);
                }}
              >
                <div className="more-menu">
                  <IoDiscOutline size="18" className="icon" />
                  앨범 정보
                </div>
                <div className="more-menu">
                  <BiMicrophone size="18" className="icon" />
                  아티스트 정보
                </div>
                <div className="more-menu">
                  <IoMdHeartEmpty size="18" className="icon" />
                  좋아요
                </div>
              </div>
            )}
          </div>
        </div>
      );
  });

  return <StyledPlayListMusic>{mapMusic}</StyledPlayListMusic>;
};

export default PlayListMusic;
