import { TestimonialsContext, TestimonialsContextProvider } from "./contexts/testimonialsContext";
import { useContext } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  const user = useContext(TestimonialsContext);

  return (
    <TestimonialsContextProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Work />
        <About />
        <Testimonials />
        <Footer />
      </div>
    </TestimonialsContextProvider>
  );
}
