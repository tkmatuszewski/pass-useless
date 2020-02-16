import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ``,
            password: ``,
            passwordRep: ``,
            error: []
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password, passwordRep, error} = this.state;
        if ((password !== passwordRep) || (password === ``)) {
            let err = "Hasła muszą być takie same!";
            this.setState({error : this.state.error + err});
        }
        if (email === '') {
            let err = error.email = "Wpisz swój adres email!";
            this.setState({error : this.state.error + err });
        }
    };

    render() {
        return (
            <>
                <Navigation/>
                <div className="register_main">
                    <div className="logIn_header">
                        <h3 className="logIn_header_title">Załóż konto</h3>
                        <div className="logIn_header_decor"></div>
                    </div>
                    <form action="" className="register_form" onSubmit={this.handleSubmit}>
                        <div className="logIn_form_cnt">
                            <label htmlFor="" className="logIn_form_mail">Email
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Twój adres email"
                                    onChange={this.handleChange}/>
                            </label>
                            <label htmlFor="" className="logIn_form_password">Hasło
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Wpisz hasło"
                                    onChange={this.handleChange}/>
                            </label>
                            <label htmlFor="" className="logIn_form_password_repeat">Powtórz hasło
                                <input
                                    type="password"
                                    name="passwordRep"
                                    placeholder="Powtórz hasło"
                                    onChange={this.handleChange}/>
                            </label>
                        </div>
                    </form>
                    <div>{this.state.error}</div>
                    <div className="logIn_buttons">
                        <button className="logIn_register_btn" type="submit"><Link to={"/rejestracja"}>Załóż konto</Link></button>
                        <button className="logIn_login_btn">Zaloguj się</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Register