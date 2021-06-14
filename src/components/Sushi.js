import React from "react";

function Sushi({name, price, img, eatSushi, id}) {
  return (
    <div className="sushi" >
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
            onClick={eatSushi}
            id={id}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
