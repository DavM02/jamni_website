import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import SmoothScroll from "./components/scroll/SmoothScroll";
import MainContextProvider from "./context/MainContext";
import HomePage from "./pages/HomePage/HomePage";
import { AnimatePresence } from "framer-motion";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import SWRConfigWrapper from "./swr/SWRConfigWrapper";
import NoFound from "./pages/NoFound/NoFound";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
function App() {

   const location = useLocation()
 console.log('lal')
  return (
    <div className="App">
      <MainContextProvider>
        <Header />
        <SmoothScroll>
          <SWRConfigWrapper>
            <main>
              <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname} >
                  <Route path="/" element={<HomePage />} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="catalog/*" element={<CatalogPage />} />
                  <Route path="/*" element={<NoFound/>} />
                </Routes>
              </AnimatePresence>
            </main>
          </SWRConfigWrapper>
          <Footer />
        </SmoothScroll>
      </MainContextProvider>
    </div>
  );
}

export default App;
