import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Gurantee from "./components/Gurantee";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Founder />
      <Services />
      <Gurantee />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
