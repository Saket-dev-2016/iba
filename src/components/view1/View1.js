import React from 'react'; 
import { Row, Col } from 'react-flexbox-grid';
import Geo from "./Geo"
import Bar from "./BarPlot"
import Racing from "./Racing"
import LinePlot from "./LinePlot"
import FormLabel from '@material-ui/core/FormLabel';
import {Form} from 'react-bootstrap';
import "../../css/view1/view1.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import data from './SampleData/LocationData.json';
import branchData from './SampleData/BranchData.json';

class View1 extends React.Component 
{
    constructor(props){
        super(props);
        this.state = 
        { 
            year:"",
            locationName: "",
            points: [],
            yearData : branchData[0]
        }
    }

    set_loc(event) {
        this.setState({
            locationName: event.target.value,
        })
    }

    set_year(event) 
    {

        for (let item, i = 0; !!(item = branchData[i++]);)
        {
            if(item.year===event.target.value)
            {
                this.setState({yearData:item,year:event.target.value})        
            }
        }
        
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

        var years = [];
        for (i = 0; !!(item = branchData[i++]);)
        {
            years.push(item.year);
        }
            
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
                            <FormLabel component="legend" style={{color:"black",fontWeight:"bold", marginTop:"10%"}}>Year</FormLabel>
                            <Select
                                style={{width:"80%"}}
                                value={this.state.year}
                                onChange={(event) => this.set_year(event)}
                            >
                                {years.map(items=> (
                                    <MenuItem key = {items} value = {items}>{items}</MenuItem>
                                ))}
                            </Select>
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
                        <LinePlot yearData={this.state.yearData}/>
                    </Col>
                    <Col lg={6} md={12}>
                        <Bar yearData={this.state.yearData}/>
                    </Col>
                </Row>
            </Col>
        </Row>
        </React.Fragment>

    }

}

export default View1;
