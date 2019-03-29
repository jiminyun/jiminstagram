import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { myInfo }
  } = state;
  return { myInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMyProfile: () => {
      dispatch(userActions.getMyProfile());
    },
    upateMyProfile: (name, username, website, bio, email, gender) => {
      dispatch(
        userActions.updateMyProfile(name, username, website, bio, email, gender)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
