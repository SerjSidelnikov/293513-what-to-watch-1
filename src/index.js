import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    movieNames: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`],
  };

  ReactDOM.render(
      <App
        movieNames={settings.movieNames}
      />,
      document.getElementById(`root`)
  );
};

init();
