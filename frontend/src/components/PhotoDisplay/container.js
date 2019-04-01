import React, { Component } from "react";
import PhotoDisplay from "./presenter";

class Container extends Component {
  render() {
    const { photo, openPhotoDetail } = this.props;
    return <PhotoDisplay {...photo} openPhotoDetail={openPhotoDetail} />;
  }
}

export default Container;
