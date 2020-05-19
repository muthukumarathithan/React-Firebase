import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/Projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/Projects/CreateProject'

class App extends Component{
  render(){
  return (
          <BrowserRouter>
            <div className="App">
              <Navbar/>
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/project/:id' component={ProjectDetails} />
                    <Route exact path='/SignIn' component={SignIn} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Create' component={CreateProject} />
                  </Switch>
            </div>
          </BrowserRouter>
  );
 }
}

export default App;
