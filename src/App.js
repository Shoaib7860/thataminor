import Navbar from "./components/navbar/Navbar";
import Hero from "./components/pages/Hero";
import "./App.css"
import Service from "./components/pages/Service";
import DigitalProduct from "./components/pages/DigitalProduct";
import OnlineMode from "./components/pages/OnlineMode";
import Caruser from "./components/pages/Caruser";
import Experts from "./components/pages/Experts";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <DigitalProduct />
    <OnlineMode />
    <Caruser />
    <Experts />
    <Contact />
    <Footer />

    </>
  );
}

export default App;
