import { Outlet } from "react-router";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const MainLayout = () => {
    return (
        <div className="bg-base">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;