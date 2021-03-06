import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import InstructorLoginForm from "./components/instructor-login-form";
import InstructorProfile from "./components/instructor-profile";
import Homepage from "./components/index-homepage";
import AddAssignment from "./components/instructor-add-assignments";
import AllAssignments from "./components/instructor-all-assignment";
import EditAssignmentDate from './components/instructor-edit-assignment-date';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginClicked: false
    };
  }

  render() {
    return (
      <Router>
        <Switch>

          {/* Common Homepage */}
          <Route exact path="/" render={props => <Homepage {...props} />} />

          {/* Instructor part */}
          <Route path="/login" component={InstructorLoginForm} />
          <Route path="/instructor/:username" component={InstructorProfile} />
          <Route
            path="/instructor/:username/assignment/add"
            component={AddAssignment}
          />
          <Route
            path={`/instructor/:username/assignments/update`}
            component={AllAssignments}
          />

          <Route
            path={`/instructor/:username/assignments/update/:assignmentID`}
            component={EditAssignmentDate}
          />

        </Switch>
      </Router>
    );
  }
}
