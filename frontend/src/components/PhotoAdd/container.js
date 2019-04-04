import React, { Component } from "react";
import PropTypes from "prop-types";
import PhotoAdd from "./presenter";

class Container extends Component {
  state = {
    location: "",
    caption: "",
    tags: "",
    file: ""
  };

  componentDidUpdate() {}
  render() {
    return (
      <PhotoAdd
        {...this.state}
        handlePreview={this._handlePreview}
        handleSubmit={this._handleSubmit}
        handleInputChange={this._handleInputChange}
        photoSave={this.props.photoSave}
      />
    );
  }

  _handlePreview = ev => {
    const files = Array.from(ev.target.files);

    this.setState({
      file: files[0]
    });

    const reader = new FileReader();
    reader.readAsDataURL(ev.target.files[0]);
    reader.onloadend = ev => {
      this.setState({ preview: reader.result });
    };
  };

  _handleSubmit = async ev => {
    ev.preventDefault();
    const { saveFeed } = this.props;
    const { file, location, caption, tags } = this.state;

    if (!file || !location || !caption || !tags) {
      alert("please fill out all of inputs");
      return false;
    }
    await saveFeed(this.state);
  };

  _handleInputChange = ev => {
    const {
      target: { value, name }
    } = ev;
    this.setState({
      [name]: value
    });
  };
  static propTypes = {
    saveFeed: PropTypes.func.isRequired
  };
}

export default Container;
