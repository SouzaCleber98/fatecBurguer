import { useEffect } from "react";
import Header from "../components/layout/Header"
import ContactInfo from "../components/layout/ContactInfo";
import LocationMap from "../components/ui/LocationMap";
import ContactForm from "../components/layout/ContactForm";

function Contact() {
    useEffect(() => {
        document.title = "Contato";
    }, []);

    return (
        <>
            <Header />
            <div className="contato-container">
                <section className="contato">
                    <ContactInfo />
                    <LocationMap />
                    <div className="fale-conosco">
                        <h2>Fale conosco</h2>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </>

    );
}

export default Contact;