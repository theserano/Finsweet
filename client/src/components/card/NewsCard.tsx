import { Link, useNavigate } from "react-router-dom";
import "../../styles/generic.scss";

interface NewsCardProps {
    image: string,
    header: string,
    text: string,
}


const NewsCard = ({image, header, text}: NewsCardProps) => {
    const navigate = useNavigate();
    const moveToBlogPage = () => {
        navigate("/blog")
    }
  return (
    <Link to="/blog">
        <div onClick={moveToBlogPage} className="news_card">
            <div className="news_card_image" 
                style={{
                    backgroundImage: `url("${image}")`
                }}
            ></div>
            <div className="news_card_details">
                <h4 className="heading_four">{header}</h4>
                <p className="paragraph_small">{text}</p>
            </div>
        </div>
    </Link>
  )
}

export default NewsCard