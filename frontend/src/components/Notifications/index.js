import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as notificationActions } from "redux/modules/notification";

const mapStateToProps = (state, ownProps) => {
  const {
    notification: { notificationList }
  } = state;
  return { notificationList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotification: () => {
      dispatch(notificationActions.getNotification());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
