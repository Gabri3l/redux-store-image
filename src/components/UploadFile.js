import React, { Component } from "react";
import PropTypes from 'prop-types';

class UploadFile extends Component {
  handleLoadLocalFile = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.onloadend = () =>
        this.props.onFileLoaded(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert('File uploaded is not valid.');
    }
  }

  render() {
    return (
      <div>
        <p>Click the button to load a local file.</p>
        <label
          className="upload-file"
          htmlFor="my-upload-btn"
        >
          <input
            id="my-upload-btn"
            type="file"
            onChange={this.handleLoadLocalFile}
          />
        </label>
      </div>
    );
  }
}

UploadFile.propTypes = {
  onFileLoaded: PropTypes.func.isRequired,
};

export default UploadFile;
