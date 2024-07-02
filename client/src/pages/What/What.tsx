import './what.scss'
import '../../styles/generic.scss'
import { lazy, useEffect, useRef, useState } from 'react'
import icon from '../../assets/home/Icon.svg'
import icon1 from '../../assets/home/Icon (1).svg'
import icon2 from '../../assets/home/Icon (2).svg'
import icon3 from '../../assets/home/Icon (3).svg'
import icon4 from '../../assets/home/Icon (4).svg'
import icon5 from '../../assets/home/Icon (5).svg'
import { useNavigate } from 'react-router-dom'

const LineHeader = lazy(() => import('../../components/lineHeader/LineHeader'))
const Card = lazy(() => import('../../components/card/Card'))
const TitleLine = lazy(() => import('../../components/titleLine/TitleLine'))
const NewsCard = lazy(() => import('../../components/card/NewsCard'))
const Event = lazy(() => import('../../components/event/Event'))

const What = () => {
    const navigate = useNavigate()
    const moveToContactPage = () => {
        navigate('/contact')
    }
    const moveToDonatePage = () => {
        navigate('/donate')
    }

    const headerLeftRef = useRef(null)
    const headerRightRef = useRef(null)
    const cardsRef = useRef(null)
    const contRef = useRef(null)
    const newsRef = useRef(null)

    const [headerLeft, setHeaderLeft] = useState(false)
    const [headerRight, setHeaderRight] = useState(false)
    const [cardSlide, setCardSlide] = useState(false)
    const [cont, setCont] = useState(false)
    const [newsCards, setNewsCards] = useState(false)

    useEffect(() => {
        const header_left = headerLeftRef.current
        const header_right = headerRightRef.current
        const cards = cardsRef.current
        const contribute = contRef.current
        const news = newsRef.current

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === headerLeftRef.current) {
                        setHeaderLeft(entry.isIntersecting)
                    }
                    if (entry.target === headerRightRef.current) {
                        setHeaderRight(entry.isIntersecting)
                    }
                    if (entry.target === cardsRef.current) {
                        setCardSlide(entry.isIntersecting)
                    }
                    if (entry.target === contRef.current) {
                        setCont(entry.isIntersecting)
                    }
                    if (entry.target === newsRef.current) {
                        setNewsCards(entry.isIntersecting)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (header_left) {
            observer.observe(header_left)
        }
        if (header_right) {
            observer.observe(header_right)
        }
        if (cards) {
            observer.observe(cards)
        }
        if (contribute) {
            observer.observe(contribute)
        }
        if (news) {
            observer.observe(news)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className="what">
            <header className="what_header container mx-auto">
                <div
                    ref={headerLeftRef}
                    className={`what_header_left ${headerLeft ? 'what_header_left_show' : ''}`}
                >
                    <LineHeader text="WHAT WE DO" />
                    <h1 className="heading_one">We are working worldwide</h1>
                    <p className="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Incidunt quo sed enim qui animi cumque nihil
                        accusamus facere, reprehenderit aliquid quasi
                        distinctio, veniam doloribus adipisci explicabo illo est
                        labore totam!
                    </p>
                </div>
                <div
                    ref={headerRightRef}
                    className={`what_header_right ${headerRight ? 'what_header_right_show' : ''}`}
                >
                    <img
                        src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1709882785/finsweet/home/Image_p04dg4.png"
                        alt="what"
                    />
                </div>
            </header>

            {/* for environment */}
            <section className="what_env">
                <div className="what_env_container container mx-auto">
                    <h2 className="heading_two">
                        What we do for the environment
                    </h2>
                    <div className="what_env_container_bottom">
                        <div>
                            <span>
                                <img src={icon} alt="stuff" />
                            </span>
                            <span>
                                <h4 className="heading_four">
                                    Build Healthy Cities
                                </h4>
                                <p className="paragraph_small">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim.
                                </p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <img src={icon1} alt="stuff" />
                            </span>
                            <span>
                                <h4 className="heading_four">
                                    Tree Plantation
                                </h4>
                                <p className="paragraph_small">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim.
                                </p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <img src={icon2} alt="stuff" />
                            </span>
                            <span>
                                <h4 className="heading_four">
                                    Protect Land and Water
                                </h4>
                                <p className="paragraph_small">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim.
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim.
                                </p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <img src={icon4} alt="stuff" />
                            </span>
                            <span>
                                <h4 className="heading_four">
                                    Water sustainability
                                </h4>
                                <p className="paragraph_small">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim.
                                </p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <img src={icon5} alt="stuff" />
                            </span>
                            <span>
                                <h4 className="heading_four">Biodiversity</h4>
                                <p className="paragraph_small">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="what_projects">
                <h4 className="heading_four text-center px-12">
                    PROJECTS WE HAVE DONE
                </h4>
                <h2 className="heading_two text-center px-12 mb-16">
                    We are creating a sustainable society, for everyone.
                </h2>
            </div>

            {/* projects card */}
            <section className="projects container mx-auto">
                <article
                    ref={cardsRef}
                    className={`projects_cards ${cardSlide ? 'projects_cards_show' : ''}`}
                >
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

            <div className="home_contribute container mx-auto">
                <div
                    ref={contRef}
                    className={`tint ${cont ? 'tint_show' : ''}`}
                ></div>
                <div className="home_contribute_content">
                    <h1 className="heading_one">
                        You can contribute to make
                        <br /> the environment greener!
                    </h1>
                    <div>
                        <button
                            onClick={moveToContactPage}
                            className="green_btn"
                        >
                            Join as a volunteer
                        </button>
                        <button
                            onClick={moveToDonatePage}
                            className="white_btn"
                        >
                            Donate
                        </button>
                    </div>
                </div>
            </div>

            <TitleLine text="Read Our News" />

            <section
                ref={newsRef}
                className={`home_card_news ${newsCards ? 'home_card_news_show' : ''}`}
            >
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
                <Event day="25" month="SEP" text="Weekly cleaning program" />
            </div>
        </div>
    )
}

export default What
