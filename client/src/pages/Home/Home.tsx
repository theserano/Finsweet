import "./home.scss";
import "../../styles/generic.scss";
import { lazy, useRef } from "react";

const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));



interface VideoProps extends HTMLVideoElement {
    mozRequestFullScreen?(): void;
    webkitRequestFullscreen?(): void;
  }

const Home = () => {

    const videoRef = useRef<VideoProps>(null);

    const handleFullscreenClick = () => {
        const video = videoRef.current;
    
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
    };

  return (
    <div className="home">

        <div className="home_header">
            <div className="home_header_top">
                <h1 className="home_heading">Save the environment today for a better tomorrow</h1>
                <button className="white_btn">What we do</button>
            </div>
            <div className="home_header_bottom">
                <span className="paragraph font-bold">23,800 trees planted</span>
                <span className="home_header_bottom_line"></span>
                <span className="paragraph font-bold">5840 donations collected</span>
            </div>
        </div>

        {/* know about us */}
        <section className="home_know container mx-auto">

            <article className="home_know_top">
                {/* left side */}
                <div className="home_know_top_left">
                    <LineHeader text={`KNOW ABOUT US`} />
                    <div className="home_know_top_left_bottom">
                        <h1 className="heading_two">We help nature smile and survive everywhere</h1>
                        <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                        <p className="paragraph_small">Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <button className="green_btn">Learn more</button>
                    </div>
                </div>
                {/* right side */}
                <div className="home_know_top_right">
                    <button onClick={handleFullscreenClick}>
                        <video 
                            ref={videoRef}
                            poster="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709712625/finsweet/home/Video-cover_bbvynn.png"
                            className="home_know_top_right_video">
                            <source src="https://res.cloudinary.com/dfltu5jw4/video/upload/v1709653114/finsweet/udclhcttp81btgboenn3.mp4" />
                        </video>
                    </button>
                </div>
            </article>

            <article className="home_know_bottom">
                <div className="home_know_bottom_our">
                    <span className="paragraph">OUR SUPPORTERS</span>
                    <span className="line_flex"></span>
                </div>
                <div className="home_know_bottom_supporters">
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_3_zqunax.svg" alt="stuff" />
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_5_b5eghh.svg" alt="stuff" />
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_2_jmvzah.svg" alt="stuff" />
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_1_nzvpzj.svg" alt="stuff" />
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_4_fsdoc8.svg" alt="stuff" />
                    <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709710622/finsweet/home/Logo_l4imbb.svg" alt="stuff" />
                </div>
            </article>

        </section>
        

    </div>
  )
}

export default Home