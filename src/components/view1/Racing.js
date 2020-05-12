import React,{ useState, useEffect } from 'react'; 
import '../../css/view1/Racing.css';
import RacingBarChart from "./RacingBarChart";
import useInterval from "./useInterval";

const getRandomIndex = array => {
    return Math.floor(array.length * Math.random());
  };
  
  function Racing() 
  {
    const [iteration, setIteration] = useState(0);
    const [start, setStart] = useState(false);
    const [data, setData] = useState([])

    useEffect(()=>
    {
        setData(
        [{
          name: "alpha",
          value: 10,
          color: "#f4efd3"
        },
        {
          name: "beta",
          value: 15,
          color: "#cccccc"
        },
        {
          name: "charlie",
          value: 20,
          color: "#c2b0c9"
        },
        {
          name: "delta",
          value: 25,
          color: "#9656a1"
        },
        {
          name: "echo",
          value: 30,
          color: "#fa697c"
        },
        {
          name: "foxtrot",
          value: 35,
          color: "#fcc169"
        }])
    },[])
  
    useInterval(() => {
      if (start) {
        const randomIndex = getRandomIndex(data);
        setData(
          data.map((entry, index) => index === randomIndex ? { ...entry, value: entry.value + 10 } : entry )
        );
        setIteration(iteration + 1);
      }
    }, 500);
  
    return (
      <React.Fragment>
        <RacingBarChart data={data} />
        <button onClick={() => setStart(!start)}>
          {start ? "pause" : "start"}
        </button>
        <span style = {{float:"right"}}>Iteration: {iteration}</span>
      </React.Fragment>
    );
  }
  
  export default Racing;
  