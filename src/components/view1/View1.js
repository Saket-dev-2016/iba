import React from 'react'; 
import { Row, Col } from 'react-flexbox-grid';
import Geo from "./Geo"
import Bar from "./Bar"
import Racing from "./Racing"
import Line from "./Line"
import FormLabel from '@material-ui/core/FormLabel';
import {Form} from 'react-bootstrap';
import "../../css/view1/view1.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
        var lookup = {};
        var items = data;
        var result = [];

        for (var item, i = 0; !!(item = items[i++]);) {
          var name = item.locationName;
          if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
          }
        }
        result.sort()
            return <React.Fragment>
            <Row style={{width:"97%"}}>
                <Col lg={3} md={12}>
                    {/* Moved Filter.js code here due to state exchange */}
                    <div className="filter">
                        <Form>
                            <Form.Group>
                                <FormLabel component="legend" style={{color:"black",fontWeight:"bold", marginTop:"10%"}}>Location</FormLabel>
                                <Select
                                    style={{width:"80%"}}
                                    value={this.state.locationName}
                                    onChange={(event) => this.set_loc(event)}
                                >
                                    {result.map(items=> (
                                        <MenuItem key = {items} value = {items}>{items.toUpperCase()}</MenuItem>
                                    ))}
                                </Select>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col lg={9}>
                    <Row>
                        <Col lg={6} md={12} style={{backgroundColor:"gray",borderRadius:"10%",padding:"20px"}}> 
                            <Geo loc={this.state.locationName} /> 
                        </Col>
                        <Col lg = {1}></Col>
                        <Col lg={5} md={12} style={{backgroundColor:"gray",borderRadius:"10%",padding:"20px"}}> 
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
