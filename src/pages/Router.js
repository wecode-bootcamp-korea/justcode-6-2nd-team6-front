import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from './login/Login';
import Certification from './signup/Certification';
import Signform from './signup/Signform';
import Signup from './signup/Signup';
import Terms from './signup/Terms';
import Test from './Test';
import Playbar from '../components/playbar/Playbar';
import Purchase from './purchase/Purchase';
import Voucher from './purchase/Voucher';
import Affiliate from './purchase/Affiliate';
import My from './purchase/My';
import { Addtab, Browsemenu } from '../components/Browsemenu';
import Genre from '../components/Genre';
import Main from './main/Main';
import Storage from './storage/Storage';
import MyList from './storage/MyList';
import LikeTrack from './storage/LikeTrack';
import MostListen from './storage/MostListen';
import RecentlyListen from './storage/RecentlyListen';
import AlbumDetail from '../components/detail/albumDetail/AlbumDetail';
import ArtistDetail from '../components/detail/artistDetail/ArtistDetail';
import PlaylistDetail from '../components/detail/playlistDetail/PlaylistDetail';
import Detail from '../components/detail/Detail';
import MylistDetail from '../components/detail/MylistDetail/MylistDetail';

function Router() {
  const [trackIndex, setTrackIndex] = useState(0); // 현재 재생되고있는 음악 인덱스
  const [musicTracks, setMusicTracks] = useState([]); // 현재 재생목록 리스트

  // 새로고침해도 세션스토리지에 있는 값을 musicTracks로 가져옴
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('tracks')) !== null)
      setMusicTracks(JSON.parse(sessionStorage.getItem('tracks')));
  }, []);

  // musicTracks에 변화가 있을 때, 세션스토리지 값 변경 및 TrackIndex 0으로 설정
  useEffect(() => {
    sessionStorage.setItem('tracks', JSON.stringify(musicTracks));
    if (musicTracks.length !== 0) setTrackIndex(0);
  }, [musicTracks]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/signform' element={<Signform />} />
        <Route
          path='/test'
          element={
            <Test musicTracks={musicTracks} setMusicTracks={setMusicTracks} />
          }
        />
        <Route path='/genre' element={<Genre />} />
        <Route path='/browse/:category' element={<Browsemenu />} />
        <Route path='/purchase' element={<Purchase />}>
          <Route path='voucher' element={<Voucher />}></Route>
          <Route path='affiliate' element={<Affiliate />}></Route>
        </Route>
        <Route path='/' element={<Main />} />
        <Route path='/detail' elememt={<Detail />}>
          <Route path='album' element={<AlbumDetail />} />
          <Route path='playlist' element={<PlaylistDetail />} />
          <Route path='artist' element={<ArtistDetail />} />
          <Route path='mylist/:id' element={<MylistDetail />} />
        </Route>
        <Route path='/storage' element={<Storage />}>
          <Route
            path='mylist'
            element={
              <MyList
                musicTracks={musicTracks}
                setMusicTracks={setMusicTracks}
              />
            }
          />
          <Route path='liketrack' element={<LikeTrack />} />
          <Route path='mostlisten' element={<MostListen />} />
          <Route path='recentlylisten' element={<RecentlyListen />} />
        </Route>
      </Routes>
      <Footer />
      <Playbar
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        musicTracks={musicTracks}
        setMusicTracks={setMusicTracks}
      />
    </BrowserRouter>
  );
}

export default Router;
