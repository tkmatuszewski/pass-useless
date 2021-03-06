import React, {Component} from "react";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            successMsg: "",
            error: [],
            errorName : "",
            errorEmail: "",
            errorMessage: ""
        }
    }

    saveData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
        //name
        const name = this.state.name;
        if ((name.split(" ").length >= 2) || (name === "")) {
            let err = "Podane imię jest nieprawidłowe!";
            this.setState({errorName : err})
        } else {
            console.log("name correct");
        }
        //    email
        const mail = this.state.email;
        if ((this.validateEmail(mail)) && (mail !=="")) {
            console.log("email vaild");
        } else {
            let err = "Podany email jest nieprawidłowy!";
            this.setState({errorEmail: err})
        }
        //    message
        const message = this.state.message;
        if (message.length < 120) {
            let err = "Wiadomość musi mieć co najmniej 120 znaków!";
            this.setState({errorMessage: err})
        }
        else {
            console.log("message valid");
        }
        //fetch
        if (this.state.error.length === 0) {
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
                .then((response) => response.text())
                .then((data) => {
                        if (data.includes("success")) {
                            this.setState({
                                success: data,
                                successMsg: "Wiadomość została wysłana! Wkrótce się skontaktujemy."
                            });

                            setTimeout(() => {
                                this.setState({successMsg: " "})
                            }, 3000);
                        }
                    }
                )
                .catch((error) => {
                        console.error('Error:', error);
                        this.setState({success: error})
                    }
                )
            ;
        }
    }
    ;

    render() {
        return (
            <div className="contactForm_main" id="contact">
                <div className="contactForm_top">
                    <div className="contactForm_img">
                        <div className="contactForm_img_mask"></div>
                    </div>
                    <div className="contactForm_content">
                        <div className="contactForm_header">
                            <h3 className="contactForm_title">Skontaktuj się z nami</h3>
                            <div className="contactForm_title_decor"></div>
                            <div className="contactForm_header_success">{this.state.successMsg}</div>
                        </div>
                        <form action="" className="contactForm_form" onSubmit={this.submitHandler}>
                            <label htmlFor="" placeholder="Krzysztof" className="contactForm_form_name">Wpisz swoje imię
                                <input name="name" type="text" onChange={this.saveData}/>
                                <span className="contactForm_form_error"> {this.state.errorName}</span>
                            </label>
                            <label htmlFor="" className="contactForm_form_mail">Wpisz swój email
                                <input type="email" name="email" placeholder="abc@xyz.pl" onChange={this.saveData}/>
                                <span className="contactForm_form_error"> {this.state.errorEmail}</span>
                            </label>
                            <label htmlFor="" className="contactForm_form_msg">Wpisz swoją wiadomość
                                <textarea name="message" onChange={this.saveData}
                                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                <span className="contactForm_form_error"> {this.state.errorMessage}</span>
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
}

export default ContactForm;