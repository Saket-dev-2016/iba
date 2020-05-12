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
    <React.Fragment>
      <RacingBarChart data={data} />
      <button onClick={() => setStart(!start)}>
        {start ? "PAUSE" : "START"}
      </button>
      <button id = "res" onClick={()=> {
        setData(racingData[0].data); setStart(false); setYear(racingData[0].year);setIndex(0);}}>
          RESET
      </button>
      <span style = {{float:"right", padding:"10px", backgroundColor:"lightgray", color:"white", borderRadius:"10%"}}>Year: {year}</span>
    </React.Fragment>
  );
}

export default Racing;
  