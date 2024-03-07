import "./event.scss";
import "../../styles/generic.scss";

interface EventProps {
    day: string,
    month: string,
    text: string,
}


const Event = ({day, month, text}: EventProps) => {
  return (
    <div className="event">
        <div className="event_date">
            <h2 className="heading_two">{day}</h2>
            <p className="paragraph">{month}</p>
        </div>
        <div className="event_details">
            <h5 className="heading_five">NEXT EVENTS <span></span></h5>
            <h4 className="heading_four">{text}</h4>
        </div>
    </div>
  )
}

export default Event