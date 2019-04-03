import React from "react";
import propTypes from "prop-types";
import Loading from "components/Loading";
import "./styles.scss";

const EditProfile = props => {
  if (props.loading) return <LoadingProfile />;
  else return <RenderEditProfile {...props} />;
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
                <img
                  alt="profile_img"
                  src={
                    props.profile_image
                      ? props.profile_image
                      : require("images/noProfile.jpg")
                  }
                />
              </label>
            </aside>
          </div>
          <div className="field">
            <aside className="title">
              <label>Name</label>
            </aside>
            <div className="inputs">
              <input
                type="text"
                placeholder=""
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
            <div className="inputs">
              <input
                type="text"
                placeholder="username"
                name="username"
                className="input"
                value={props.username}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Website</label>
            </aside>
            <div className="inputs">
              <input
                type="text"
                placeholder="website"
                name="website"
                className="input"
                value={props.website}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Bio</label>
            </aside>
            <div className="inputs">
              <input
                type="text"
                placeholder="bio"
                name="bio"
                className="input"
                value={props.bio}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <aside className="title">
              <label>Email</label>
            </aside>
            <div className="inputs">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input"
                value={props.email}
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
  //website: propTypes.string.isRequired,
  //bio: propTypes.string.isRequired,
  email: propTypes.string.isRequired
};

export default EditProfile;
