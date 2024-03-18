import "./media.scss";
import "../../styles/generic.scss";
import { lazy, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));
const NewsCard = lazy(() => import("../../components/card/NewsCard"));
const TitleLine = lazy(() => import("../../components/titleLine/TitleLine"));
const Event = lazy(() => import("../../components/event/Event"));


const Media = () => {

    const navigate= useNavigate();
    const moveToEventPage = () => {
        navigate("/event");
    }


    const headerLeftRef = useRef(null);
    const headerRightRef = useRef(null);
    const newsRef = useRef(null);


    const [headerLeft, setHeaderLeft] = useState(false);
    const [headerRight, setHeaderRight] = useState(false);
    const [newsCards, setNewsCards] = useState(false);


  useEffect(() => {

    const header_left = headerLeftRef.current;
    const header_right = headerRightRef.current;
    const news = newsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.target === headerLeftRef.current){
          setHeaderLeft(entry.isIntersecting);
        }
        if(entry.target === headerRightRef.current){
          setHeaderRight(entry.isIntersecting);
        }
        if(entry.target === newsRef.current){
          setNewsCards(entry.isIntersecting);
        }
      })
    }, {threshold: 0.2})

    if(header_left){
      observer.observe(header_left);
    }
    if(header_right){
      observer.observe(header_right);
    }
    if(news){
      observer.observe(news);
    }


    return () => {
      observer.disconnect();
    }

  }, [])



  return (
    <div className="media">

        <header className="media_header">
            {/* container */}
            <div className="media_header_container container mx-auto">
                {/* left side */}
                <div ref={headerLeftRef} className={`media_header_container_left ${headerLeft ? "media_header_container_left_show" : ""}`}>
                    <LineHeader text="TOP NEWS" />
                    <div className="media_header_container_left_details">
                        <h1 className="heading_one">Our goal is to make water available for everyone</h1>
                        <p className="paragraph_small">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <button onClick={moveToEventPage} className="green_btn">Read more</button>
                    </div>
                </div>
                {/* right side */}
                <div ref={headerRightRef} className={`media_header_container_right ${headerRight ? "media_header_container_right_show" : ""}`}>
                        <div className="media_header_container_right_div">
                            <div className="media_header_container_right_div_image">
                                <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709891618/finsweet/home/Image_grepy9.png" alt="stuff" />
                            </div>
                            <div className="media_header_container_right_div_details">
                                <h4 className="heading_four">Don't destroy greenery and don't spoil scenery.</h4>
                                <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                        <div className="media_header_container_right_div">
                            <div className="media_header_container_right_div_image">
                                <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709891616/finsweet/home/Image_1_lz782y.png" alt="stuff" />
                            </div>
                            <div className="media_header_container_right_div_details">
                                <h4 className="heading_four">Why saving wildlife is extremely important</h4>
                                <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                        <div className="media_header_container_right_div">
                            <div className="media_header_container_right_div_image">
                                <img src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709891616/finsweet/home/Image_2_grgpaj.png" alt="stuff" />
                            </div>
                            <div className="media_header_container_right_div_details">
                                <h4 className="heading_four">Caring for the present is caring for the future</h4>
                                <p className="paragraph_small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                            </div>
                        </div>
                </div>
            </div>
        </header>

        <div className="media_read container mx-auto px-8">
            <h2 className="heading_two text-center">Read Our Recent News</h2>
            <p className="paragraph_small text-center mb-16">Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>
        </div>

        <section ref={newsRef} className={`home_card_news ${newsCards ? "home_card_news_show" : ""}`}>
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

export default Media