import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const {
    photos: { currentPostId, feed }
  } = state;

  const selectedFeed = feed.filter(photo => photo.id === currentPostId);
  console.log("mapStateToProps");

  return {
    selectedFeed
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
