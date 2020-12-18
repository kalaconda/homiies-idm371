import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to Homiies
        </h2>
        <a
          className="App-link"
          href="https://github.com/mikaylalisiy/homiies-idm371"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live together. Be responsible together.
        </a>
      </header>
    </div>
  );
}

export default App;
