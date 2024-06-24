import React, { useState } from 'react';
import axios from 'axios';

export default function FetchJokes() {
  const [joke, setJoke] = useState(null);
  async function getJokes() {
    const jokes = await axios
      .get('https://official-joke-api.appspot.com/jokes/random')
      .then(function (res) {
        return res;
      });
    setJoke(jokes);
  }

  function JokeRender() {
    if (joke) {
      return (
        <>
          <div className='setup'>
            <p>{joke.data.setup}</p>
          </div>
          <div className='punchline'>
            <p>{joke.data.punchline}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <p>Click the button to generate a joke</p>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <JokeRender />
      <button onClick={() => getJokes()}>Genereate new Joke</button>
    </>
  );
}
