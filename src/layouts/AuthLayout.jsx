
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


const AuthLayout = () => {
    return (
        <div>
            
            <NavBar></NavBar>

            <header className='py-3 w-11/12 mx-auto'> 
                <Outlet></Outlet>
            </header>
            
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;