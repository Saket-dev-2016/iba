import React from 'react'; 
import { Grid, Row, Col } from 'react-flexbox-grid';
import Geo from "./Geo"
import Bar from "./Bar"
import Racing from "./Racing"
import Line from "./Line"
import Filter from "./filter"

class View1 extends React.Component 
{
    render() 
    {
        return <React.Fragment>
            {/* <h1>Branch Dynamic View-1</h1>
            <h2> Inside View1 test</h2> */}
            <Row style={{width:"97%"}}>
                <Col lg={3} md={12}>
                    <Filter/>
                </Col>
                <Col lg={9}>
                    <Row>
                        <Col lg={6} md={12}> 
                            <Geo/> 
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
