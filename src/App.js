import logo from './logo.svg';
import './App.css';
import {About} from "./components/About.js"
import { Me } from './components/Me';
import { Skills } from './components/Skills';
import { Project } from './components/projects/Project';
import { Contactme } from './components/contactme/Contactme';
import { Navbar } from './components/Navbar.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <About />
      <Me />
      <Skills />
      <Project />
      <Contactme />
    </div>
  );
}

export default App;
