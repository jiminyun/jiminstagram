import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";

const Explore = props => {
  if (props.loading) {
    return <LoadingExplore />;
  } else if (props.userList) {
    return <RenderExplore {...props} />;
  }
};

const LoadingExplore = props => (
  <div className="explore">
    <Loading />
  </div>
);

const RenderExplore = props => (
  <div className="explore">
    {props.userList.map(user => (
      <UserRow big={true} horizontal={true} user={user} key={user.id} />
    ))}
  </div>
);

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array
};

export default Explore;
