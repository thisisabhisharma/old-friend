import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { signout, adminSignout } from "./actions/userActions";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";

import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
// import AdminRoute from "./components/AdminRoute";
import adminSigninScreen from "./admin/adminSigninScreen";
import adminPanel from "./admin/adminPanel";
import SchoolScreen from "./screens/SchoolScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const adminSignin = useSelector((state) => state.adminSignin);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { userInfo } = userSignin;
  const { adminInfo } = adminSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const adminSignoutHandler = () => {
    dispatch(adminSignout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              OLD FRIEND
            </Link>
          </div>
          {/* <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div> */}
          <div>
            {adminInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {adminInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#admin" onClick={adminSignoutHandler}>
                      Sign Out as admin
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/admin">Sign In as admin</Link>
            )}
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">User Sign In</Link>
            )}
          </div>
        </header>
        <aside className={sidebarIsOpen ? "open" : ""}>
          <ul className="categories">
            <li>
              <strong>User Info</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/signin" exact component={SigninScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/school/:id" component={SchoolScreen}></Route>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/admin" component={adminSigninScreen} exact></Route>
          <Route path="/adminpanel" component={adminPanel} exact></Route>
          {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
