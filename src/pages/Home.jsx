import Header from "../components/layout/Header";
import Carousel from "../components/ui/Carousel";
import Banner from "../components/ui/Banner";

const images = [
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
];

function Home() {
    return (
        <div>
            <Header />
            <Carousel images={images } />
            <Banner />
        </div>
    );
}

export default Home;
