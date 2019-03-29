import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import "./styles.scss";

const CommentBox = (props, context) => (
    <form className="comment-box">
        <Textarea className="input"
            placeholder="Add a comment ..."
            onChange={props.handleInputChange}
            value={props.comment}
            onKeyPress={props.handleKeyPress}
        />
    </form>
)

CommentBox.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    comment : PropTypes.string.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    photoId: PropTypes.number.isRequired,
};
export default CommentBox ;