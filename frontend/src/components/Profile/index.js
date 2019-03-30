import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";
import { actionCreators as photoActions } from "redux/modules/photos";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { myInfo }
  } = state;

  return {
    myInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      dispatch(userActions.getMyProfile());
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
