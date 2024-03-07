import "./home.scss";
import "../../styles/generic.scss";
import { lazy, useRef } from "react";
import icon from "../../assets/home/Icon.svg";
import icon1 from "../../assets/home/Icon (1).svg";
import icon2 from "../../assets/home/Icon (2).svg";
import icon3 from "../../assets/home/Icon (3).svg";
import { data } from "./data";

const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));
const Card = lazy(() => import("../../components/card/Card"));
const Chart = lazy(() => import("../../components/chart/Chart"));
const TitleLine = lazy(() => import("../../components/titleLine/TitleLine"));

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
      <div className="home_header_container">
        <div className="home_header container mx-auto">
          <div className="home_header_top">
            <h1 className="home_heading">
              Save the environment today for a better tomorrow
            </h1>
            <button className="white_btn">What we do</button>
          </div>
          <div className="home_header_bottom">
            <span className="paragraph font-bold">23,800 trees planted</span>
            <span className="home_header_bottom_line"></span>
            <span className="paragraph font-bold">
              5840 donations collected
            </span>
          </div>
        </div>
      </div>

      {/* know about us */}
      <section className="home_know container mx-auto">
        <article className="home_know_top">
          {/* left side */}
          <div className="home_know_top_left">
            <LineHeader text={`KNOW ABOUT US`} />
            <div className="home_know_top_left_bottom">
              <h1 className="heading_two">
                We help nature smile and survive everywhere
              </h1>
              <p className="paragraph_small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="paragraph_small">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <button className="green_btn">Learn more</button>
            </div>
          </div>
          {/* right side */}
          <div className="home_know_top_right">
            <button onClick={handleFullscreenClick}>
              <video
                ref={videoRef}
                poster="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709712625/finsweet/home/Video-cover_bbvynn.png"
                className="home_know_top_right_video"
              >
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
      </section>

      {/* what we do */}
      <section className="home_what_section">
        {/* main section */}
        <section className="home_what container mx-auto">
          {/* left side */}
          <article className="home_what_left">
            <LineHeader text="WHAT WE DO" />
            <div className="home_what_left_bottom">
              <h1 className="heading_two">
                We care for earth, care for the coming birth
              </h1>
              <p className="paragraph_small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              {/* bottom cards section */}
              <div className="home_what_left_bottom_cards">
                <div>
                  <span>
                    <img src={icon} alt="stuff" />
                  </span>
                  <span>
                    <h4 className="heading_four">Build Healthy Cities</h4>
                    <p className="paragraph_small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim.
                    </p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={icon1} alt="stuff" />
                  </span>
                  <span>
                    <h4 className="heading_four">Tree Plantation</h4>
                    <p className="paragraph_small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim.
                    </p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={icon2} alt="stuff" />
                  </span>
                  <span>
                    <h4 className="heading_four">Protect Land and Water</h4>
                    <p className="paragraph_small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim.
                    </p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={icon3} alt="stuff" />
                  </span>
                  <span>
                    <h4 className="heading_four">Animal Safety</h4>
                    <p className="paragraph_small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </article>
          {/* right side */}
          <article className="home_what_right">
            <img
              src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709730289/finsweet/home/Image_pksrfg.png"
              alt="stuff"
            />
          </article>
        </section>
      </section>

      {/* projects we have done */}
      <section className="projects container mx-auto">
        <LineHeader text="PROJECTS WE HAVE DONE" />
        <h1 className="heading_two">
          We are Creating sustainable society, for everyone and forever.
        </h1>
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
      </section>

      {/* how we spend */}
      <section className="home_spend_container">
        <section className="home_spend container mx-auto">
          {/* left side */}
          <article className="home_spend_left">
            <h1 className="heading_one">
              How we spend your donations and where it goes
            </h1>
            <p className="paragraph">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
            <div className="home_spend_left_donations">
              <p className="paragraph text-white">
                <span
                    style={{
                        backgroundColor: "#B0D9B1"
                    }}
                ></span>40% planting trees
              </p>
              <p className="paragraph text-white">
                <span
                    style={{
                        backgroundColor: "#AC94F1"
                    }}
                ></span>35% cleanliness program
              </p>
              <p className="paragraph text-white">
                <span
                    style={{
                        backgroundColor: "#FFF0CA"
                    }}
                ></span>10% helping people
              </p>
              <p className="paragraph text-white">
                <span
                    style={{
                        backgroundColor: "#F9CF64"
                    }}
                ></span>10% animal safety
              </p>
              <p className="paragraph text-white">
                <span
                    style={{
                        backgroundColor: "#F38FBF"
                    }}
                ></span>5% feeding the poor
              </p>
            </div>
          </article>
          {/* right side */}
          <article className="home_spend_right">
            <Chart data={data} />
          </article>
        </section>
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

      
    </div>
  );
};

export default Home;
