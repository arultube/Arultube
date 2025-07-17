import React, { useState } from 'react';
import axios from 'axios';

const VideoUploadForm = () => {
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', video);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      alert(res.data.message);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div>
      <h2>Upload Video to ArulTube</h2>
      <input type="file" accept="video/*" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUploadForm;
