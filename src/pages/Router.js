import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
