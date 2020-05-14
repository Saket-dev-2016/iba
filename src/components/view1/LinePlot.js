import React from 'react'; 
import {Line} from 'react-chartjs-2';

class LinePlot extends React.Component 
{
    
    render() 
    {

        return(
            <div style={{backgroundColor:"gray",borderRadius:"10%",padding:"20px",marginBottom:"10px",height:"20em"}}>
                <Line 
                    data = 
                    {{
                        labels: this.props.yearData.data.map(item => item.name),
                        datasets:
                        [
                            {
                                data:this.props.yearData.data.map(item => item.count),
                                backgroundColor:
                                [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)',
                                    'rgba(255, 99, 132, 0.6)'
                                ]
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
                          text:'Count of Banks for : '+this.props.yearData.year,
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
