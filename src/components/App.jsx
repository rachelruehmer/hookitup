import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from "./User";
import Details from "./Details";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Link to ="/">View Users </Link>
        

        <Switch>
          <Route exact path= "/" component= {User}/>
          <Route exact path='/:id/details' component={Details} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}


export default App;

