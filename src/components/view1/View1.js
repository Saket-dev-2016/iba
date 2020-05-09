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
        // const useStyles = makeStyles((theme) => ({
        //     formControl: {
        //       margin: theme.spacing(1),
        //       minWidth: 120,
        //     },
        //     selectEmpty: {
        //       marginTop: theme.spacing(2),
        //     },
        //   }));

        //   const classes = useStyles();
        // const [age, setAge] = React.useState('');

            // const handleChange = (event) => {
            //     setAge(event.target.value);
            // };  

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
        
                                <Select
                                    style={{width:"80%"}}
                                    value={this.state.locationName}
                                    onChange={(event) => this.set_loc(event)}
                                >
                                    {data.map(items=> (
                                        <MenuItem key = {items.locationName} value = {items.locationName}>{items.locationName.toUpperCase()}</MenuItem>
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
