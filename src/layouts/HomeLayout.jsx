import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
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