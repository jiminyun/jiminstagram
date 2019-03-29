import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const {
    photos: { feedDetail }
  } = state;
  return {
    feedDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeedDetail: () => {
      dispatch(photoActions.getFeedDetail(ownProps.photoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
