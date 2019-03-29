import React from "react";

const BtnFollow = props => (
  <button className="button" onClick={props.handleClick}>
    {props.notification_type === "comment" && props.following
      ? "Unfollow"
      : "Follow"}
  </button>
);

export default BtnFollow;
