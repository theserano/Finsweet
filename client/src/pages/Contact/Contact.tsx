import "./contact.scss";
import "../../styles/generic.scss";
import { lazy, useEffect, useRef, useState } from "react";
import Socials from "../../assets/about/Social row.png";
import { useDispatch } from "react-redux";
import { setFirstName, setEmail, setLastName, setMessage, setSubject, contactDataType, submitContactForm } from "../../store/contactSlice";
import { AppDispatch } from "../../store/store";


const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));


const Contact = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [fir, setFir] = useState("");
    const [las, setLas] = useState("");
    const [ema, setEma] = useState("");
    const [sub, setSub] = useState("");
    const [mes, setMes] = useState("");
    const [emptyF, setEmptyF] = useState(false);
    const [emptyL, setEmptyL] = useState(false);
    const [emptyE, setEmptyE] = useState(false);
    const [emptyS, setEmptyS] = useState(false);
    const [emptyM, setEmptyM] = useState(false);
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);
    const [headerLeft, setHeaderLeft] = useState(false);
    const [headerRight, setHeaderRight] = useState(false);


    const headerLeftRef = useRef(null);
    const headerRightRef = useRef(null);

    useEffect(() => {

        const header_left = headerLeftRef.current;
        const header_right = headerRightRef.current;

        const observer =  new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.target === headerLeftRef.current){
                    setHeaderLeft(entry.isIntersecting);
                }
                if(entry.target === headerRightRef.current){
                    setHeaderRight(entry.isIntersecting);
                }
            })
        }, {threshold: 0.2})

        if(header_left){
            observer.observe(header_left);
        }
        if(header_right){
            observer.observe(header_right)
        }

        return () => {
            observer.disconnect();
        }

    }, [])

    const handleContactSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(fir === '' || las === '' || ema === '' || sub === '' || mes === ''){
            setEmptyF(true);
            setEmptyL(true);
            setEmptyE(true);
            setEmptyS(true);
            setEmptyM(true);
        }
        try {
            const data: contactDataType = {
                firstName: fir,
                lastName: las,
                email: ema,
                subject: sub,
                message: mes
            }

             await dispatch(submitContactForm(data)).then(() => {
                 setDone(true);
                 setTimeout(() => {
                     setDone(false);
                 }, 5000)
                 setFir("");
                 setEma("");
                 setLas("");
                 setSub("");
                 setMes("")
             }).catch(() => {
                setError(true);
             })
            console.log("doings");
             
             
        } catch (error) {
            console.log("error")
        }
    }


  return (
    <div className="contact">

        <header className="contact_header">
        <div className="contact_header_container container mx-auto">
            <div ref={headerLeftRef} className={`contact_header_container_left ${headerLeft ? "contact_header_container_left_show" : ""}`}>
                <LineHeader text="CONTACT US" />
                <div className="contact_header_container_left_bottom">
                    <h1 className="heading_one">We'd love to hear from you</h1>
                    <p className="paragraph_small">Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                </div>
            </div>
                <div ref={headerRightRef} className={`contact_header_container_right ${headerRight ? "contact_header_container_right_show" : ""}`}>
                    <div className="contact_header_container_right_each flex flex-col gap-4">
                        <h4 className="heading_four">Let's talk</h4>
                        <p className="paragraph"><span style={{paddingRight: "1rem"}}>+1 23 456 789</span> <span>hello@finsweet.com</span></p>
                    </div>
                    <div className="contact_header_container_right_each flex flex-col gap-4">
                        <h4 className="heading_four">Head Office</h4>
                        <p className="paragraph">288 Muritala Muhammed way<br/>NRA</p>
                    </div>
                    <div className="contact_header_container_right_each flex flex-col gap-4">
                        <h4 className="heading_four">Branch Office</h4>
                        <p className="paragraph">178 Marconi St., Venice, 34293 <br/>Italy</p>
                    </div>
                    <div className="contact_header_container_right_each flex flex-col gap-4">
                        <span>
                            <img src={Socials} alt="socials" />
                        </span>
                    </div>
                </div>
        </div>
        </header>

        <form className="contact_form">
            {/* name block */}
            {error && (<p className="paragraph_small contact_error">Something went wrong</p>)}
            {done && (<p className="paragraph_small success">Thank you for filling the form</p>)}
            <div className="contact_form_top">
                <div className="contact_form_top_name">
                    <label className="paragraph_small" htmlFor="fName">First Name</label>
                    <input
                    className="paragraph"
                     type="text"
                     value={fir}
                     onChange={(e) => {
                        setEmptyF(false)
                         setFir(e.target.value)
                         dispatch(setFirstName(e.target.value))
                     }}
                      />
                      {emptyF && <p className={`${emptyF ? 'paragraph_small contact_error' : ''}`}>Field cannot be empty</p>}
                </div>
                <div className="contact_form_top_name">
                    <label className="paragraph_small" htmlFor="lName">Last Name</label>
                    <input
                    className="paragraph"
                     type="text"
                     value={las}
                     onChange={(e) => {
                        setEmptyL(false)
                        setLas(e.target.value)
                        dispatch(setLastName(e.target.value))
                    }}
                      />
                      {emptyL && <p className={`${emptyL ? 'paragraph_small contact_error' : ''}`}>Field cannot be empty</p>}
                </div>
            </div>
            {/* email and subject */}
            <div className="contact_form_middle">
                <div className="contact_form_middle_email">
                    <label className="paragraph_small" htmlFor="email">Email</label>
                    <input
                    className="paragraph" 
                    type="email"
                    value={ema}
                    onChange={(e) => {
                        setEmptyE(false)
                        setEma(e.target.value)
                        dispatch(setEmail(e.target.value))
                    }}
                     />
                     {emptyE && <p className={`${emptyE ? 'paragraph_small contact_error' : ''}`}>Field cannot be empty</p>}
                </div>
                <div className="contact_form_middle_email">
                    <label className="paragraph_small" htmlFor="subject">Subject</label>
                    <input
                    className="paragraph" 
                        type="text"
                        value={sub}
                        onChange={(e) => {
                            setEmptyS(false)
                            setSub(e.target.value)
                            dispatch(setSubject(e.target.value))
                        }}
                     />
                     {emptyS && <p className={`${emptyS ? 'paragraph_small contact_error' : ''}`}>Field cannot be empty</p>}
                </div>
            </div>
            <div className="contact_form_bottom">
                    <label className="paragraph_small" htmlFor="message">Message</label>
                    <textarea 
                        className="paragraph"
                        name="message" 
                        placeholder="Type your message" 
                        id="message" 
                        cols={30} 
                        rows={5}
                        value={mes}
                        onChange={(e) => {
                            setEmptyM(false)
                            setMes(e.target.value)
                            dispatch(setMessage(e.target.value))
                        }}
                    ></textarea>
                    {emptyM && <p className={`${emptyM ? 'paragraph_small contact_error' : ''}`}>Field cannot be empty</p>}
            </div>
            <button
             className="green_btn"
             onClick={handleContactSubmit}
            >Send message</button>
        </form>

        <div className="map_responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.173280324398!2d3.3736769758848837!3d6.499735123437224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6109587b1f%3A0xdd6210419ac6bf44!2sThe%20Nest%20Lounge!5e0!3m2!1sen!2sng!4v1710346171210!5m2!1sen!2sng" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Meet us"></iframe>
        </div>

    </div>
  )
}

export default Contact