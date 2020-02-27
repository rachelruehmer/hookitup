import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from "./User";
import Id from "./Id";
import Details from "./Details";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Link to ="/">View Users </Link>
        <Link to ="/id">View information</Link>
        <Link to ="/:id/details">View Details</Link>

        <Switch>
          <Route exact path= "/" component= {User}/>
          <Route exact path= "/id" component= {Id}/>
          <Route exact path='/:id/details' component={Details} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}


export default App;

