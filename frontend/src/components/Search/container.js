import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    isShowPhotoDetail: false
  };
  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
    imageList: PropTypes.array
  };
  componentDidMount() {
    console.log(this.props);
    const { searchByTerm } = this.props;
    searchByTerm();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { searchByTerm } = this.props;
    if (prevProps.match.params !== this.props.match.params) {
      searchByTerm();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList && nextProps.imageList) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { userList, imageList } = this.props;
    return (
      <Search
        {...this.state}
        userList={userList}
        imageList={imageList}
        openPhotoDetail={this._openPhotoDetail}
        closePhotoDetail={this._closePhotoDetail}
      />
    );
  }

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
