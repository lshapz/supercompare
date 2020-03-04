import React from 'react';
import './App.css';
// import Context from './Context';
import MyContext, {MyProvider, supers} from './Context';
// import allSupers from './assets/characters-corrupt.json'; 
import ShowAll from './components/ShowAll';
import Supershow from './components/Supershow';
import Compare from './components/Compare';

// import Provider from ''

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

    this.addComparator = (id) =>{
      let foo = this.state.comparators;
      if (this.state.comparators.includes(id)) {
        foo = this.state.comparators;
        foo.splice(foo.indexOf(id), 1);
      } else if (foo.length < 2) {
        foo.push(id)
      }
      this.setState(state=>({
        comparators: foo
      })
      )
    }

    this.state = {data: supers, comparators: [], addComparator: this.addComparator};
  }
  render() {
    console.log(this.state);
    console.log(this.context);

    return (
          <MyProvider value={this.state}>
      <Router>
      <div>

        <Switch>

          <Route path="/showall">

            <ShowAll vsProp={this.state.comparators} />
          </Route>
          <Route path="/showone/:id" component={Supershow} />>

          <Route path="/compare/:id/:id2" component={Compare} />>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>

  
    </Router>
          </MyProvider>
      // </Context.Provider>
    );
  }
}
export default App;
App.contextType = MyContext;

function Home() {
  return (
    <div>
      <h2>SuperHero House</h2>
      <Link to="showall"> Show All Supers</Link>

    </div>
  );
}

// Home.contextType = Context;