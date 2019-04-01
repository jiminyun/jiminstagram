import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "components/Loading";
import FeedPhoto from "components/FeedPhoto";

const Feed = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else if (props.feed) {
    return <RenderFeed {...props} />;
  }
};

const LoadingFeed = props => (
  <div className="feed">
    <Loading />
  </div>
);

const RenderFeed = props => {
  return (
    <div className="feed">
      {props.feed.length === 0 ? (
        <div>
          <div class="balloon">
            You have no followers and no followings. <br />
            Start Instagram with posting photos and adding followers on
            explore!!!
          </div>
        </div>
      ) : (
        ""
      )}
      {props.feed.map(photo => (
        <FeedPhoto {...photo} key={photo.id} />
      ))}
    </div>
  );
};
Feed.propTypes = {
  loading: PropTypes.bool.isRequired,
  feed: PropTypes.array
};

export default Feed;
