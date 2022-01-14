import "./App.less";
import Popup from "./Popup/Popup";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Popup /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default App;
