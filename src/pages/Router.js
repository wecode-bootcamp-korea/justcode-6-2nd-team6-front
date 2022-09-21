import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from './login/Login';
import Certification from './signup/Certification';
import Signform from './signup/Signform';
import Signup from './signup/Signup';
import Terms from './signup/Terms';




function Router() {
  
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/certification" element={<Certification />}/>
        <Route path="/signform" element={<Signform />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
