import { useEffect } from "react";
import Header from "../components/layout/Header";
import Carousel from "../components/layout/Carousel";
import HomeBanner from "../components/layout/HomeBanner";

const images = [
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
            <Header />
            <Carousel images={images} />
            <HomeBanner />
        </>
    );
}

export default Home;
