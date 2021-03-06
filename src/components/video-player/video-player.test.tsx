import * as React from "react";
import * as renderer from 'react-test-renderer';

import VideoPlayer from './video-player';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`VideoPlayer correctly renders after launch`, () => {
    const {src, poster} = films[0];

    const component = renderer.create(
        <VideoPlayer
          src={src}
          poster={poster}
          muted={true}
          isPlaying={false}
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
