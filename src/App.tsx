import Introduction from "./components/Introduction";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Introduction />
      <Hero />
      <Features />
      <Integration />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
