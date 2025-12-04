import { useEffect } from "react";
import AboutMain from "../components/layout/AboutMain";

function About() {
  useEffect(() => {
    document.title = "Sobre";
  }, []);

  return (
    <>
      <AboutMain />
    </>
  );
}

export default About;
