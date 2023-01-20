import Aboutme from "./components/Aboutme";
import ContaceMe from "./components/ContaceMe";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Talks from "./components/Talks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Talks />
      <ContaceMe />
    </>
  );
}

export default App;
