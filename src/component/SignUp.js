import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    userInfo: {
      name: "",
      email: "",
      password: "",
    },
    message: "",
  };

  userInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [name]: value,
      },
    });
    // console.log(event.target);
  };

  checkInfo = () => {
    const { name, password, email } = this.state.userInfo;
    let message = "";

    if (!name) {
      message = "Please Fill the Name";
    } else if (!email) {
      message = "Please Fill the Email";
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email)) {
      message = "Enter Valid Email Address";
      return false;
    } else if (password.length < 8) {
      message = "Password must be at least 8 character long.";
    } else {
      this.props.setUserData(this.state.userInfo);
      this.props.setIsSignUp(true);
    }

    this.setState({
      message,
    });

    //  else {
    //   alert("You have entered an invalid Email Address!");
    //   return false;
    // }
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    if (this.props.isSignUp) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          <p>{this.state.message}</p>
          <div>
            <label>Name</label>
            <br />
            <input
              onChange={this.userInput}
              type="text"
              name="name"
              className="name"
            />
          </div>
          <div>
            <label>Email address</label>
            <br />
            <input
              onChange={this.userInput}
              type="email"
              name="email"
              className="email"
            />
          </div>

          <div>
            <label>Password</label>
            <br />
            <input
              onChange={this.userInput}
              type="password"
              name="password"
              className="password"
            />
          </div>
          <div>
            <button type="button" onClick={this.checkInfo}>
              SignUp
            </button>
          </div>
          <div>
            <p>
              I have already resister. <Link to="/Login">Login</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
