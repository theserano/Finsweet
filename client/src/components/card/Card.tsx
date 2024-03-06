import "./card.scss";
import "../../styles/generic.scss";

interface cardProps {
    background: string,
    header: string,
    text: string,
    button: string
}


const Card = ({background, header, text, button}: cardProps) => {
  return (
    <div
        className="card"
        style={{
            backgroundImage: `url("${background}")`
        }}
    >
        <div className="card_dark"></div>
        <div className="card_details">
            <h1 className="heading_four">{header}</h1>
            <p className="paragraph_small">{text}</p>
            <button className="white_btn">{button}</button>
        </div>
    </div>
  )
}

export default Card