import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { photo } = ownProps;
  return {
    photo
  };
};

export default connect(
  mapStateToProps,
  null
)(Container);
