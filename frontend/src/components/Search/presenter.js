import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";
import PhotoDisplay from "components/PhotoDisplay";

const Search = props => {
  return (
    <div className="search">
      <div className="section">
        <div className="space" />
        <h4 className="title">Users</h4>
        {props.loading && <Loading />}
        {!props.loading && props.userList.length < 1 && (
          <NotFound text="Nothing found" />
        )}
        <div className="content">
          {!props.loading && props.userList.length > 0 && (
            <RenderUserSearch userList={props.userList} />
          )}
        </div>
      </div>
      <div className="section">
        <h4 className="title">Photos</h4>
        {props.loading && <Loading />}
        {!props.loading && props.imageList.length < 1 && (
          <NotFound text="Nothing found" />
        )}
        <div className="content">
          {!props.loading && props.imageList.length > 0 && (
            <RenderImageSearch imageList={props.imageList} />
          )}
        </div>
      </div>
    </div>
  );
};

const RenderUserSearch = props =>
  props.userList.map(user => (
    <UserRow big={true} horizontal={true} user={user} key={user.id} />
  ));

const RenderImageSearch = props =>
  props.imageList.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);

const NotFound = props => <span className="notFound">{props.text}</span>;

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  imageList: PropTypes.array,
  userList: PropTypes.array
};

export default Search;
