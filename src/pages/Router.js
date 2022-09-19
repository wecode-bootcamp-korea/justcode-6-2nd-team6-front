import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Playbar from "../components/playbar/Playbar";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
      <Playbar />
    </BrowserRouter>
  );
}

export default Router;
