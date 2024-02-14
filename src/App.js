import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Main />
      <Counter />
    </div>
  );
}

export default App;
