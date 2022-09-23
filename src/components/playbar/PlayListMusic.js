import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMore } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { IoDiscOutline } from "react-icons/io5";
import { VscNewFolder } from "react-icons/vsc";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdEqualizer } from "react-icons/md";

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

      .checkbox {
        margin-right: 20px;
      }
      .cover {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 20px;
        background-size: cover;
      }

      .playingCover {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 20px;
        color: #3f3fff;
        background-size: cover;
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

    .playing-title-and-artist {
      color: #3f3fff;
      .title {
      }
      .artist {
        margin-top: 10px;
        color: #3f3fff;
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
          color: #3f3fff;
          background-color: #f5f5f5;
        }

        .icon {
          margin-right: 10px;
          transform: scale(1.25);
        }
      }
    }
  }
`;

const PlayListMusic = ({
  musicTracks,
  setMusicTracks,
  trackIndex,
  setTrackIndex,
  setIsMyPlayListClicked,
  selectedSongId,
  setSelectedSongId,
  isMoreMenuClicked,
  setIsMoreMenuClicked,
  isEditClicked,
  checkedList,
  onCheckedElement,
}) => {
  const mapMusic = musicTracks.map((el, i) => {
    if (el.src !== "")
      return (
        <div className="play-list-music-inner-box" key={el.key}>
          <div
            className="song-info flex-center"
            onClick={() => {
              if (isEditClicked === false) setTrackIndex(i);
              else if (isEditClicked === true)
                onCheckedElement(checkedList.includes(el.id), el.id);
              setIsMoreMenuClicked(false);
            }}
          >
            {!isEditClicked || (
              <input
                type="checkbox"
                className="checkbox"
                value={el.id}
                checked={checkedList.includes(el.id) ? true : false}
                onChange={() => {}}
              />
            )}
            <div
              style={{
                backgroundImage:
                  trackIndex === i
                    ? "linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(" +
                      el.img +
                      ")"
                    : "url(" + el.img + ")",
              }}
              className={
                trackIndex === i
                  ? "playingCover flex-center"
                  : "cover flex-center"
              }
            >
              {trackIndex !== i || <MdEqualizer size="22" />}
            </div>
            <div
              className={
                trackIndex === i
                  ? "playing-title-and-artist"
                  : "title-and-artist"
              }
            >
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
            {el.id !== selectedSongId || !isMoreMenuClicked || (
              <div
                className="more-menu-list"
                onClick={() => {
                  setSelectedSongId(el.id);
                }}
              >
                <div className="more-menu">
                  <IoDiscOutline className="icon" />
                  앨범 정보
                </div>
                <div className="more-menu">
                  <BiMicrophone className="icon" />
                  아티스트 정보
                </div>
                <div className="more-menu">
                  <IoMdHeartEmpty className="icon" />
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
