import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from './login/Login';



function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
