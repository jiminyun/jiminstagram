import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";

import "./styles.scss";

const PhotoDisplay = (props, context) => (
  <div
    className="photo_container"
    onClick={() => props.openPhotoDetail(props.id)}
  >
    <img src={props.file} className="photo" alt="profile_img" />
    <div className="overlay">
      <span className="data">
        <Ionicon icon="ios-heart" fontSize="22px" color="white" />
        {props.like_count}
      </span>
      <span className="data">
        <Ionicon icon="ios-text" fontSize="22px" color="white" />
        {props.comment_count}
      </span>
    </div>
  </div>
);

PhotoDisplay.propTypes = {
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  comment_count: PropTypes.number.isRequired
};

export default PhotoDisplay;
