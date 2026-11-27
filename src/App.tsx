import { useState } from "react";
import { Nav } from "./components/Nav";
import { Scrollbar } from "./components/Scrollbar";
import { Cursor } from "./components/Cursor";
import { Loader } from "./components/Loader";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Work } from "./sections/Work";
import { Expertise } from "./sections/Expertise";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Loader onComplete={() => setLoadingComplete(true)} />
      <Nav />
      <Scrollbar />
      <Cursor />

      <main className="app" id="top">
        <Hero loadingComplete={loadingComplete} />
        <About />
        <Experience />
        <Work />
        <Expertise />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
