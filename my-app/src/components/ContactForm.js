import React from "react";

function ContactForm() {
    return (
        <div className="contactForm_main" id="contact">
            <div className="contactForm_top">
                <div className="contactForm_img"><div className="contactForm_img_mask"></div></div>
                <div className="contactForm_content">
                    <div className="contactForm_header">
                        <h3 className="contactForm_title">Skontaktuj się z nami</h3>
                        <div className="contactForm_title_decor"></div>
                    </div>
                    <form action="" className="contactForm_form" >
                        <label htmlFor="" placeholder="Krzysztof" className="contactForm_form_name">Wpisz swoje imię
                            <input type="text"/>
                        </label>
                        <label htmlFor="" className="contactForm_form_mail">Wpisz swój email
                            <input type="email" placeholder="abc@xyz.pl"/>
                        </label>
                        <label htmlFor="" className="contactForm_form_msg">Wpisz swoją wiadomość
                            <input type="textarea"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        </label>
                        <button type="submit" className="contactForm_form_btn">Wyślij</button>
                    </form>
                </div>
            </div>
            <div className="contactForm_footer">
                <span>Copyright by CodersLab</span>
                <ul className="contactForm_bottom_social">
                    <li className="contactForm_bottom_social_facebook"></li>
                    <li className="contactForm_bottom_social_instagram"></li>
                </ul>
            </div>
        </div>
    );
}

export default ContactForm;