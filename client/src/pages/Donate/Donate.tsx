import './donate.scss'
import '../../styles/generic.scss'
import { lazy, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LineHeader = lazy(() => import('../../components/lineHeader/LineHeader'))
const DonateTabs = lazy(() => import('../../components/Tabs/DonateTabs'))

const Donate = () => {
    const navigate = useNavigate()
    const moveToContactPage = () => {
        navigate('/contact')
    }
    const moveToDonatePage = () => {
        navigate('/donate')
    }

    const headerLeftRef = useRef(null)
    const headerRightRef = useRef(null)
    const dontLeftRef = useRef(null)
    const dontRightRef = useRef(null)
    const duseRef = useRef(null)
    const contRef = useRef(null)

    const [headerLeft, setHeaderLeft] = useState(false)
    const [headerRight, setHeaderRight] = useState(false)
    const [dontLeft, setDontLeft] = useState(false)
    const [dontRight, setDontRight] = useState(false)
    const [dUse, setDUse] = useState(false)
    const [cont, setCont] = useState(false)

    useEffect(() => {
        const header_left = headerLeftRef.current
        const header_right = headerRightRef.current
        const dont_left = dontLeftRef.current
        const dont_right = dontRightRef.current
        const d_use = duseRef.current
        const contribute = contRef.current

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === headerLeftRef.current) {
                        setHeaderLeft(entry.isIntersecting)
                    }
                    if (entry.target === headerRightRef.current) {
                        setHeaderRight(entry.isIntersecting)
                    }
                    if (entry.target === dontLeftRef.current) {
                        setDontLeft(entry.isIntersecting)
                    }
                    if (entry.target === dontRightRef.current) {
                        setDontRight(entry.isIntersecting)
                    }
                    if (entry.target === duseRef.current) {
                        setDUse(entry.isIntersecting)
                    }
                    if (entry.target === contRef.current) {
                        setCont(entry.isIntersecting)
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
        if (dont_left) {
            observer.observe(dont_left)
        }
        if (dont_right) {
            observer.observe(dont_right)
        }
        if (d_use) {
            observer.observe(d_use)
        }
        if (contribute) {
            observer.observe(contribute)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div className="donate">
            <header className="donate_header">
                <div className="donate_header_container container mx-auto">
                    <div
                        ref={headerLeftRef}
                        className={`donate_header_container_left ${headerLeft ? 'donate_header_container_left_show' : ''}`}
                    >
                        <LineHeader text="DONATE" />
                        <div className="donate_header_container_left_bottom">
                            <h1 className="heading_one">
                                Making a donation for Nature.
                            </h1>
                            <p className="paragraph_small">
                                When you donate, you’re supporting effective
                                solutions to big environmental challenges—an
                                investment in the future of our planet.
                            </p>
                            <button className="green_btn">Donate now</button>
                        </div>
                    </div>
                    <div
                        ref={headerRightRef}
                        className={`donate_header_container_right ${headerRight ? 'donate_header_container_right_show' : ''}`}
                    >
                        <img
                            src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1710415524/Image_vh2b6s.png"
                            alt="donate"
                        />
                    </div>
                </div>
            </header>

            <div className="donate_contribute container mx-auto">
                <div
                    ref={dontLeftRef}
                    className={` donate_contribute_left ${dontLeft ? 'donate_contribute_left_show' : ''}`}
                >
                    <h2 className="heading_two">
                        How you can contribute to protect Earth
                    </h2>
                    <p className="paragraph_small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div
                    ref={dontRightRef}
                    className={`donate_contribute_right ${dontRight ? 'donate_contribute_right_show' : ''}`}
                >
                    <DonateTabs />
                </div>
            </div>

            <div
                ref={duseRef}
                className={`donation_use container mx-auto mb-28 ${dUse ? 'donation_use_show' : ''}`}
            >
                <h1 className="heading_two">How we use your donation</h1>
                <p className="paragraph_small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Nunc ut sem vitae risus
                    tristique posuere.
                </p>
                <p className="paragraph_small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Nunc ut sem vitae risus
                    tristique posuere.
                </p>
            </div>

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
        </div>
    )
}

export default Donate
