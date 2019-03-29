import React, { Component } from "react";
import EditProfile from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true,
    profile_image: "",
    name: "",
    username: "",
    website: "",
    bio: "",
    email: "",
    gender: ""
  };

  static propTypes = {
    getMyProfile: PropTypes.func.isRequired,
    upateMyProfile: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log("componentDidMount");
    const { getMyProfile } = this.props;
    getMyProfile();
  }

  componentWillReceiveProps = nextProps => {
    console.log("componentWillReceiveProps");
    const {
      name,
      username,
      website,
      bio,
      email,
      gender,
      profile_image
    } = nextProps.myInfo;
    if (nextProps.myInfo) {
      this.setState({
        loading: false,
        name,
        username,
        website,
        bio,
        email,
        gender,
        profile_image
      });
    } else {
      console.log("here");
    }
  };

  _handleSubmit = event => {
    const { name, username, website, bio, email, gender } = this.state;
    const { upateMyProfile } = this.props;
    event.preventDefault();
    upateMyProfile(name, username, website, bio, email, gender);
  };

  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("render", this.state);
    return (
      <EditProfile
        {...this.state}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleNameChange={this._handleNameChange}
      />
    );
  }
}

export default Container;
