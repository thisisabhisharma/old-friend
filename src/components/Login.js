import React, { Component } from "react";
import { render } from "@testing-library/react";
import firebase from "../firebase";
import { useState } from "react";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "+91",
    };
    this.numberChange = this.numberChange.bind(this);
  }

  numberChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    firebase
      .auth()
      .signInWithPhoneNumber(this.state.number, recaptcha)
      .then(function (e) {
        let code = prompt("enter the otp", "");

        if (code == null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + " Number verified";
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  render() {
    return (
      // <div>
      //     <label></label>
      //     <button onClick={this.handleClick} >click here</button>
      //     <div id="recaptcha"></div>
      // </div>

      <div className="outer-div">
        <div className="left-div"></div>
        <label></label>
        <div className="right-div">
          <p className="welcomeText">WELCOME</p>
          <form>
            <input
              className="enterPhone"
              type="text"
              onChange={this.numberChange}
              id="number"
              placeholder="Phone"
              value={this.state.number}
            ></input>
            <div id="recaptcha"></div>
            <button
              className="continueWithPhone"
              type="button"
              onClick={this.handleClick}
            >
              Continue with phone
            </button>
            <p className="textColor">
              By clicking continue you are accepting our terms and conditions
            </p>
          </form>
        </div>

        {/* <h1>Enter Verification code</h1>
        <form >
            <input type="text" id="verficationcode" placeholder="Enter verification code"></input>
            <button type="button" onClick="codeverify();">Verify code</button>
        </form> */}
      </div>
    );
  }
}

export default LoginScreen;
