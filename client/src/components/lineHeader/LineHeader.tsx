import "../../styles/generic.scss";
import "./lineHeader.scss";

interface lineHeaderTypes  {
    text: string
}


const LineHeader = ({ text }: lineHeaderTypes) => {
  return (
    <div className="line_header">
        <span className="line_header_line"></span>
        <span className="line_header_text heading_five">{text}</span>
    </div>
  )
}

export default LineHeader