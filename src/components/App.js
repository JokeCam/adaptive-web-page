import "./App.less";
import { useState, useEffect } from "react";
import Popup from "./Popup/Popup";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", windowScrollListener);
    return () => {
      window.removeEventListener("scroll", windowScrollListener);
    };
  }, []);

  function windowScrollListener() {
    setPageYOffset(window.pageYOffset);
  };

  return (
    <div className="app">
      <Popup />
      <Header pageYOffset={pageYOffset}/>
      <Main pageYOffset={pageYOffset}/>
    </div>
  );
};

export default App;
