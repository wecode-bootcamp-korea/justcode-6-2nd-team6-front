import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MusicContainer from './MusicContainer';

const StyledListTrack = styled.div`
  .my-list-message-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 80px 0 60px 0;
    color: #969696;
    font-size: 20px;
    font-weight: 700;
  }
  .my-list-inner-box {
    width: 1280px;
  }
`;

const ListTrack = ({
  musicTracks,
  setMusicTracks,
  setAlertOn,
  isExpandedClicked,
  isLogin,
}) => {
  const location = useLocation();
  const [isMyPlayListClicked, setIsMyPlayListClicked] = useState(false);
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const [checkedList, setCheckedList] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([
    {
      playlistId: 0,
      songId: 0,
      songTitle: '',
      albumId: 0,
      albumTitle: '앨범 제목1',
      albumImage: '/Images/nothing.png',
      atsId: 1,
      artist: '',
    },
  ]);

  console.log(`http://localhost:8000${location.pathname}`);

  useEffect(() => {
    fetch(`http://localhost:8000${location.pathname}`, {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'ListTrack!');
        setPlaylistSongs(data);
      });
    setIsSelectClicked(false);
  }, [location.pathname || isExpandedClicked]);

  return (
    <StyledListTrack>
      <div className='my-list-inner-box'>
        {isLogin === false ? (
          <div className='my-list-message-box'>
            <div className='message'>로그인 후 이용하실 수 있습니다.</div>
          </div>
        ) : (
          <MusicContainer
            playlistSongs={playlistSongs}
            setPlaylistSongs={setPlaylistSongs}
            musicTracks={musicTracks}
            setMusicTracks={setMusicTracks}
            setAlertOn={setAlertOn}
            isMyPlayListClicked={isMyPlayListClicked}
            setIsMyPlayListClicked={setIsMyPlayListClicked}
            isSelectClicked={isSelectClicked}
            setIsSelectClicked={setIsSelectClicked}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        )}
      </div>
    </StyledListTrack>
  );
};

export default ListTrack;
