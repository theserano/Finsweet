import { lazy, useState } from "react"
import { MdMenuOpen } from "react-icons/md";
import "./navlink.scss";
import "../../styles/generic.scss";
import { navData } from "./data";
import {Link} from "react-router-dom";



const Logo = lazy(() => import('../logo/Logo'));

const Navlink = () => {

    const [showMenuIcon, setShowMenuIcon] = useState(false);

    const handleOpenPage = (key) => {
        
    }

  return (
    <div className="nav_link container mx-auto">

        <Link to="/">
            <Logo />
        </Link>

        <div className="nav_menu">
            <span className={`nav_menu_icon ${showMenuIcon ? 'show_nav_menu' : ''}`}><MdMenuOpen /></span>

            <ul className="nav_menu_box">
                {navData.map((item) => {
                    return (
                        <Link
                         className="nav_menu_box_link"
                         to={item.link}
                         >
                            <li
                            onClick={() => handleOpenPage(item.link)}
                            >{item.text}</li>
                        </Link>
                    )
                })}

                <button className="black_btn">Donate</button>
            </ul>

        </div>

    </div>
  )
}

export default Navlink