import { useEffect } from "react";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import NavBar from "../components/NavBar";

const HomeLayout = () => {

    useEffect(() => {
        document.title = "Home | ElevateU";
    }, []);

    return (
        <div>

            <nav>
                <NavBar></NavBar>
            </nav>

            <main>
                <MainSection></MainSection>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;