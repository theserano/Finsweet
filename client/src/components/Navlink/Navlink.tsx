import { lazy, useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import "./navlink.scss";
import "../../styles/generic.scss";
import { navData } from "./data";
import { Link } from "react-router-dom";

const Logo = lazy(() => import('../logo/Logo'));

const Navlink = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth < 800);
    const [openMenu, setOpenMenu] = useState(false);

    const handleResize = () => {
        setShowMenuIcon(window.innerWidth < 800);
    };

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        // Set initial state based on the initial screen width
        setShowMenuIcon(window.innerWidth < 800);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="nav_link container mx-auto">
            <Link to="/">
                <Logo
                    color="#000"
                 />
            </Link>

            <div className={`nav_menu ${showMenuIcon ? 'nav_menu_show' : ""}`}>
                <span className={`nav_menu_icon ${showMenuIcon ? 'show_nav_menu' : ''}`}
                onClick={handleOpenMenu}
                ><MdMenuOpen /></span>

                <ul className={`nav_menu_box ${showMenuIcon ? "show_nav_menu_box" : ""} ${openMenu ? "openMenu" : ""}`}>
                    {navData.map((item) => (
                        <Link
                            className="nav_menu_box_link"
                            to={item.link}
                            key={item.id}
                        >
                            <li>{item.text}</li>
                        </Link>
                    ))}
                    <button className="black_btn">
                      <Link to="/donate">Donate</Link>  
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navlink;
