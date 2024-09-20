import About from "./App/About";
import Contact from "./App/Contact";
import CoreOfferings from "./App/CoreOfferings";
import Footer from "./App/Footer";
import Hero from "./App/Hero";
import Intrested from "./App/Intrested";
import Introduction from "./App/Introduction";

function App() {

  return (
    <div className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 min-h-screen">
      <Hero />
      <Introduction />
      <About />
      <CoreOfferings />
      <Intrested />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
