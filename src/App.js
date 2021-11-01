import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
          </main>
       <footer className="text-center">
       <small>Coded by Naomi Randall and is {" "}
          <a href ="https://github.com/nmrndll/dictionary-react-app" rel="noreferrer" target="_blank"> open-sourced on GitHub </a>
    and is hosted on <a href ="https://gallant-raman-08c0da.netlify.app/" rel="noreferrer" target="_blank">Netlify</a>
    </small>
    </footer>
      </div>
    </div>
  
  );
}

