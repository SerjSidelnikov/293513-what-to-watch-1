import * as React from "react";
import * as renderer from 'react-test-renderer';

import MovieCard from './movie-card';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`MovieCard screen correctly renders after launch`, () => {
    const handleClick = jest.fn();
    const {title, src, poster} = films[0];

    const component = renderer.create(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          isPlaying={false}
          onClick={handleClick}
          onMouseEnter={handleClick}
          onMouseLeave={handleClick}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
