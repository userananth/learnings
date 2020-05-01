// import the react and react dom lib
import React from "react";
import ReactDOM from "react-dom";

// create react component


const App = () => {
  const btntxt = { text: 'click me' };
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter Name1 :
      </label>
      <input type="text" className="name" />
      <button stye={{ backgroundColor: 'blueviolet', color: 'white' }}>
        {btntxt.text}
      </button>
    </div>
  );
};

// Render components on screan
ReactDOM.render(<App />, document.querySelector("#root"));
