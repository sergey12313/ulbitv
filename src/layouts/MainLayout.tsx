import {FC} from "react";
import {Link, Outlet} from "react-router-dom";

export const MainLayout: FC = () => {
    return <>
        <header>
            <Link to="/" >
            Home
            </Link>
            <Link to="/about" >
                About
            </Link>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
}