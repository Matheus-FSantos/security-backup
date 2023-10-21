import { React } from 'react';

/* Components */
import NavBar from './components/NavBar/NavBar.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';

/* Styles */
import "./style.css";

function App() {
  return (
    <div>
      <div className="container-app">
        <header className="header">
          <Header className="header"/>
        </header>
        
        <main className="main">
          <Main className="main"/>
        </main>
        
        <footer className="footer">
          <Footer className="footer"/>
        </footer>
      </div>

      <NavBar />
    </div>
  )
}

export default App
