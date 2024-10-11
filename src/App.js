// Leger med forskellige teknikker

import { React, useState } from "react";
import sea from "./Pictures/sea.jpg";
import nice from "./Pictures/nice.png";
import Navbar from "./components/navbar/navbar.js";

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    const dateOutput = `Todays date is ${day}` + ` ${date}/${month}/${year}`;
    return dateOutput;
  };

  dateBuilder(new Date());

  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(counter + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(counter - 1);
  };

  function ShowNice() {
    if (counter > 4) {
      return <img src={nice} alt="Nice" height="200px" />;
    }
  }

  return (
    <div className="App">
      <div>
        <Navbar />

        <div className="dateBuilder">
          <h2>{dateBuilder(new Date())}</h2>
        </div>
        <img src={sea} alt="Sea" height="600px" />
      </div>
      <br></br>
      <div>
        <button className="button" onClick={increase}>
          Thumps Up 👍
        </button>
        <button className="button" onClick={decrease}>
          Thumps Down 👎
        </button>
        <br></br>
        <h3 className="counter">Number of likes: {counter}</h3>
        <ShowNice />
      </div>
    </div>
  );
}
export default App;
