import { useEffect } from "react";
import Footer from "./Footer";
import MainSection from "./MainSection";
import NavBar from "./NavBar";

const About = () => {

    useEffect(() => {
        document.title = "About | ElevateU";
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <MainSection></MainSection>
            <Footer></Footer>
        </div>
    );
};

export default About;