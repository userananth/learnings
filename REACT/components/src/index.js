// import the react and react dom lib
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// create react component


const App = () => {
  return (
    <div className="ui contaniner comments">
      <ApprovalCard>
        <CommentDetail author="Sam1" time="today at 5:00 PM" av={faker.image.avatar()} comment="Hi" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" time="Today at 12:30 PM" comment="Hello!" av={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" time="Today at 4:30 PM" comment="Hello000!" av={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};



ReactDOM.render(<App />, document.querySelector("#root"));
