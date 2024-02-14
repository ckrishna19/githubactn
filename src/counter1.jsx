import React, { useState } from "react";

const counter1 = () => {
  console.log("counter1");
  const [counter1, setCounter1] = useState(0);
  const addCounter1 = () => setCounter1(counter1 + 1);
  return (
    <div>
      <p>counter1 : {counter1}</p>
      <button onClick={addCounter1}>Add Counter 1</button>
    </div>
  );
};

export default counter1;
