import "./project.scss";
import "../../styles/generic.scss";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";


const LinerHeader = lazy(() => import("../../components/lineHeader/LineHeader"));
const Card = lazy(() => import("../../components/card/Card"));

const Project = () => {

    const navigate = useNavigate();
    const moveToContactPage = () => {
        navigate("/contact")
    }
    const moveToDonatePage = () => {
        navigate("/donate")
    }

    

  return (
    <div className="project">

        <div className="project_article container mx-auto">

            <LinerHeader text="OUR PROJECT" />

            <div className="project_article_bottom">
                <h1 className="heading_two">Weekly cleanliness program in city</h1>
                <p className="paragraph">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                <p className="paragraph">Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
                <p className="paragraph">Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
                <div className="project_article_bottom_image"></div>
                <h2 className="heading_two">Some cool heading</h2>
                <p className="paragraph">Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.</p>
                <ul>
                    <li>Posuere sed pulvinar enim faucibus justo, cursus. </li>
                    <li>In diam facilisi at sit convallis blandit blandit in.</li>
                    <li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
                </ul>
                <p className="paragraph">Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.</p>
            </div>

        </div>
"
        <div className="py-28">
            <article className="projects_cards">
            <Card
                background="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709733994/finsweet/home/Image_moyjgo.png"
                header="Mission 40K: Tree plantation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                button="See more"
            />
            <Card
                background="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709733994/finsweet/home/Image_1_aefixs.png"
                header="Weekly cleanliness program in city"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                button="See more"
            />
            <Card
                background="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709733993/finsweet/home/Image_2_tzkhgd.png"
                header="Wildlife safety program 2021"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                button="See more"
            />
            </article>
        </div>

        <div className="home_contribute container mx-auto">
        <div className="tint"></div>
        <div className="home_contribute_content">
            <h1 className="heading_one">You can contribute to make<br /> the environment greener!</h1>
            <div>
            <button onClick={moveToContactPage} className="green_btn">Join as a volunteer</button>
                <button onClick={moveToDonatePage} className="white_btn">Donate</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Project