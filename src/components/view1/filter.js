import React from 'react'; 
import FormLabel from '@material-ui/core/FormLabel';
import {Form} from 'react-bootstrap';

class View2 extends React.Component 
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
        return (
            <div className="filter">
                <Form>
                    <Form.Group>
                        <FormLabel component="legend" style={{color:"black",fontWeight:"bold", marginTop:"10%"}}>Locatiom</FormLabel>
                        <Form.Control
                            size='lg'
                            required
                            type="text"
                            placeholder="Location"
                            value={this.state.locationName}
                            onChange={(event)=>this.set_loc(event)}
                        />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default View2;
