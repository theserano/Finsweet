import "./contact.scss";
import "../../styles/generic.scss";
import { lazy, useEffect, useState } from "react";
import Socials from "../../assets/about/Social row.png";
import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../../store/selector";
import { setFirstName, setEmail, setLastName, setMessage, setSubject, contactDataType, submitContactForm } from "../../store/contactSlice";
import { AppDispatch } from "../../store/store";
import axios from "axios";


const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));


const Contact = () => {
    const dispatch = useDispatch<AppDispatch>();
    const contactDetails = useSelector(selectContact);

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
    const [key, setKey] = useState('');

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

             dispatch(submitContactForm(data))
            console.log("doings");
        } catch (error) {
            console.log("error")
        }
    }

    const apiKey =  async () => {
        const API_BASE_URL = 'http://localhost:5000'
        const response = await axios.get(`${API_BASE_URL}/api/contact/api-key`)

        return setKey(response.data.key);
    }

    useEffect(() => {
        apiKey()
      }, [])


  return (
    <div className="contact">

        <header className="contact_header">
        <div className="contact_header_container container mx-auto">
            <div className="contact_header_container_left">
                <LineHeader text="CONTACT US" />
                <div className="contact_header_container_left_bottom">
                    <h1 className="heading_one">We'd love to hear from you</h1>
                    <p className="paragraph_small">Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                </div>
            </div>
                <div className="contact_header_container_right">
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
            <div className="contact_form_top">
                <div className="contact_form_top_name">
                    <label className="paragraph_small" htmlFor="fName">First Name</label>
                    <input
                    className="paragraph"
                     type="text"
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

        <div>
            
        </div>

    </div>
  )
}

export default Contact