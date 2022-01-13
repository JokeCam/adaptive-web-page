import "./App.less";
import Popup from "./Popup/Popup";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Popup />
      <Main />
    </div>
  );
};

export default App;
