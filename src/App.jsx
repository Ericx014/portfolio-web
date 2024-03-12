import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
      <Technologies />
			<Experience />
    </div>
  );
};

export default App;
