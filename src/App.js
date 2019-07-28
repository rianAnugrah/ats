import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidenav from './components/layout/Sidenav'
import Dashboard from './scenes/dashboard/Dashboard'
import PctData from './scenes/pct/pctData'
import PctAdd from './scenes/pct/pctAdd'
import ProjectDetails from './scenes/projects/ProjectDetails'
import SignIn from './scenes/auth/SignIn'
import SignUp from './scenes/auth/SignUp'
import master from './scenes/master/master';
import CreateProject from './scenes/projects/CreateProject'
import Promise from './scenes/promise';

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
            <Route path='/pctadd'component={PctAdd} />

            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/master' component={master} />
            <Route path='/create' component={CreateProject} />

            {/* <Route path='/promise' component={Promise} /> */}


          </Switch>
          </main>
          <footer></footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
