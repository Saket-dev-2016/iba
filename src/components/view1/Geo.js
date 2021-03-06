import React, { Component } from "react";
import HPlatform, { HMap, HMapMarker } from "react-here-map";
import icon from "../../images/icon.svg"
import data from "./SampleData/LocationData.json"
// import {Form} from 'react-bootstrap';
 

 
class Geo extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }

    render (){
        let p = []
        p = data.filter(item => item.locationName === this.props.loc).map(item => <HMapMarker coords={{lat: item.latitute, lng: item.longitute}} icon={icon} />)
        let len = p.length
    return(
        <div  style={{backgroundColor:"gray",borderRadius:"10%",padding:"20px",marginBottom:"10px"}}>
            <HPlatform
                app_id="146I1SvldQTQqQ8zDG1x"
                app_code="WQgbU-3h_tVc6bT7aBr0nAOYQoDc8smHvuKnpP4R9h8"
                useCIT
                useHTTPS
                interactive
                // includeUI
                // includePlaces
            >
                <HMap
                style={{
                height: window.innerHeight*0.415
                }}
                mapOptions={{ center: { lat:17.123184	, lng: 79.208824  } }}
                useEvents // Required for events
                mapEvents={{ pointerdown: e => console.log("Map Pointer Down", e) }}>
                {p}         
            </HMap>
            </HPlatform>
            <div style={{marginTop:"10px",color:"white",textAlign:"left"}}>
                <span style={{left:"10%",position:"relative"}}>Location : {this.props.loc.toUpperCase()}</span>
                <span style={{left:"45%",position:"absolute"}}>Count : {len}</span>
            </div>
  </div>
);
}
}

export default Geo;