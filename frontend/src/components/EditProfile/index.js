import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { myInfo, username }
  } = state;
  const {
    msg: { profileSave }
  } = state;
  return { myInfo, username, profileSave };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMyProfile: username => {
      dispatch(userActions.getMyProfile(username));
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
