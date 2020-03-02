import React from 'react';
import './App.css';
// import Context from './Context';
import {myProvider} from './Context';
import allSupers from './assets/characters-corrupt.json'; 
import ShowAll from './components/ShowAll';
import Supershow from './components/Supershow';

// import Provider from ''
// import Compare from './components/Compare';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
    // ,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

    let allIds = allSupers.map(item=> item.id).sort((a,b)=> a-b);

    this.state = {data: allSupers, ids: allIds};
  }
  render() {
    console.log(this.state);
    console.log(this.context);
    return (
          <myProvider value={this.state}>
      <Router>
      <div>

        <Switch>

          <Route path="/showall">

            <ShowAll />
          </Route>
          <Route path="/showone/:id" component={Supershow} />>

          {/* <Route path="/compare">
            <Compare />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>

  
    </Router>
          </myProvider>
      // </Context.Provider>
    );
  }
}
export default App;

function Home() {
  // debugger
  return (
    <div>
      <h2>SuperHero House</h2>
      <Link to="showall"> Show All Supers</Link>

    </div>
  );
}

// Home.contextType = Context;