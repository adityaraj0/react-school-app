import Home from "./component/Home";
import Login from "./component/Login";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn ===>", isLoggedIn);
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
