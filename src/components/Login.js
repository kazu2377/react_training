import React, { useState, useEffect, useReducer } from "react";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

// Similar to componentDidMount and componentDidUpdate:
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Exchange() {}

export const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  // //コンポーネントレンダー後に実行される
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${age} times`;
  //   console.log("変更された");
  // });

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    axios
      .get(
        "https://script.google.com/macros/s/AKfycbzeDNnJIi1kE-rJ_a13IuXB5oi0qZv0s2y4BqzHtFcKqwa6a-umABNsGgFUPgbVhOTq/exec"
      )
      .then((res) => {
        const persons = res.data;
        console.log(res);
      });
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>

      <p>You clicked {state.count} times</p>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setAge(age + 1)}>Click me</button>
      {/* <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul> */}

      {console.log()}

      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Hello World
      </Button>

      <h1>Heading</h1>
      <Typography variant="h1" gutterBottom>
        Hello Material-UI.
      </Typography>
    </div>
  );
};

export default Login;
