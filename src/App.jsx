import "../src/index.css";
import About from "./Components/About";
import BestSellers from "./Components/BestSellers";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Recently from "./Components/Recently";

function App() {
  return (
    <div className="bg-orange-50 h-full relative font-serif w-full overflow-hidden dark:bg-neutral-900">
      <Navbar />
      <Home />
      <About />
      <BestSellers />
      <Recently />
      <Contact />
    </div>
  );
}

export default App;
