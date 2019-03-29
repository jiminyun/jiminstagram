import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { userid, following } = ownProps;
  console.log(ownProps);
  return {
    handleClick: () => {
      if (following) {
        dispatch(userAction.unfollowUser(userid));
      } else {
        dispatch(userAction.followUser(userid));
      }
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Container);
