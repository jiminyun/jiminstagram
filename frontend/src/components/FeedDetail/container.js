import React, { Component } from "react";
import FeedDetail from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    console.log("componentDidMount");

    const { getFeedDetail } = this.props;

    getFeedDetail();

    //console.log(selectedFeed);
  }

  componentWillReceiveProps = nextProps => {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if (nextProps.selectedFeed) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { selectedFeed, closeFeedDetail } = this.props;
    console.log("render", selectedFeed, "loading", this.state.loading);

    //console.log("creator", selectedFeed.creator);
    //console.log("file", selectedFeed.file);
    //console.log("...", ...selectedFeed);
    return (
      <FeedDetail
        {...this.state}
        selectedFeed={selectedFeed}
        closeFeedDetail={closeFeedDetail}
      />
    );
  }
}

export default Container;
