import React from 'react'; 
import welcome from  './Welcome.js';
import view1 from './view1/View1.js';
import view2 from './view2/View2.js';
import view3 from './view3/View3.js';
import view4 from './view4/View4.js';
import './../css/App.css';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component 
{
    render() 
    {
        return (<Router>
                    <div style={{marginBottom:"2%",backgroundColor:"lightgray"}} >
                        <h1 id="heading">Indian Banking Analytics</h1>
                        <div id="appcontent">
                            <Link to="/view1" className="btn">View1</Link> 
                            <Link to="/view2" className="btn"> View2 </Link> 
                            <Link to="/view3" className="btn"> View3 </Link> 
                            <Link to="/view4" className="btn"> View4 </Link>
                            <br/> <br/>
                            <Route exact path = "/" component = {welcome} />
                            <Route path = "/view1" component = {view1} />
                            <Route path = "/view2" component = {view2} />
                            <Route path = "/view3" component = {view3} />
                            <Route path = "/view4" component = {view4} />
                        </div>
                    </div>
                </Router>)
    }
}
export default App;

