import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const {
    photos: { currentPostId, feed }
  } = state;
  const { closePhotoDetail } = ownProps;

  const selectedFeed = feed.filter(photo => photo.id === currentPostId);
  console.log(selectedFeed);

  return {
    selectedFeed,
    closePhotoDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("mapStateToProps", ownProps);
  return {
    getPhotoDetail: () => {
      dispatch(photoActions.getFeedDetail(ownProps.photoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
