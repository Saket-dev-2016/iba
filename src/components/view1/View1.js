import React from 'react'; 
import { Row, Col } from 'react-flexbox-grid';
import Geo from "./Geo"
import Bar from "./Bar"
import Racing from "./Racing"
import Line from "./Line"
// import Filter from "./filter"
import FormLabel from '@material-ui/core/FormLabel';
import {Form} from 'react-bootstrap';
import "../../css/view1/view1.css";

import data from './SampleData/LocationData.json';

class View1 extends React.Component 
{
    constructor(props){
        super(props);
        this.state = { locationName: "",
                        points: [] }
    }

    set_loc(event) {
        this.setState({
            locationName: event.target.value,
        })
    }
    
    render() 
    {

        return <React.Fragment>
            {/* <h1>Branch Dynamic View-1</h1>
            <h2> Inside View1 test</h2> */}
            <Row style={{width:"97%"}}>
                <Col lg={3} md={12}>
                    {/* Moved Filter.js code here due to state exchange */}
                    <div className="filter">
                        <Form>
                            <Form.Group>
                                <FormLabel component="legend" style={{color:"black",fontWeight:"bold", marginTop:"10%"}}>Location</FormLabel>
                                <select onChange={(event)=>this.set_loc(event)}>
                                    <option key = "first" value = "first"></option>
                                    {data.map(items=> (
                                        <option key = {items.locationName} value = {items.locationName}>{items.locationName}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col lg={9}>
                    <Row>
                        <Col lg={6} md={12}> 
                            <Geo loc={this.state.locationName} /> 
                        </Col>
                        <Col lg={6} md={12}> 
                            <Racing/>
                        </Col>
                        <Col lg={6} md={12}>
                           <Line/>
                        </Col>
                        <Col lg={6} md={12}>
                            <Bar/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </React.Fragment>
    }
}
export default View1;
