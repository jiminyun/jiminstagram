import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import FeedDetail from "components/FeedDetail";
import "./styles.scss";

const PhotoDisplay = (props, context) => (
  <>
    <div className="photo_container" onClick={props.seeFeedDetail}>
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
    {props.isShowFeedDetail && <RenderFeedDetail {...props} />}
  </>
);

const RenderFeedDetail = props => (
  <FeedDetail closeFeedDetail={props.closeFeedDetail} photoId={props.id} />
);

PhotoDisplay.propTypes = {
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  comment_count: PropTypes.number.isRequired,
  seeFeedDetail: PropTypes.func.isRequired,
  closeFeedDetail: PropTypes.func.isRequired,
  isShowFeedDetail: PropTypes.bool.isRequired
};

export default PhotoDisplay;
