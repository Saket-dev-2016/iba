import React from 'react'; 
import welcome from  './Welcome.js';
import view1 from './view1/View1.js';
import view2 from './view2/View2.js';
import view3 from './view3/View3.js';
import view4 from './view4/View4.js';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component 
{
    render() 
    {
        return (<Router>
                    <div style={{marginBottom:"2%",backgroundColor:"lightgray"}} >
                        <h1>Indian Banking Analytics</h1>
                        <Link to="/view1">View1</Link> |
                        <Link to="/view2"> View2 </Link> |
                        <Link to="/view3"> View3 </Link> |
                        <Link to="/view4"> View4 </Link>
                        <br/> <br/>
                        <Route exact path = "/" component = {welcome} />
                        <Route path = "/view1" component = {view1} />
                        <Route path = "/view2" component = {view2} />
                        <Route path = "/view3" component = {view3} />
                        <Route path = "/view4" component = {view4} />
                    </div>
                </Router>)
    }
}
export default App;

