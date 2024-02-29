import "../../styles/generic.scss";
import "./footer.scss"
import Logo from "../logo/Logo";
import {Link} from "react-router-dom";



const Footer = () => {
  return (
    <div className="footer p-12 py-20 flex items-start justify-evenly flex-wrap gap-8">

        <div className="footer_logo">
            <Logo
                color="#fff"
             />
        </div>

        <div className="footer_container_list flex gap-16">
            <div className="footer_container_list_each">
                <h4 className="heading_four">Our team</h4>
                <Link to=""><p>About us</p></Link>
                <Link to=""><p>Team</p></Link>
                <Link to=""><p>What we do</p></Link>
                <Link to=""><p>Contact</p></Link>
            </div>
            <div className="footer_container_list_each">
                <h4 className="heading_four">More</h4>
                <Link to=""><p>Projects</p></Link>
                <Link to=""><p>Events</p></Link>
                <Link to=""><p>Donate</p></Link>
                <Link to=""><p>Blog</p></Link>
            </div>
            <div className="footer_container_list_each">
                <h4 className="heading_four">Connect</h4>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
            </div>
        </div>

        <div className="footer_form">
            <h2 className="heading_two">Subscribe to get latest updates</h2>
            <form>
                <input type="email" placeholder="Your email" />
                <input type="submit" value="Subscribe" />
            </form>
        </div>

    </div>
  )
}

export default Footer