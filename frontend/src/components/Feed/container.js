import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { feed } = this.props;
    // console.log(_.isEmpty(feed));
    return <Feed {...this.state} feed={feed} />;
  }
}

export default Container;
