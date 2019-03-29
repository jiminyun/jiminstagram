import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const UserRow = (props, context) => (
  <div className={props.horizontal ? "horizontal" : "vertical"}>
    <div className="column">
      <img
        src={props.user.profile_image || require("images/noPhoto.jpg")}
        alt={props.user.username}
        className={props.big ? "bigAvatar" : "avatar"}
      />
      <div className="user">
        <span className="username">{props.user.username}</span>
        <span className="name">{props.user.name}</span>
      </div>
    </div>
    <span className="column">
      <button
        className={props.user.following ? "following_btn" : "follow_btn"}
        onClick={props.handleClick}
      >
        {props.user.following ? "Unfollow" : "Follow"}
      </button>
    </span>
  </div>
);

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  big: PropTypes.bool
};

UserRow.defaultProps = {
  big: false
};

export default UserRow;
