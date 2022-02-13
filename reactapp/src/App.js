//import logo from "./logo.svg";
//import { useEffect, useState } from "react";
import "./App.css";
import Users from "./Users";
//import User from "./user";

function App() {
  // const [count, setCount] = useState(0);
  // // const changeName = () => {
  // //   setName("Thakkar");
  // // };
  // useEffect(() => {
  //   console.log(`you have clicked the button1 ${count} times`);
  // }, [count]);

  // const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   console.log(`you have clicked the button2 ${count2} times`);
  // }, [count2]);
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
