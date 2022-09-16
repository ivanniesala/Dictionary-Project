import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="Shecodes Logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <smalll>Coded by Ivannie</smalll>
        </footer>
      </div>
    </div>
  );
}
