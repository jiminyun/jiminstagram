import React from "react";
import "./styles.scss";
import Loading from "components/Loading";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const PhotoDeatil = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else {
    console.log(props);
    return (
      <RenderFeedDeatil
        selectedFeed={props.selectedFeed}
        closePhotoDetail={props.closePhotoDetail}
      />
    );
  }
};

const LoadingFeed = props => (
  <div className="feed">
    <Loading />
  </div>
);

const RenderFeedDeatil = props => (
  <div className="feed_dt_container">
    <div className="closeBtn" onClick={props.closePhotoDetail}>
      <span>close X</span>
    </div>
    {props.selectedFeed.map(feed => (
      <div className="box" key={feed.id}>
        <div className="row">
          <div className="column-left">
            <img src={feed.file} alt="feedImage" className="feedImage" />
          </div>
          <div className="column-right">
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

export default PhotoDeatil;
