import React, {useState} from 'react';
import TestComp from './Components/TestComp';
import YoutubeDL  from 'youtube-dl-exec';
import { saveAs } from 'file-saver';
const Ffmpeg = require('ffmpeg')


function App() {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [mp3Data, setMp3Data] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setYoutubeLink(event.target.value);
  };

  const handleDownload = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsLoading(true);

      const video = YoutubeDL(youtubeLink);
      video.pipe(Ffmpeg({ format: 'mp3' })).on('error', (error) => {
        setError(error);
        setIsLoading(false);
      }).on('end', () => {
        setMp3Data(video.read());
        setIsLoading(false);
      });
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveAs(mp3Data, 'video.mp3');
  };

  return (
    <div>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleDownload}>
        <label htmlFor="youtube-link">YouTube Link:</label>
        <input
          type="text"
          id="youtube-link"
          value={youtubeLink}
          onChange={handleChange}
        />
        <button type="submit" disabled={isLoading}>
          Download
        </button>
      </form>
      {mp3Data && (
        <a href="#" onClick={handleSave}>
          Save MP3
        </a>
      )}
    </div>
  );
}

export default App;
