import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "./login/Login";
import Certification from "./signup/Certification";
import Signform from "./signup/Signform";
import Signup from "./signup/Signup";
import Terms from "./signup/Terms";
import Test from "./Test";

import Playbar from "../components/playbar/Playbar";
import Purchase from "./purchase/Purchase";
import Voucher from "./purchase/Voucher";
import Affiliate from "./purchase/Affiliate";

function Router() {
  const [trackIndex, setTrackIndex] = useState(0); // 현재 재생되고있는 음악 인덱스
  const [musicTracks, setMusicTracks] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/signform" element={<Signform />} />
        <Route
          path="/test"
          element={
            <Test
              setTrackIndex={setTrackIndex}
              musicTracks={musicTracks}
              setMusicTracks={setMusicTracks}
            />
          }
        />
        <Route path="/purchase" element={<Purchase />}>
          <Route path="voucher" element={<Voucher />}></Route>
          <Route path="affiliate" element={<Affiliate />}></Route>
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
