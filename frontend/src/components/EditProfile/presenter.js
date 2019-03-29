import React from "react";
import propTypes from "prop-types";
import Loading from "components/Loading";
import "./styles.scss";

const EditProfile = props => {
  if (props.loading) return <LoadingProfile />;
  else if (props.myInfo) return <RenderEditProfile {...props} />;
};

const LoadingProfile = props => (
  <div className="editProfile">
    <Loading />
  </div>
);

const RenderEditProfile = props => (
  <div className="editProfile">
    <div className="content">
      <div className="fisrtColumn">
        <span>Edit Profile</span>
      </div>
      <div className="secondColumn">
        <form className="form" onSubmit={props.handleSubmit}>
          <div className="field">
            <aside className="title">
              <label>
                <img src={props.myInfo.profile_image} alt="profile_img" />
              </label>
            </aside>
            <div class="inputs">Change Profile Photo</div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Name</label>
            </aside>
            <div class="inputs">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input"
                value={props.name}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>UserName</label>
            </aside>
            <div class="inputs">
              <input
                type="text"
                placeholder="username"
                name="username"
                className="input"
                value={props.myInfo.username}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Website</label>
            </aside>
            <div class="inputs">
              <input
                type="text"
                placeholder="website"
                name="website"
                className="input"
                value={props.myInfo.website}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Bio</label>
            </aside>
            <div class="inputs">
              <input
                type="text"
                placeholder="bio"
                name="bio"
                className="input"
                value={props.myInfo.bio}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Email</label>
            </aside>
            <div class="inputs">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input"
                value={props.myInfo.email}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Gender</label>
            </aside>
            <div class="inputs">
              <input
                type="text"
                placeholder="gender"
                name="gender"
                className="input"
                value={props.myInfo.gender}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <input type="submit" value="submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  </div>
);

EditProfile.propTypes = {
  loading: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  bio: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  gender: propTypes.string.isRequired
};
export default EditProfile;
