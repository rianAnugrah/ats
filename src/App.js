import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidenav from './components/layout/Sidenav'
import Dashboard from './components/dashboard/Dashboard'
import PctData from './components/pct/pctData'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import master from './components/master/master';
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidenav />
          <header>
                  
          </header>
          <main>

         
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/pct'component={PctData} />

            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/master' component={master} />
            <Route path='/create' component={CreateProject} />
          </Switch>
          </main>
          <footer></footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
