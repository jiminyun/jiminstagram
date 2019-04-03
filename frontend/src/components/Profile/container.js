import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    isShowFollowers: false,
    isShowFollowings: false,
    isShowPhotoDetail: false,
    IsME: false,
    photoId: null
  };

  render() {
    const { myInfo, handleLogout } = this.props;
    console.log("render", myInfo, this.state);
    //console.log(myInfo.username);
    return (
      <Profile
        {...this.state}
        myInfo={myInfo}
        handleLogout={handleLogout}
        seeFollowers={this._seeFollowers}
        seeFollowings={this._seeFollowings}
        closeFollowings={this._closeFollowings}
        closeFollowers={this._closeFollowers}
        openPhotoDetail={this._openPhotoDetail}
        closePhotoDetail={this._closePhotoDetail}
      />
    );
  }

  static propTypes = {
    getData: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { getData } = this.props;
    if (prevProps.match.params.username !== this.props.match.params.username) {
      getData();
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.myInfo) {
      this.setState({
        loading: false
      });
      this._IsME();
    }
  };

  _seeFollowers = () => {
    this.setState({
      isShowFollowers: true
    });
    const { getFollowers } = this.props;
    const {
      myInfo: { username }
    } = this.props;
    getFollowers(username);
  };

  _closeFollowers = () => {
    this.setState({
      isShowFollowers: false
    });
  };

  _seeFollowings = () => {
    const { getFollowings } = this.props;
    const {
      myInfo: { username }
    } = this.props;
    this.setState({
      isShowFollowings: true
    });
    getFollowings(username);
  };

  _closeFollowings = () => {
    this.setState({
      isShowFollowings: false
    });
  };

  _IsME = () => {
    const {
      match: {
        params: { username }
      },
      loggedUser
    } = this.props;

    if (username === loggedUser) {
      this.setState({
        IsME: true
      });
    } else {
      this.setState({
        IsME: false
      });
    }
  };

  _openPhotoDetail = photoId => {
    this.setState({
      isShowPhotoDetail: true,
      photoId
    });
  };
  _closePhotoDetail = () => {
    this.setState({
      isShowPhotoDetail: false
    });
  };
}

export default Container;
