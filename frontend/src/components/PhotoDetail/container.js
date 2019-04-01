import React, { Component } from "react";
import PhotoDetail from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    console.log("componentDidMount");

    const { getPhotoDetail } = this.props;

    getPhotoDetail();

    //console.log(selectedFeed);
  }

  componentWillReceiveProps = nextProps => {
    //console.log("componentWillReceiveProps");
    //console.log(nextProps);
    if (nextProps.selectedFeed) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { selectedFeed, closePhotoDetail } = this.props;
    return (
      <PhotoDetail
        {...this.state}
        selectedFeed={selectedFeed}
        closePhotoDetail={closePhotoDetail}
      />
    );
  }
}

export default Container;
