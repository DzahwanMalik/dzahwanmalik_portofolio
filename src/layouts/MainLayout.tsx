import { Outlet } from "react-router";
import Navbar from "../components/organisms/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-base">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;