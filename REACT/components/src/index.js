// import the react and react dom lib
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';

// create react component


const App = () => {
  return (
    <div className="ui contaniner comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};



ReactDOM.render(<App />, document.querySelector("#root"));
