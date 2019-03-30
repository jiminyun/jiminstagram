import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";
import UserList from "components/UserList";
import "./styles.scss";

const Profile = props => {
  if (props.loading) return <LoadingProfile />;
  else if (props.myInfo) {
    return <RenderProfile {...props} />;
  }
};

const RenderProfile = props => (
  <>
    <div className="profile_container">
      <div className="column">
        <img
          className="profileImg"
          src={
            props.myInfo.profile_image
              ? props.myInfo.profile_image
              : require("images/noProfile.jpg")
          }
          alt="profileImg"
        />
      </div>
      <div className="column">
        <div className="divider">
          <span className="username">{props.myInfo.username}</span>
          <span>
            <Link to="/accounts/edit/">
              <button className="btn"> Edit Profile </button>
            </Link>
            <button className="btn" onClick={props.handleLogout}>
              Logout
            </button>
          </span>
        </div>
        <div className="divider">
          <span className="count">{props.myInfo.post_count}</span>
          <span className="text">posts</span>
          <span className="count" onClick={props.seeFollowers}>
            {props.myInfo.following_count}
          </span>
          <span className="text">followers</span>
          <span className="count" onClick={props.seeFollowings}>
            {props.myInfo.following_count}
          </span>
          <span>followings</span>
        </div>
        <div className="divider">
          <span className="name">{props.myInfo.name}</span>
        </div>
      </div>
    </div>
    <div className="photo_container">
      <div className="content">
        {props.myInfo.images.length > 0 && (
          <RenderPhotoDisplay photos={props.myInfo.images} />
        )}
      </div>
    </div>
    {props.isShowFollowers && (
      <UserList title="Followers" closeLikes={props.closeFollowers} />
    )}
    {props.isShowFollowings && (
      <UserList title="Follwings" closeLikes={props.closeFollowings} />
    )}
  </>
);

const RenderPhotoDisplay = props =>
  props.photos.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);

const LoadingProfile = props => (
  <div className="profile_loading">
    <Loading />
  </div>
);
export default Profile;
