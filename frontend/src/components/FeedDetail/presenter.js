import React from "react";
import "./styles.scss";
import Loading from "components/Loading";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const FeedDeatil = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else if (props.selectedFeed) {
    return <RenderFeedDeatil {...props} />;
  }
};

const LoadingFeed = props => (
  <div className="feed">
    <Loading />
  </div>
);

const RenderFeedDeatil = props => (
  <div className="feed_dt_container">
    {props.selectedFeed.map(feed => (
      <div key={feed.id}>
        <div className="closeBtn" onClick={props.closeFeedDetail}>
          <span>close X</span>
        </div>
        <div className="box">
          <div className="column">
            <div className="img">
              <img src={feed.file} alt="feedImage" />
            </div>
          </div>
          <div className="column">
            <div className="content">
              <div className="first_row">
                <img
                  className="profileImg"
                  src={feed.creator.profile_image}
                  alt="profileImg"
                />
                <p className="username">
                  {feed.creator.username}
                  <br />
                  {feed.location}
                </p>
              </div>
              <div className="second_row">
                <ul>
                  {feed.tags.map(tag => (
                    <li className="tag" key={tag}>
                      #{tag}
                    </li>
                  ))}
                </ul>
                <div className="comments">
                  <PhotoComments
                    caption={feed.caption}
                    creator={feed.creator.username}
                    comments={feed.comments}
                  />
                </div>
              </div>
              <div className="third_row">
                <div className="meta">
                  <PhotoActions
                    number={feed.like_count}
                    isLiked={feed.is_liked}
                    photoId={feed.id}
                    openLikes={props.openLikes}
                  />
                  <TimeStamp time={feed.natural_time} />
                  <CommentBox photoId={feed.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default FeedDeatil;
