import social from "../../assets/about/Social row.png";
import "./card.scss"

interface TeamCardProps {
    image: string,
    name: string,
    title: string,
}


const TeamCard = ({image, name, title}: TeamCardProps) => {
  return (
    <div className="team_card">
        <div className="team_card_image">
            <img src={image} alt="image" />
        </div>
        <div className="team_card_details">
            <h4 className="heading_four">{name}</h4>
            <p className="paragraph_small">{title}</p>
            <div>
                <img src={social} alt="stuff" />
            </div>
        </div>
    </div>
  )
}

export default TeamCard