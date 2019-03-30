import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    showNotification: false
  };

  static propTypes = {
    goToSearch: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };
  render() {
    const { term, showNotification } = this.state;
    const { username } = this.props;
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        openNotification={this._openNotification}
        showNotification={showNotification}
        value={term}
        username={username}
      />
    );
  }
  _onInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
  _openNotification = () => {
    const val = !this.state.showNotification;
    this.setState({
      showNotification: val
    });
    console.log(this.state);
  };
}

export default Container;
