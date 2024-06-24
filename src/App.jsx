import { useState } from 'react';
import './App.css';
import FetchJokes from './components/FetchJokes';

function App() {
  return (
    <>
      <div>
        <h1>Hello Axios</h1>
        <FetchJokes />
      </div>
    </>
  );
}

export default App;
