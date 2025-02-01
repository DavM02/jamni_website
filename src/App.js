import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import SmoothScroll from "./components/scroll/SmoothScroll";
import MainContextProvider from "./context/MainContext";
import HomePage from "./pages/HomePage/HomePage";
import { AnimatePresence, MotionConfig } from "framer-motion";
import AboutPage from "./pages/AboutPage/AboutPage";
import CatalogRoute from "./pages/CatalogPage/Route";
import SWRConfigWrapper from "./swr/SWRConfigWrapper";
import NoFound from "./pages/NoFound/NoFound";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import NewsRoute from "./pages/NewsPage/Route";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import AppLoading from "./components/AppLoading/AppLoading";
import { useState } from "react";
import Cursor from "./components/Cursor/Cursor";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";



function App() {
  const location = useLocation();
  const [renderApp, setRenderApp] = useState(sessionStorage.getItem('animationCompleted') || document.referrer.includes('jamni'));

  return (
    <>
      <Cursor />
      {(renderApp === false || renderApp === 'show') && <AppLoading setRenderApp={setRenderApp} />}

      <div
        className="App"
        style={{
          visibility: (renderApp || renderApp === 'show') ? "initial" : "hidden",
          overflow: (renderApp || renderApp === 'show') ? "unset" : "hidden",
        }}
      >
        <MainContextProvider>
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: [0.645, 0.045, 0.355, 1],
            }}
          >
            <Header />
            <SmoothScroll>
              <SWRConfigWrapper>
                <main>
                  <AnimatePresence mode="wait" initial={false}>
                    <Routes location={location} key={location.pathname}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="news/*" element={<NewsRoute />} />
                      <Route path="reviews" element={<ReviewsPage />} />
                      <Route path="project" element={<ProjectPage />} />
                      <Route path="about" element={<AboutPage />} />
                      <Route path="contacts" element={<ContactsPage />} />
                      <Route path="order/*" element={<OrderPage />} />
                      <Route path="catalog/*" element={<CatalogRoute />} />
                      <Route path="favorites" element={<FavoritesPage />} />
                      <Route path="*" element={<NoFound />} />
                    </Routes>
                  </AnimatePresence>
                </main>
              </SWRConfigWrapper>
              <Footer />
            </SmoothScroll>
          </MotionConfig>
        </MainContextProvider>
      </div>
    </>
  );
}

export default App;
