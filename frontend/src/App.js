import React from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Image Upload and Retrieval</h1>
      </header>
      <div className="App-content">
        <ImageUpload />
        <ImageDisplay imageId="IMAGE_ID_HERE" />
      </div>
    </div>
  );
}

export default App;
