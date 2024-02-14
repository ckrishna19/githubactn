import React, { useState } from "react";

const counter2 = () => {
  console.log("counter2");
  const [counter2, setCounter2] = useState(0);
  const addCounter2 = () => setCounter2(counter2 + 1);

  return (
    <div>
      <p>counter2:{counter2} </p>
      <button onClick={addCounter2}>Add Counter 2</button>
    </div>
  );
};

export default counter2;
