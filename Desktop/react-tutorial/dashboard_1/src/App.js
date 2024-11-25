import "./App.css";

function App() {
  const age = 30;
  const links = "https://www.google.com";
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
        <h1>I am {age} years old</h1>
        <p>{[1, 2, 3, 4, 5]}</p>
        <a href={links} target="_blank" rel="noopener noreferrer">
          Google sites
        </a>
      </header>
    </div>
  );
}

export default App;
