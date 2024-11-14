import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import SmoothScroll from "./components/scroll/SmoothScroll";
import MainContextProvider from "./context/MainContext";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import { AnimatePresence } from "framer-motion";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutPage from "./pages/AboutPage/AboutPage";


function App() {


  const location = useLocation()
 
  return (
    <div className="App">
      <MainContextProvider>
        <Header />
        <SmoothScroll>
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname} >
                <Route path="/" element={<HomePage />}/>
                <Route path="catalog" element={<CatalogPage/>} />
                <Route path="news" element={<NewsPage  />} />
                <Route path="about" element={<AboutPage />} />

              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </SmoothScroll>

      </MainContextProvider>
    </div>
  );
}

export default App;
