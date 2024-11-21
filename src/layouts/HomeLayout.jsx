import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";

const HomeLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Home | ElevateU";

        const timer = setTimeout(() =>{
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if(isLoading) {
        return <Loading></Loading>;
    }

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