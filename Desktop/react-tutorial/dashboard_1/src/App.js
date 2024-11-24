import logo from "./logo.svg";
import "./App.css";

function App() {
  const age = 30;
  const links = "https://www.google.com";
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
        <h1>I am {age} years old</h1>
        <a href={links} target="_blank">
          Google sites
        </a>
      </header>
    </div>
  );
}

export default App;
