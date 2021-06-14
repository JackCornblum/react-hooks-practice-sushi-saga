import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Sushi from "./Sushi"

const API = "http://localhost:3001/sushis";

function App() {
 const [sushiData, setSushiData] = useState([])
 const [indexValue, setIndexValue] = useState(0)
 const [sliceSushi, setSliceSushi] = useState([])
 const [plates, setPlates] = useState([])
 const [moneyRemaining, setMoneyRemaining] = useState(100)

  //when component loads, fetch data and set sushiData state
  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(resp => resp.json())
    .then(data => {
      setSushiData(data)
      
    })
   
  }, [])

  // console.log(sushiData)
  //initialize variable to hold four sushi objects at a time
  let fourSushi;

  function displayFour(index){
    //declare variable to be used as index stopping point for slice method
    let stopPoint = index + 4
    //assign fourSushi variable to the sliced sushis
    fourSushi = sushiData.slice(index, stopPoint)
    //update sliceSushi state with new array of four sushi
    setSliceSushi(fourSushi)
    //update indexValue state to be 4 higher than before
    setIndexValue(indexValue => index + 4)
  }
  
  function eatSushi(e) {
    console.log(e)
    let id = e.target.id
    

    fetch(`http://localhost:3001/sushis/${id}`)
    .then(resp => resp.json())
    .then(data => {
      if (moneyRemaining > data.price) {
        e.target.src = ""
        e.target.alt = ""

        let newPlates = [...plates]
        newPlates.push("plate")
        setPlates(newPlates)

        setMoneyRemaining(moneyRemaining => {
          return moneyRemaining - data.price
        })
      }
      else {
        window.alert("Insufficient Funds")
      }
      
    })
  }

  return (
    <div className="app">
      <SushiContainer 
        sushiData={sushiData} 
        sliceSushi={sliceSushi} 
        displayFour={displayFour} 
        indexValue={indexValue} 
        eatSushi={eatSushi}
      />
      <Table 
        plates={plates} 
        moneyRemaining={moneyRemaining}
      />
    </div>
  );
}

export default App;
