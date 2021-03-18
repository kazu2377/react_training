import React, { useState } from "react";

export const   Login = () =>{
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setAge(age + 1)}>Click me</button>
      {console.log()}
    </div>
  );
}


export default Login