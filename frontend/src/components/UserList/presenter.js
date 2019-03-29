import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";
import UserRow from "components/UserRow";

const UserList = props => (
  <div className="ul_container">
    <div className="box">
      <header className="ul_header">
        <h4 className="title">{props.title}</h4>
        <span onClick={props.closeLikes}>
          <Ionicon icon="md-close" fontSize="20px" color="black" />
        </span>
      </header>
      <div className="content">
        {props.loading ? <Loading /> : <RenderUsers list={props.userList} />}
      </div>
    </div>
  </div>
);

const RenderUsers = props =>
  props.list.map(user => (
    <UserRow horizontal={props.horizontal} user={user} key={user.id} />
  ));

RenderUsers.propTypes = {
  list: PropTypes.array
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  closeLikes: PropTypes.func.isRequired
};
export default UserList;
