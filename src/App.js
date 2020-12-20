import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2> Homiies. </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link"
          href="https://github.com/mikaylalisiy/homiies-idm371"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Live together.</p> 
          <p>Be responsible together.</p>
        </a>
      </header>
    </div>
  );
}

export default App;
