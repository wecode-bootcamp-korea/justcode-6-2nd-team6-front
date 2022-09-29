
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
import { Browse } from './browse/Browse';
import CreateStudio from './creator/CreateStudio';




function Router() {
  const [trackIndex, setTrackIndex] = useState(0); // 현재 재생되고있는 음악 인덱스
  const [musicTracks, setMusicTracks] = useState([]); // 현재 재생목록 리스트
  const [isLogin, setIsLogin] = useState(false)
  const [loginText, setLoginText] = useState(false) // 로그인시 팝업등장 토글 스테이트
  const [footerShow, setFooterShow] = useState(false) // 풋터 안보여주고 싶은곳에 사용



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

  //  사용자 정보
  const token = sessionStorage.getItem('token')
  const user_name = sessionStorage.getItem('name')
  const user_img = sessionStorage.getItem('profileImage')

  // 새로고침해도 세션스토리지에 토큰이 있으면 로그인 유지
  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) setIsLogin(true);
  }, []);



  return (
    <BrowserRouter>

      {/* 헤더 */}
      <Header token={token} user_name={user_name} user_img={user_img} isLogin={isLogin} setIsLogin={setIsLogin} setMusicTracks={setMusicTracks} />

      <Routes>
        {/* 로그인 */}
        <Route path="/login" element={<Login token={token} isLogin={isLogin} setIsLogin={setIsLogin} setLoginText={setLoginText} />} />
        {/* 회원가입  */}
        <Route path="/signup" element={<Signup />} />
        {/* 회원가입 - 약관동의 */}
        <Route path="/terms" element={<Terms />} />
        {/* 회원가입 - 번호인증 */}
        <Route path="/certification" element={<Certification />} />
        {/* 회원가입 - 아이디생성 */}
        <Route path="/signform" element={<Signform />} />

        {/* 크리에이터 스튜디오 */}
        <Route path="/promotion/cms/flocreators" element={<CreateStudio />} />
        {/* 둘러보기 */}
        <Route path='/browse/:genre/:id' element={<Browse />} />


        <Route path='/test' element={<Test musicTracks={musicTracks} setMusicTracks={setMusicTracks} />} />

        {/* 이용권 */}
        <Route path='/purchase' element={<Purchase />}>
          <Route path='voucher' element={<Voucher />}></Route>
          <Route path='affiliate' element={<Affiliate />}></Route>
        </Route>

        {/* 메인/상세페이지 */}
        <Route path='/' element={<Main loginText={loginText} />} />
        <Route path='/detail' elememt={<Detail />}>
          <Route path='album' element={<AlbumDetail />} />
          <Route path='playlist' element={<PlaylistDetail />} />
          <Route path='artist' element={<ArtistDetail />} />
          <Route path='mylist/:id' element={<MylistDetail />} />
        </Route>

        {/* 보관함 */}
        <Route path='/storage' element={<Storage />}>
          <Route path='mylist' element={<MyList musicTracks={musicTracks} setMusicTracks={setMusicTracks} />} />
          <Route path='liketrack' element={<LikeTrack />} />
          <Route path='mostlisten' element={<MostListen />} />
          <Route path='recentlylisten' element={<RecentlyListen />} />
        </Route>
      </Routes>

      {/* 풋터 */}
      <Footer />

      {/* 뮤직 플레이어 Bar */}
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
