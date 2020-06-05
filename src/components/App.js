import React from 'react'; 
import view1 from './view1/View1.js';
import view2 from './view2/View2.js';
import view3 from './view3/View3.js';
import view4 from './view4/View4.js';
import './../css/App.css';
import DefaultLayout from './Layout'
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Welcome from './Welcome.js';

class App extends React.Component 
{
    render() 
    {
        return (
            <div className="App"> 
            <Router>
            <DefaultLayout>
            <Switch>
              <Route path="/view1/View1" component={view1}/>
              <Route path="/view2/View2" component={view2} />
              <Route path="/view3/View3" component={view3}/>
              <Route path="/view4/View4" component={view4}/>
              <Route path='/' component={Welcome}/>
            </Switch>
            </DefaultLayout>
            </Router>   
            </div>
        )
    }
}
export default App;

