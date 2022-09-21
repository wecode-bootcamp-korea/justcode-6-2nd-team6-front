import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Terms from "./signup/Terms";
import Main from "./main/Main";
import AlbumTrack from "../components/AlbumTrack";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/" element={<Main />} />
        <Route path="/detailed" element={<AlbumTrack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
