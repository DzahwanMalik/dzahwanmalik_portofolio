import { Outlet } from "react-router";
import Navbar from "../components/organisms/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-base">
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