import { lazy, useRef } from "react"
import "../../styles/generic.scss";
import "./about.scss";
import { VideoProps } from "../Home/Home";

const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));

const About = () => {

    const aboutVideoRef = useRef<VideoProps>(null);
    const handleFullScreenClick = () => {
        const video = aboutVideoRef.current;
        if (video) {
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
              video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
              video.webkitRequestFullscreen();
            }
      
            video.play();
          }
    }

  return (
    <div className="about">
        {/* header section */}
        <header className="container mx-auto mt-20 about_header">
            <div className="about_header_left">
                <LineHeader text="KNOW ABOUT US" />
                <h2 className="heading_two">We are a nonprofit team working worldwide</h2>
            </div>
            <div className="about_header_right">
                <h4 className="heading_four">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h4>
                <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
            </div>
        </header>

        

        {/* mission and vision */}
        <section className="about_mission">
            {/* video */}
            <div className="about_mission_video">
                <button onClick={handleFullScreenClick}>
                    <video
                        ref={aboutVideoRef}
                        className="about_video"
                        poster="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709840099/finsweet/home/Video_jj6k5s.png"
                    >
                        <source src="https://res.cloudinary.com/dfltu5jw4/video/upload/v1709838720/finsweet/home/Seven_Billion_Dreams._One_Planet._Consume_with_Care._bqmbd4.mp4" />
                    </video>
                </button>
            </div>
            <div className="about_mission_details container mx-auto">
                <div className="about_mission_details_top">
                    <div className="about_mission_details_top_each">
                        <h5 className="heading_five">OUR MISSION</h5>
                        <h4 className="heading_four">We make the world we save our own environment</h4>
                        <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                    <div className="about_mission_details_top_each">
                        <h5 className="heading_five">OUR VISION</h5>
                        <h4 className="heading_four">Plant more trees to make world air pollution free</h4>
                        <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    </div>
                </div>
                <article className="home_know_bottom">
                    <div className="home_know_bottom_our">
                        <span className="paragraph">OUR SUPPORTERS</span>
                        {/* <span className="line_flex"></span> */}
                    </div>
                    <div className="home_know_bottom_supporters">
                        <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_3_zqunax.svg"
                        alt="stuff"
                        />
                        <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_5_b5eghh.svg"
                        alt="stuff"
                        />
                        <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_2_jmvzah.svg"
                        alt="stuff"
                        />
                        <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_1_nzvpzj.svg"
                        alt="stuff"
                        />
                        <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_4_fsdoc8.svg"
                        alt="stuff"
                        />
                        <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_l4imbb.svg"
                        alt="stuff"
                        />
                    </div>
                </article>
            </div>
        </section>

    </div>
  )
}

export default About