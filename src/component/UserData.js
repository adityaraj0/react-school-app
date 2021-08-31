import React, { Component } from "react";

class UserData extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
    },
    message: "",
  };

  users = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
    // console.log(this.state.user);
  };

  addUser = () => {
    const { userList } = this.props;
    const { user } = this.state;
    const updatedList = [...userList, user];
    this.props.setUserList(updatedList);
  };

  delUser = (index) => {
    let { userList } = this.props;
    if (userList.length === 0) {
      userList.pop();
    } else {
      userList.splice(index, 1);
    }
    this.props.setUserList(userList);
    this.setState({
      message: "Deleted",
    });
  };

  render() {
    console.log("userList", this.props.userList);
    return (
      <div>
        <div>
          <label>Name</label>
          <br />
          <input
            onChange={this.users}
            type="text"
            name="name"
            className="name"
          />
        </div>
        <div>
          <label>Email address</label>
          <br />
          <input
            onChange={this.users}
            type="email"
            name="email"
            className="email"
          />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            onChange={this.users}
            type="password"
            name="password"
            className="password"
          />
        </div>
        <div>
          <button type="button" onClick={this.addUser}>
            Add User
          </button>
        </div>
        <div>
          <p>
            {this.props.userList.map((item, index) => (
              <div>
                <p key={index}>
                  Sl.No.: {index + 1} Name : {item.name}, Email : {item.email}{" "}
                  ,Password :{item.password}
                </p>
                <button type="button" onClick={() => this.delUser(index)}>
                  Delete User
                </button>
              </div>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default UserData;
