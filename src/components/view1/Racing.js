import React,{ useState, useEffect } from 'react'; 
import RacingBarChart from "./RacingBarChart";
import useInterval from "./useInterval";

import '../../css/view1/Racing.css';
import racingData from './SampleData/BranchData.json';

function Racing()  
{
  const [year, setYear] = useState();
  const [start, setStart] = useState();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState();
  const [maxIndex, setMaxIndex] = useState();

  useEffect(()=>
  {
      setIndex(0);
      setData(racingData[0].data);
      setStart(false);
      setYear(racingData[0].year);    
      setMaxIndex(racingData.length);    
  },[])

  useInterval(() => 
  {
    if (start && index<maxIndex) 
    {
      setIndex(index+1);
      setData(racingData[index].data);
      setYear(racingData[index].year);
    }
  }, 700);    

  return (
    <div style={{backgroundColor:"gray",borderRadius:"10%",padding:"20px",marginBottom:"10px",height:"20em"}}>
      <RacingBarChart data={data} />
      <div style={{position:"relative",bottom:"5%",textAlign:"left"}}>
        <button style = {{left:"5%",position:"absolute"}} onClick={() => setStart(!start)}>
          {start ? "PAUSE" : "START"}
        </button>
        <button style = {{left:"40%",position:"absolute"}} onClick={()=> {
          setData(racingData[0].data); setStart(false); setYear(racingData[0].year);setIndex(0);}}>
            RESET
        </button>
        <span style = {{left:"75%",position:"absolute", padding:"10px", backgroundColor:"lightgray", color:"white", borderRadius:"10%"}}>Year: {year}</span>
      </div>
    </div>
  );
}

export default Racing;
  