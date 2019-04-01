import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";
import { actionCreators as photoActions } from "redux/modules/photos";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { myInfo, username: loggedUser }
  } = state;

  return {
    myInfo,
    loggedUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { username }
    }
  } = ownProps;

  return {
    getData: () => {
      dispatch(userActions.getMyProfile(username));
      dispatch(photoActions.getFeed());
    },
    handleLogout: () => {
      dispatch(userActions.logout());
    },
    getFollowers: username => {
      dispatch(userActions.getFollowers(username));
    },
    getFollowings: username => {
      dispatch(userActions.getFollowings(username));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
