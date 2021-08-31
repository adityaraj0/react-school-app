import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unSavedUser: {
        email: "",
        password: "",
      },
      message: "",
    };
    this.verifyUser = this.verifyUser.bind(this);
  }

  verifyUser() {
    const { unSavedUser } = this.state;
    const savedUser = this.props.userData;

    if (
      savedUser.email === unSavedUser.email &&
      savedUser.password === unSavedUser.password
    ) {
      this.props.setIsLoggedIn(true);
      console.log("this props ====>", this.props);
    } else {
      this.setState({
        message: "Invalid email or password",
      });
    }
  }

  setUser = (event) => {
    const { name, value } = event.target;

    this.setState({
      unSavedUser: {
        ...this.state.unSavedUser,
        [name]: value,
      },
    });
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Sign In</h1>
        <p style={{ color: "red" }}>{this.state.message}</p>
        <form>
          <div className="">
            <label>Email</label> <br />
            <input
              onChange={this.setUser}
              type="email"
              name="email"
              className="email"
            />
            <br />
          </div>
          <div>
            <label>Password</label> <br />
            <input onChange={this.setUser} type="password" name="password" />
            <br />
          </div>

          <button type="button" onClick={this.verifyUser}>
            Login
          </button>
          <br />
          <Link exact to="/signup">
            SignUp
          </Link>
        </form>
      </div>
    );
  }
}

export default login;
