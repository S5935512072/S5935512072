import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject"
import CreateBook from "./components/projects/CreateBook"
import CreateBook1 from "./components/projects/CreateBook1"
import CreateCalender from "./components/projects/CreateCalender"
import "./App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Navbar />
         <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/project/:id' component={ProjectDetails} />
         <Route  path='/signin' component={SignIn} />
         <Route  path='/signup' component={SignUp} />
         <Route  path='/create' component={CreateProject} />
         <Route  path='/book' component={CreateBook} />
         <Route  path='/book1' component={CreateBook1} />
         <Route  path='/calender' component={CreateCalender} />
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
