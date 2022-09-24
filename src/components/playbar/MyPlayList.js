import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import { AiOutlinePlus } from 'react-icons/ai';

const StyledDialog = styled(Dialog)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'NanumBarunGothic', sans-serif;

    .my-play-list-inner-box {
      display: flex;
      flex-direction: column;
      width: 525px;
      padding: 30px;
      border-radius: 5px;
      background-color: white;

      .title {
        padding-bottom: 25px;
        font-size: 18px;
        font-weight: 700;
      }

      .play-lists {
        overflow-y: auto;
        max-height: 400px;
      }

      .add-list-input-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        border-bottom: 1px solid #f2f2f2;

        .input {
          width: 350px;
          padding: 15px;
          border-top: 0;
          border-right: 0;
          border-left: 0;
          border-bottom: 1.5px solid black;
          font-family: 'NanumBarunGothic', sans-serif;
          font-size: 15px;
          font-weight: 700;

          &:focus {
            outline: none;
          }
        }

        .cancel-and-confirm {
          display: flex;
          font-size: 14px;
          font-weight: 700;

          .cancel {
            margin-right: 10px;
            cursor: pointer;
          }

          .confirm {
            margin-right: 10px;

            color: blue;
            cursor: pointer;
          }
        }
      }

      .add-list-box {
        display: flex;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #f2f2f2;
        color: blue;
        cursor: pointer;

        .add-list-cover {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          width: 60px;
          margin-right: 15px;
          border-radius: 5px;
          background-color: #dedede;
          font-size: 30px;
        }
        .add-list {
          font-weight: bold;
        }
      }
    }

    .play-list-bar-inner-box {
      display: flex;
      align-items: center;
      height: 80px;
      border-bottom: 1px solid #f2f2f2;
      cursor: pointer;

      .cover {
        height: 60px;
        width: 60px;
        margin-right: 15px;
        border-radius: 5px;
      }

      .album-title {
        margin-bottom: 10px;
        font-weight: 700;
      }

      .num {
        color: #969696;
        font-size: 14px;
      }
    }
  }
`;

const MyPlayList = ({
  isMyPlayListClicked,
  setIsMyPlayListClicked,
  playingMusicId,
  selectedSongId,
  isGetMyPlayListClicked,
  setIsGetMyPlayListClicked,
}) => {
  const [isAddNewPlayListClicked, setIsAddNewPlayListClicked] = useState(false);
  const arr = [1, 2, 3];
  const inputRef = useRef();

  // 리스트 추가 시 input focus
  useEffect(() => {
    if (isAddNewPlayListClicked !== false) inputRef.current.focus();
  }, [isAddNewPlayListClicked]);

  if (selectedSongId == Infinity) {
    console.log('playingMusicId', playingMusicId);
  } else console.log('selectedSongId', selectedSongId);

  return (
    <StyledDialog
      open={isMyPlayListClicked}
      onClose={() => {
        setIsMyPlayListClicked(false);
        setTimeout(() => setIsGetMyPlayListClicked(false), 200);
      }}
    >
      {/* 내 리스트 가져오기 and 새로운 리스트 추가하기 */}
      {isGetMyPlayListClicked ? (
        <div className='my-play-list-inner-box'>
          <div className='title'>내 리스트 가져오기</div>
          <div className='play-lists'>
            {arr.map(() => (
              <PlayListBar />
            ))}
          </div>
        </div>
      ) : (
        <div className='my-play-list-inner-box'>
          <div className='title'>내 리스트에 담기</div>
          <div className='play-lists'>
            {/* 새로운 리스트 추가하기 토글 */}
            {isAddNewPlayListClicked ? (
              <div className='add-list-input-box'>
                <input
                  type='text'
                  className='input'
                  placeholder='내 리스트 이름을 입력해주세요'
                  ref={inputRef}
                />
                <div className='cancel-and-confirm'>
                  <div
                    className='cancel'
                    onClick={() =>
                      setIsAddNewPlayListClicked(!isAddNewPlayListClicked)
                    }
                  >
                    취소
                  </div>
                  <div className='confirm'>확인</div>
                </div>
              </div>
            ) : (
              <div
                className='add-list-box'
                onClick={() => {
                  setIsAddNewPlayListClicked(!isAddNewPlayListClicked);
                }}
              >
                <div className='add-list-cover'>
                  <AiOutlinePlus />
                </div>
                <div className='play-list-info'>
                  <div className='add-list'>내 리스트 가져오기</div>
                </div>
              </div>
            )}
            {arr.map(() => (
              <PlayListBar />
            ))}
          </div>
        </div>
      )}
    </StyledDialog>
  );
};

// 플레이 리스트 (낱개)
const PlayListBar = () => {
  return (
    <div className='play-list-bar-inner-box'>
      <img src='/Images/nothing.png' alt='playlist cover' className='cover' />
      <div className='play-list-info'>
        <div className='album-title'>플레이리스트 제목</div>
        <div className='num'>3곡</div>
      </div>
    </div>
  );
};

export default MyPlayList;
