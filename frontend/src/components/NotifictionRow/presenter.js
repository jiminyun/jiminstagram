import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const UserRow = (props, context) => {
  //const { notification_type: notiType, comment } = props.noti_user;

  return (
    <div className="_container">
      <div className="column">
        <img
          src={
            props.noti_user.creator.profile_image ||
            require("images/noPhoto.jpg")
          }
          alt={props.noti_user.creator.username}
          className="avatar"
        />
        <div className="user">
          <span className="username" />
          {props.noti_user.creator.username}
          <span className="name">
            {props.noti_user.notification_type === "comment"
              ? ` commented "${props.noti_user.comment}"`
              : " stared following"}
          </span>
        </div>
      </div>
      <span>
        <button
          className={
            props.noti_user.creator.following ? "following_btn" : "follow_btn"
          }
          onClick={props.handleClick}
        >
          {props.noti_user.creator.following ? "Unfollow" : "Follow"}
        </button>
        {/*         
        <BtnFollow
          userid={props.noti_user.creator.id}
          following={props.noti_user.creator.following}
          type={props.noti_user.notification_type}
        /> */}
      </span>
    </div>
  );
};

UserRow.propTypes = {
  noti_user: PropTypes.shape({}).isRequired,
  big: PropTypes.bool
};

UserRow.defaultProps = {
  big: false
};

export default UserRow;
