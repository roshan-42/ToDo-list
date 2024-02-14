import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Counter from "./components/Counter";
import Buttonclick from "./components/Buttonclick";
import Inputfield from "./components/Inputfield";
import Inputcopy from "./components/Inputcopy";

function App() {
  return (
    <div className="App">
      <Main />
      <Counter />
      <Buttonclick />
      <Inputfield />
      <Inputcopy />
    </div>
  );
}

export default App;
