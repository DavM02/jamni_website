import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import SmoothScroll from "./components/scroll/SmoothScroll";
import MainContextProvider from "./context/MainContext";
import HomePage from "./pages/HomePage/HomePage";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/AboutPage/AboutPage";
import CatalogRoute from "./pages/CatalogPage/Route";
import SWRConfigWrapper from "./swr/SWRConfigWrapper";
import NoFound from "./pages/NoFound/NoFound";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import NewsRoute from "./pages/NewsPage/Route";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import OrderPage from "./pages/OrderPage/OrderPage";
function App() {
  const location = useLocation();
 
  return (
    <div className="App">
      <MainContextProvider>
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
                  <Route path="order/*" element={<OrderPage />}/>
                  <Route path="catalog/*" element={<CatalogRoute />} />
                  <Route path="/*" element={<NoFound />} />
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
