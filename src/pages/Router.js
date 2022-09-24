import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from './login/Login';
import Certification from './signup/Certification';
import Signform from './signup/Signform';
import Signup from './signup/Signup';
import Terms from './signup/Terms';
import Playbar from '../components/playbar/Playbar';
import Purchase from './purchase/Purchase';
import Voucher from './purchase/Voucher';
import Affiliate from './purchase/Affiliate';
import My from './purchase/My';
import { Addtab, Browsemenu } from '../components/Browsemenu';
import Genre from '../components/Genre';
import Main from './main/Main';
import AlbumDetail from '../components/detail/albumDetail/AlbumDetail';
import PlaylistDetail from '../components/detail/playlistDetail/PlaylistDetail';
import ArtistDetail from '../components/detail/artistDetail/ArtistDetail';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/signform' element={<Signform />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/browse/:category' element={<Browsemenu />} />
        <Route path='/purchase' element={<Purchase />}>
          <Route path='voucher' element={<Voucher />}></Route>
          <Route path='affiliate' element={<Affiliate />}></Route>
        </Route>
        <Route path='/' element={<Main />} />
        <Route path='/detail/album' element={<AlbumDetail />} />
        <Route path='/detail/playlist' element={<PlaylistDetail />} />
        <Route path='/detail/artist' element={<ArtistDetail />} />
      </Routes>
      <Footer />
      <Playbar />
    </BrowserRouter>
  );
}

export default Router;
