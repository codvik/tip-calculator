import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";

function App() {
  const divStyle = {
    color: "#27c2ad",
    fontSize: "60px",
  };
  const hh = {
    color: "#dcebeb",
    fontSize: "30px",
  };
  const spnStyle = {
    color: "#416e71",
    fontSize: "30px",
  };

  const [data, funData] = useState();

  const [people, funPeople] = useState();
  console.log("hell");

  const [top, funTop] = useState();

  const [plh, funPlh] = useState("Can't be Zero");

  function tip(e) {
    let value = data * (e.target.value / 100);
    funTop(value);
  }

  return (
    <div className="App">
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="leftContainer">
            <h2 className="bill">Bill</h2>
            <i class="fas fa-dollar-sign"></i>
            <input
              type="text"
              className="dollar"
              value={data}
              onChange={(e) => funData(e.target.value)}
            />
            <h2 className="tip">Select Tip%</h2>
            <button
              type="button"
              className="bttn1 btn-normal"
              value="5"
              onClick={tip}
            >
              5%
            </button>
            <button
              type="button"
              className="bttn2 btn-normal"
              value="10"
              onClick={tip}
            >
              10%
            </button>
            <button
              type="button"
              className="bttn3 btn-normal"
              value="15"
              onClick={tip}
            >
              15%
            </button>
            <button
              type="button"
              className="bttn4 btn-normal"
              value="25"
              onClick={tip}
            >
              25%
            </button>
            <button
              type="button"
              className="bttn5 btn-normal"
              value="50"
              onClick={tip}
            >
              50%
            </button>
            <button
              type="button"
              className="bttn6 btn-normal"
              value="5"
              onClick={tip}
            >
              Custom
            </button>
            <h2 className="people">Number of People</h2>
            <input
              type="text"
              className="rupee"
              onChange={(e) => {
                funPeople(e.target.value);
                if (plh > 0) funPlh("");
              }}
              placeholder={plh}
            />
            <i class="fa fa-user icon fa-2x"></i>
            {/* {people > 0 ? (
              <>
                {" "}
                <input
                  type="text"
                  className="rupee"
                  onChange={(e) => funPeople(e.target.value)}
                />
                <i class="fa fa-user icon fa-2x"></i>{" "}
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="rupee"
                  placeholder="Can't be Zero"
                  onChange={(e) => funPeople(e.target.value)}
                />
                <i class="fa fa-user icon fa-2x"></i>{" "}
              </>
            )} */}
          </div>
          <div className="rightContainer">
            <h1 style={hh}>
              Tip Amount
              <br />
              <span style={spnStyle}> / person</span>
            </h1>
            {top / people > 0 ? (
              <h1 style={divStyle}>${(top / people).toFixed(2)}</h1>
            ) : (
              <h1 style={divStyle}>$0.00</h1>
            )}
            <h1 style={hh}>
              Total Amount
              <br />
              <span style={spnStyle}> / person</span>
            </h1>
            {data > 0 && people > 0 ? (
              <h1 style={divStyle}>${(data / people).toFixed(2)}</h1>
            ) : (
              <h1 style={divStyle}>$0.00</h1>
            )}
            <div className="btn-wide btn-normal">Click Me</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
