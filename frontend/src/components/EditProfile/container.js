import React, { Component } from "react";
import EditProfile from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true,
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
    const { getMyProfile } = this.props;

    if (!this.props.myInfo) {
      getMyProfile();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.myInfo) {
      this.setState({
        loading: false
      });
    }
  };

  _handleSubmit = event => {
    const { name, username, website, bio, email, gender } = this.state;
    const { upateMyProfile } = this.props;
    event.preventDefault();
    upateMyProfile(name, username, website, bio, email, gender);
  };

  _handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      name: value
    });
    console.log(this.state);
  };

  render() {
    const { myInfo } = this.props;
    return (
      <EditProfile
        {...this.state}
        myInfo={myInfo}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleNameChange={this._handleNameChange}
      />
    );
  }
}

export default Container;
