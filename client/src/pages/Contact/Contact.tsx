import "./contact.scss";
import "../../styles/generic.scss";
import { lazy } from "react";
import Socials from "../../assets/about/Social row.png";


const LineHeader = lazy(() => import("../../components/lineHeader/LineHeader"));


const Contact = () => {
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
                        <p className="paragraph">8 Brewery Drive, Hudson, NH 03051<br/>USA</p>
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
                     type="text"
                      />
                </div>
                <div className="contact_form_top_name">
                    <label className="paragraph_small" htmlFor="lName">Last Name</label>
                    <input
                     type="text"
                      />
                </div>
            </div>
            {/* email and subject */}
            <div className="contact_form_middle">
                <div className="contact_form_middle_email">
                    <label className="paragraph_small" htmlFor="email">Email</label>
                    <input 
                    type="email"
                     />
                </div>
                <div className="contact_form_middle_email">
                    <label className="paragraph_small" htmlFor="subject">Subject</label>
                    <input type="text" />
                </div>
            </div>
            <div className="contact_form_bottom">
                    <label className="paragraph_small" htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Type your message" id="message" cols={30} rows={5}></textarea>
            </div>
            <button className="green_btn">Send message</button>
        </form>

    </div>
  )
}

export default Contact