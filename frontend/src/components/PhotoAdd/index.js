import { connect } from "react-redux";
import { actionCreators as photoActions } from "redux/modules/photos";
import Container from "./container";
import { withRouter } from "react-router-dom";
const mapStateToProps = (state, ownProps) => {
  const {
    msg: { photoSave }
  } = state;

  return {
    photoSave
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log(ownProps.history);
  return {
    saveFeed: photo => {
      dispatch(photoActions.saveFeed(photo, ownProps.history));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
);
