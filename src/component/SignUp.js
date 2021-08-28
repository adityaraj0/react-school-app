import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email address</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>

          <button type="button">SignUp</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
