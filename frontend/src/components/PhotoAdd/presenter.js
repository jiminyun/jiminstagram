import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PhotoAdd = props => (
  <div className="photo-container">
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="preview-warp">
        <div className="preview">
          {props.preview && (
            <img className="previewPhoto" src={props.preview} alt="preview" />
          )}
          <div class="upload-btn-wrapper">
            <button class="btn">Upload a file</button>
            <input
              id="preview"
              type="file"
              name="file"
              className="previewFile"
              onChange={props.handlePreview}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          className="input"
          onChange={props.handleInputChange}
          name="location"
          value={props.location}
        />
      </div>
      <div className="row">
        <label htmlFor="caption">Caption</label>
        <input
          type="text"
          className="input"
          onChange={props.handleInputChange}
          name="caption"
          value={props.caption}
        />
      </div>
      <div className="row">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          placeholder="#example"
          className="input"
          onChange={props.handleInputChange}
          name="tags"
          value={props.tags}
        />
      </div>
      <div className="row">
        <button type="submit" className="button">
          Upload Photo
        </button>
      </div>
    </form>
  </div>
);

export default PhotoAdd;
