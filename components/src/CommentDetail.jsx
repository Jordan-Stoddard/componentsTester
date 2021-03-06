import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="user" title="image of user" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.phrase}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
