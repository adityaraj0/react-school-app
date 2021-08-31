import Home from "./component/Home";
import Login from "./component/Login";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import UserData from "./component/UserData";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({});
  const [userList, setUserList] = useState([]);

  console.log("Sign up data ===>", userData);
  console.log("Updated List ===>", userList);
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/login">
            <Login
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              isSignUp={isSignUp}
              userData={userData}
            />
          </Route>
          <Route path="/signup">
            <SignUp
              isLoggedIn={isLoggedIn}
              setIsSignUp={setIsSignUp}
              isSignUp={isSignUp}
              setUserData={setUserData}
            />
          </Route>
          <Route path="/userdata">
            <UserData userList={userList} setUserList={setUserList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
