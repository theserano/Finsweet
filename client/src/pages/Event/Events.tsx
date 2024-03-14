import "./event.scss";
import "../../styles/generic.scss";
import location from "../../assets/home/location.svg";
import date from "../../assets/home/date.svg";
import { lazy } from "react";


const TitleLine = lazy(() => import("../../components/titleLine/TitleLine"));
const Event = lazy(() => import("../../components/event/Event"));

const Events = () => {
  return (
    <div className="events">

        <header className="events_header">
            <div className="events_header_container container mx-auto">
                <h1 className="heading_one">Say no to using plastic and save Earth</h1>
                <div className="events_header_container_dates">
                    <p className="paragraph_small">
                        <img src={location} alt="stuff" />
                        8 Brewery Drive, Hudson, NH 03051, USA
                    </p>
                    <p className="paragraph_small">
                        <img src={date} alt="stuff" />
                        8 Brewery Drive, Hudson, NH 03051, USA
                    </p>
                </div>
            </div>
        </header>

        <div className="events_details container mx-auto">
            <h2 className="heading_two">About</h2>
            <p className="paragraph">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
            <p className="paragraph">Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
            <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1710439819/Images_vfntwm.png" alt="event" />
            <p className="paragraph">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
        </div>

        <TitleLine text="Our Events" />
        <div className="home_event flex flex-wrap justify-start gap-8 px-4 container mx-auto mb-20">
            <Event 
                day="23"
                month="SEP"
                text="Say no to plastic usage and save the planet"
            />
            <Event 
                day="25"
                month="SEP"
                text="Weekly cleaning program"
            />
        </div>

    </div>
  )
}

export default Events