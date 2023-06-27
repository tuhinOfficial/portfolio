import About from "../Pages/About/About";
import Banner from "../Pages/Navigation/Banner/Banner";
import Navigation from "../Pages/Navigation/Navigation";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="max-w-5xl mx-auto">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Main;
