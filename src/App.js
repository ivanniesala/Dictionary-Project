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
          <p id="resources">
            Created by {""}
            <a
              href="https://www.linkedin.com/in/ivannie-saladin-736b50132/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Ivannie Saladin {""}
            </a>
            student at {""}
            <a
              href="https://www.shecodes.io/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Shecodes
            </a>
            <br />
            Check out my repository on{" "}
            <a
              href="https://github.com/ivanniesala/Dictionary-Project"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              GitHub {""}
            </a>
            <br />
            Website hosted on{" "}
            <a
              href="https://app.netlify.com/teams/ivanniesala/overview"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
