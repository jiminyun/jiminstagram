import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";
import { actionCreators as userActions } from "redux/modules/user";
import { actionCreators as notiActions } from "redux/modules/notification";

const mapStateToProps = (state, ownProps) => {
  const {
    photos: { feed }
  } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      dispatch(photoActions.getFeed());
      dispatch(userActions.getExplore());
      dispatch(notiActions.getNotification());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
