import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { photo, openPhotoDetail } = ownProps;
  return {
    photo,
    openPhotoDetail
  };
};

export default connect(
  mapStateToProps,
  null
)(Container);
