import React, { Component } from "react";
import PropTypes from 'prop-types';

class UploadFileV2 extends Component {
  handleLoadLocalFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    this.props.onFileLoaded(localImageUrl);
  }

  render() {
    return (
      <div>
        <p>Click the button to load a local file as a URL-like entity.</p>
        <label
          className="upload-file"
          htmlFor="my-upload-btn"
        >
          <input
            id="my-upload-btn"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleLoadLocalFile}
          />
        </label>
      </div>
    );
  }
}

UploadFileV2.propTypes = {
  onFileLoaded: PropTypes.func.isRequired,
};

export default UploadFileV2;
