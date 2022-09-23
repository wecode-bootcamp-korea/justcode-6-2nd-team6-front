import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from './login/Login';
import Signup from './signup/Signup';
import Terms from './signup/Terms';
import Main from './main/Main';
import Detail from '../components/Detail';
import Certification from './signup/Certification';
import Signform from './signup/Signform';
import Playbar from '../components/playbar/Playbar';
import Purchase from './purchase/Purchase';
import Voucher from './purchase/Voucher';
import DetailInfo from '../components/DetailInfo';
import DetailTrack from '../components/DetailTrack';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/detail/info' element={<DetailInfo />} />
        <Route path='/detail/track' element={<DetailTrack />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/signform' element={<Signform />} />
        <Route path='/purchase' element={<Purchase />}>
          <Route path='voucher' element={<Voucher />}></Route>
        </Route>
      </Routes>
      <Footer />
      <Playbar />
    </BrowserRouter>
  );
}

export default Router;
