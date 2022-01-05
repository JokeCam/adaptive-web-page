import "./App.css"
import Popup from "./Popup/Popup"
import Header from "./Header/Header"
import Main from "./Main/Main"

function App() {
  return (
    <div className="app">
      <Popup />
      <Header pageYOffset={pageYOffset}/>
      <Main pageYOffset={pageYOffset}/>
    </div>
  );
}

export default App;
