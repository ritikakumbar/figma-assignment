import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />

      <section className="about">
        <h2>About Project</h2>
        <p>
          This project is built using React and follows Figma design structure
          with responsiveness and clean reusable components.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default App;