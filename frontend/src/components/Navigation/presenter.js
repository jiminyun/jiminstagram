import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import Notification from "components/Notifications";
import "./styles.scss";

const Navigation = (props, context) => (
  <>
    <div className="navigation">
      <div className="inner">
        <div className="column">
          <Link to="/">
            <img src={require("images/logo.png")} className="logo" alt="Logo" />
          </Link>
        </div>
        <div className="column">
          <form method="post" onSubmit={props.onSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="searchInput"
              onChange={props.onInputChange}
              value={props.value}
            />
          </form>
        </div>
        <div className="column">
          <div className="navIcon">
            <Link to="/explore">
              <Ionicon
                icon="ios-compass-outline"
                fontSize="28px"
                color="black"
              />
            </Link>
          </div>
          <div className="navIcon">
            <span onClick={props.openNotification}>
              <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
            </span>
            <div className="notification">
              {props.showNotification && <Notification />}
            </div>
          </div>
          <div className="navIcon">
            <Link to="/profile">
              <Ionicon
                icon="ios-person-outline"
                fontSize="32px"
                color="black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

Navigation.contextType = {
  t: PropTypes.func.isRequired
};

Navigation.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  openNotification: PropTypes.func.isRequired
};
export default Navigation;
