import React,{Component}from 'react'
import '../css/layout.css'
import logo from '../images/IBA.svg'
import {Row, Col} from 'react-flexbox-grid'
import Navbar from './navbar'
class DefaultLayout extends Component {

    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    
    
    render() { 
        
        return (
        <div> 
            <Row className="custom-header" >
                <Col lg={2} md={2} xs={2}>
                    <img className="logo" src={logo} alt="IBA"></img>
                </Col>
                <Col lg={10} md={10} xs={10}>
                    <h1 className="header">Indian Banking Analytics</h1>
                </Col>
                <Col lg={12} md={12} xs={12} className="nav-bar">
                    <Navbar/>
                </Col>
            </Row>
                

           

          
        
          <div className='render-area'>
              {this.props.children}
        </div>
          
        </div>);
    }
}
 
export default DefaultLayout;

