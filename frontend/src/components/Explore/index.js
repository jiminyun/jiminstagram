import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { userList, username }
  } = state;
  const users = userList.filter(user => user.username !== username);
  return {
    userList: users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getExplore: () => {
      dispatch(userActions.getExplore());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
