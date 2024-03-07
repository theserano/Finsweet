import { lazy, useRef } from "react"
import "../../styles/generic.scss";
import "./about.scss";
import { VideoProps } from "../Home/Home";
import award from "../../assets/about/award.svg";

const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));
const TeamCard = lazy(() => import("../../components/card/TeamCard"));
const TitleLine = lazy(() => import("../../components/titleLine/TitleLine"));
const NewsCard = lazy(() => import("../../components/card/NewsCard"));
const Event = lazy(() => import("../../components/event/Event"));

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

        {/* awards and recognition */}
        <section className="about_awards container mx-auto">
            <h2 className="heading_two">Awards & Recognitions</h2>

            <article className="about_awards_category">
                <div className="about_awards_category_each">
                    <img src={award} alt="award" />
                    <h3 className="heading_four">2021</h3>
                    <h5 className="heading_five">Bes NGO Award</h5>
                    <p className="paragraph_small">BERLIN, GERMANY</p>
                </div>
                <div className="about_awards_category_each">
                    <img src={award} alt="award" />
                    <h3 className="heading_four">2021</h3>
                    <h5 className="heading_five">Bes NGO Award</h5>
                    <p className="paragraph_small">BERLIN, GERMANY</p>
                </div>
                <div className="about_awards_category_each">
                    <img src={award} alt="award" />
                    <h3 className="heading_four">2021</h3>
                    <h5 className="heading_five">Bes NGO Award</h5>
                    <p className="paragraph_small">BERLIN, GERMANY</p>
                </div>
                <div className="about_awards_category_each">
                    <img src={award} alt="award" />
                    <h3 className="heading_four">2021</h3>
                    <h5 className="heading_five">Bes NGO Award</h5>
                    <p className="paragraph_small">BERLIN, GERMANY</p>
                </div>
            </article>
        </section>

        <section className="about_journey md:container mx-auto">
            <div className="about_journey_left">
                <h5 className="heading_five">OUR JOURNEY</h5>
                <h2 className="heading_two">How we raised 34M</h2>
                <p className="paragraph_small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore itaque vitae porro possimus fugiat, assumenda natus! Magnam numquam eligendi unde tempora. Sequi inventore numquam nemo a voluptate quibusdam explicabo.</p>
                <div className="about_journey_left_count">
                    <span>
                        <h3 className="heading_three">34M+</h3>
                        <p className="paragraph_small">Donation Received</p>
                    </span>
                    <span>
                        <h3 className="heading_three">400+</h3>
                        <p className="paragraph_small">Volunteers</p>
                    </span>
                    <span>
                        <h3 className="heading_three">40K+</h3>
                        <p className="paragraph_small">Trees planted</p>
                    </span>
                </div>
            </div>
            <div className="about_journey_right">
                <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709845280/finsweet/home/Image_tera1n.png" alt="journey" />
            </div>
        </section>

        {/* meet our team */}
        <section className="about_team container mx-auto">
            <h2 className="heading_two text-center mb-4">Meet our team</h2>
            <p className="paragraph text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="about_team_cards">
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847550/finsweet/home/Image_1_e0q2ez.png"
                    name="Leonard John Davies"
                    title="Cofounder, CEO"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847550/finsweet/home/Image_2_m4qagd.png"
                    name="Francis Weber"
                    title="Vice Chairman"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847550/finsweet/home/Image_3_wy47ck.png"
                    name="Kyla Obrien"
                    title="Head of Authority"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847551/finsweet/home/Image_4_mvihlh.png"
                    name="Adrian Dixon"
                    title="Support Executive"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847552/finsweet/home/Image_5_dyeeu4.png"
                    name="Freddy Busby"
                    title="Project Manager"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847553/finsweet/home/Image_6_boenw4.png"
                    name="Dale Banks"
                    title="Accountatnt, Finance"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847554/finsweet/home/Image_7_nvhrri.png"
                    name="Miriam Middleton"
                    title="Cofounder, CEO"
                />
                <TeamCard 
                    image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709847556/finsweet/home/Image_8_bqezff.png"
                    name="Ellen Walton"
                    title="Vice Chairman"
                />
            </div>
        </section>

        <div className="home_contribute container mx-auto">
        <div className="tint"></div>
        <div className="home_contribute_content">
            <h1 className="heading_one">You can contribute to make<br /> the environment greener!</h1>
            <div>
                <button className="green_btn">Join as a volunteer</button>
                <button className="white_btn">Donate</button>
            </div>
        </div>
      </div>

      <TitleLine text="Read Our News" />

      <section className="home_card_news">
        <NewsCard 
            image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709818409/finsweet/home/Thumbnail_hcjdoz.png"
            header="Don't destroy greenery and don't spoil scenery"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
        <NewsCard 
            image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709818401/finsweet/home/Thumbnail_1_bpxpej.png"
            header=" Is climate change happening faster?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
        <NewsCard 
            image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709818401/finsweet/home/Thumbnail_2_goa6bn.png"
            header="Top 10 facts about wind farms you didn't know"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
        <NewsCard 
            image="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709818408/finsweet/home/Thumbnail_3_odwg8e.png"
            header="Our goal is to make water available for everyone"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
        />
      </section>

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

export default About;