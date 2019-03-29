import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    notificationList: PropTypes.array,
    getNotification: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getNotification } = this.props;
    if (!this.props.notificationList) {
      getNotification();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.notificationList) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { notificationList } = this.props;
    return (
      <Notifications {...this.state} notificationList={notificationList} />
    );
  }
}

export default Container;
