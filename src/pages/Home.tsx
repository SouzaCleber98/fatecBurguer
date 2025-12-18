import { useEffect } from "react";
import Carousel from "../components/layout/Carousel";
import HomeBanner from "../components/layout/HomeBanner";

const images: string[] = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
];

function Home() {
  useEffect(() => {
    document.title = "Fatec Burguer";
  }, []);

  return (
    <>
      <Carousel images={images} />
      <HomeBanner />
    </>
  );
}

export default Home;
