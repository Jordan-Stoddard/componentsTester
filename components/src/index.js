import ReactDOM from "react-dom";
import React from "react";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="image of user" title="image of user" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">{Date.now()}</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
