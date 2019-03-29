import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const { noti_user } = ownProps;
  return {
    handleClick: () => {
      if (noti_user.creator.following) {
        dispatch(userAction.unfollowUser(noti_user.creator.id));
      } else {
        dispatch(userAction.followUser(noti_user.creator.id));
      }
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Container);
