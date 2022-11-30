import {FC} from "react";
import {Link, Outlet} from "react-router-dom";

import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames";

export const MainLayout: FC = () => {
    const {theme, toggleTheme} = useTheme()


    return <div className={ classNames('app', theme) }>
        <header>
            <Link to="/" >
            Home
            </Link>
            <Link to="/about" >
                About
            </Link>
            <button onClick={toggleTheme}> toggle theme </button>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}