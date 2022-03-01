import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function LoginLayout(props) {
  const matchPath = props.match.path;
  //console.log("loginLayout rendered");
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path={`${matchPath}`}
          render={props =>
            matchPath === "/login" ? (
              <Login {...props} />
            ) : (
              <Register {...props} />
            )
          }
        />
      </Switch>
    </>
  );
}

export default React.memo(LoginLayout);
