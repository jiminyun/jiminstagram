import React, { Component } from "react";
import PhotoDisplay from "./presenter";

class Container extends Component {
  state = {
    isShowFeedDetail: false
  };

  _seeFeedDetail = () => {
    this.setState({
      isShowFeedDetail: true
    });
  };

  _closeFeedDetail = () => {
    this.setState({
      isShowFeedDetail: false
    });
  };

  render() {
    const { photo } = this.props;
    const { isShowFeedDetail } = this.state;
    return (
      <PhotoDisplay
        {...photo}
        seeFeedDetail={this._seeFeedDetail}
        closeFeedDetail={this._closeFeedDetail}
        isShowFeedDetail={isShowFeedDetail}
      />
    );
  }
}

export default Container;
