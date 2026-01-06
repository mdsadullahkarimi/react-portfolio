import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";


function App(){
    return(
        <>
        <Navbar />
        <Hero />
        <About/>
        <Skill/>
        <Project/>
        <Contact/>


        </>
    );
}
export default App;