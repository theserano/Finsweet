import "./loader.scss";
import "../../styles/generic.scss";


function Loader() {
  return (
    <div className="loader_container">
        <div className="loader"></div>
        <p className="paragraph_small">Loading...</p>
    </div>
  )
}

export default Loader