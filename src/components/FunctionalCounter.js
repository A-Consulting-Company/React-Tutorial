import { useState } from "react";

function FunctionalCounter() {
  const [counter, setCounter] = useState(0); // Hook: Creates state-> function is created. Values is initialzed as 0
  const [varname, setVarname] = useState("Increment");

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>
        <p>Value of counter is: {counter}</p>
      </div>
      <div>
        <button onClick={increment}>{varname}</button>
      </div>
    </div>
  );
}

export default FunctionalCounter;
