import React from 'react'; 
import {Line} from 'react-chartjs-2';
import branchData from './SampleData/BranchData.json';
import { sum } from 'd3';

class LinePlot extends React.Component 
{
    
    render() 
    {

        return(
            <div style={{backgroundColor:"gray",borderRadius:"10%",padding:"20px",marginBottom:"10px"}}>
                <Line 
                    data = 
                    {{
                        //For gap of 10years in graph
                        // labels: branchData.filter(data => data.year%10===0).map(item => item.year),
                        labels: branchData.map(item => item.year),
                        datasets:
                        [
                            {
                                //For gap of 10years in graph
                                // data: branchData.filter(data => data.year%10===0).map(item => sum(item.data.map(element => element.count))),
                                data: branchData.map(item => sum(item.data.map(element => element.count))),
                                backgroundColor:'transparent',
                                borderColor:'rgba(54, 162, 235, 0.6)',
                                // backgroundColor:'rgba(54, 162, 235, 0.6)'
                            }
                        ]
                        
                    }}
                    height = {75}
                    width = {100}
                    options=
                    {{
                        title:
                        {
                          display:true,
                          text:'No. of Banks over years',
                          fontSize:25,
                          fontColor:"white"
                        },
                        legend:
                        {
                            display:false
                        },
                        scales: 
                        {
                            yAxes: 
                            [{
                                ticks: 
                                {
                                    fontColor: "white"
                                }
                            }],
                            xAxes: 
                            [{
                                ticks: 
                                {
                                    fontColor: "white"
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
    
}

export default LinePlot;
