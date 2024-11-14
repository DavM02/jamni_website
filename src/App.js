import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense } from "react";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import SmoothScroll from "./components/scroll/SmoothScroll";
import MainContextProvider from "./context/MainContext";
import { AnimatePresence } from "framer-motion";
 

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'))
const NewsPage = React.lazy(() => import('./pages/NewsPage/NewsPage'))


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
                  <Route path="/" element={<HomePage />} />
                  <Route path="news" element={<NewsPage />} />
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
