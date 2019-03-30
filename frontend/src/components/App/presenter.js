import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";
import Navigation from "components/Navigation";
import Feed from "components/Feed";
import Explore from "components/Explore";
import Search from "components/Search";
import Notifications from "components/Notifications";
import Profile from "components/Profile";
import { Redirect } from "react-router-dom";
import EditProfile from "components/EditProfile";
import PhotoAdd from "components/PhotoAdd";

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : <Redirect to="/" />,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route key="1" exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/notification" component={Notifications} />
    <Route path="/search/:searchTerm" component={Search} />
    <Route path="/profile/:username" component={Profile} />
    <Route path="/accounts/edit/" component={EditProfile} />
    <Route path="/photo" component={PhotoAdd} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />,
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
);

export default App;
