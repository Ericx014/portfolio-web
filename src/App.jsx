import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
      <Technologies />
			<Education />
			<Experience />
			<Contact />
    </div>
  );
};

export default App;
