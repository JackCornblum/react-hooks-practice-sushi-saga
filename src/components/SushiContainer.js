import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiData, displayFour, indexValue, sliceSushi, eatSushi}) {
  
  //render first four sushi in database to page when sushiData is first set with all sushi objects
  useEffect(() => {
    displayFour(0)
  }, [sushiData])

  //eventlistener function to invoke the displayFour function
  //and pass it the current indexValue to use as a reference for which sushi to render
  function handleClick(e) {
    displayFour(indexValue)
  }

  let displayedSushi = sliceSushi.map(obj => {
    return <Sushi eatSushi={eatSushi} name={obj.name} price={obj.price} img={obj.img_url} key={obj.id} id={obj.id}/>
  })


  return (
    <div className="belt">
      {displayedSushi}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
