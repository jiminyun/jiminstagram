import React, { Component } from "react";
import FeedDetail from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { getFeedDetail } = this.props;
    if (!this.props.feedDetail) {
      getFeedDetail();
    } else {
      getFeedDetail();
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.feedDetail) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { feedDetail, closeFeedDetail } = this.props;
    return (
      <FeedDetail
        {...this.state}
        feedDetail={feedDetail}
        closeFeedDetail={closeFeedDetail}
      />
    );
  }
}

export default Container;
