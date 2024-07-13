import React from "react";
import { useState, useMemo } from "react";

export const Solution1 = () => {
  const [input, setInput] = useState(0);
  // Your solution starts here

  //without usememo
  // let expensiveValue = 1;
  // for(let i=1; i<=input; i++) {
  //     expensiveValue = expensiveValue * i;
  // }

  //with usememo
  // Your solution ends here
  const expensiveValue = useMemo(() => {
    let value = 1;
    for (let i = 1; i <= input; i++) {
      value = value * i;
    }
    return value;
  }, [input]);

  
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
};
export default Solution1;
