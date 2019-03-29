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
  } else if (props.feedDetail) {
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
    <div className="closeBtn" onClick={props.closeFeedDetail}>
      <span>close X</span>
    </div>
    <div className="box">
      <div className="column">
        <div className="img">
          <img src={props.feedDetail.file} alt="feedImage" />
        </div>
      </div>
      <div className="column">
        <div className="content">
          <div class="first_row">
            <img
              className="profileImg"
              src={props.feedDetail.creator.profile_image}
              alt="profileImg"
            />
            <p className="username">
              {props.feedDetail.creator.username}
              <br />
              {props.feedDetail.location}
            </p>
          </div>
          <div class="second_row">
            <ul>
              {props.feedDetail.tags.map(tag => (
                <li className="tag" key={tag.id}>
                  #{tag}
                </li>
              ))}
            </ul>
            <div class="comments">
              <PhotoComments
                caption={props.feedDetail.caption}
                creator={props.feedDetail.creator.username}
                comments={props.feedDetail.comments}
              />
            </div>
          </div>
          <div class="third_row">
            <div className="meta">
              <PhotoActions
                number={props.feedDetail.like_count}
                isLiked={props.feedDetail.is_liked}
                photoId={props.feedDetail.id}
                openLikes={props.openLikes}
              />
              <TimeStamp time={props.feedDetail.natural_time} />
              <CommentBox photoId={props.feedDetail.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeedDeatil;
