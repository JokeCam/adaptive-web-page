import "./App.less";
import { useState, useEffect } from "react";
import Popup from "./Popup/Popup";
import Header from "./Header/Header";
import Main from "./Main/Main";

import "./App.less";

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
