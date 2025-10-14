import { useEffect } from "react";
import Header from "../components/layout/Header";
import AboutMain from "../components/layout/AboutMain";

function About() {
    useEffect(() => {
        document.title = "Sobre";
    }, []);

    return (
        <>
            <Header />
            <AboutMain />
        </>
    );
}

export default About;


//     <script src="./assets/js/headerMobileMenu.js"></script>
//     <script src="./assets/js/darkModeToggle.js"></script>
// </body>

// </html>