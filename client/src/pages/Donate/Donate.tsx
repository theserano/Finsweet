import "./donate.scss";
import "../../styles/generic.scss";
import { lazy } from "react";


const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));
const DonateTabs = lazy(() => import("../../components/Tabs/DonateTabs"));


const Donate = () => {
  return (
    <div className="donate">

        <header className="donate_header">
            <div className="donate_header_container container mx-auto">
                <div className="donate_header_container_left">
                    <LineHeader text="DONATE" />
                    <div className="donate_header_container_left_bottom">
                        <h1 className="heading_one">Making a donation for Nature.</h1>
                        <p className="paragraph_small">When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</p>
                        <button className="green_btn">Donate now</button>
                    </div>
                </div>
                <div className="donate_header_container_right">
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1710415524/Image_vh2b6s.png" alt="donate" />
                </div>
            </div>
        </header>

        <div className="donate_contribute container mx-auto">
            <div className="donate_contribute_left">
                <h2 className="heading_two">How you can contribute to protect Earth</h2>
                <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div className="donate_contribute_right">
                <DonateTabs />
            </div>
        </div>

        <div className="donation_use container mx-auto mb-28">
            <h1 className="heading_two">How we use your donation</h1>
            <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
            <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
        </div>

        <div className="home_contribute container mx-auto">
        <div className="tint"></div>
        <div className="home_contribute_content">
            <h1 className="heading_one">You can contribute to make<br /> the environment greener!</h1>
            <div>
                <button className="green_btn">Join as a volunteer</button>
                <button className="white_btn">Donate</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Donate