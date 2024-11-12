import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import SmoothScroll from "./components/scroll/SmoothScroll";
import MainContextProvider from "./context/MainContext";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Header />
        <SmoothScroll>
          <Main />
          <Footer />
        </SmoothScroll>

      </MainContextProvider>
    </div>
  );
}

export default App;
