import ReactDOM from "react-dom";
import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail.jsx";
import ApprovalCard from "./ApprovalCard.jsx";

const App = () => {
  return (
    <div className="ui container comments">
    
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          time="Today at 6:15PM"
          phrase={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          time="Today at 6:45PM"
          phrase={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          time="Today at 6:00PM"
          phrase={faker.hacker.phrase()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
