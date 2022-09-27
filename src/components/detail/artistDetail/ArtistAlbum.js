import React from 'react';
import styled from 'styled-components';

const StyledArtistAlbum = styled.section`
  padding-top: 40px;

  div.artist-album-inner-box {
    div.artist-album-head-wrap {
      position: relative;
      min-height: 20px;
      padding-bottom: 16px;

      div.artist-album-head-wrap {
        position: absolute;
        top: 0;
        right: 0;
        color: #333;
      }
    }
  }
`;

const ArtistAlbum = () => {
  return (
    <StyledArtistAlbum>
      <div className='artist-album-inner-box'>
        <div className='artist-album-head-wrap'></div>
      </div>
    </StyledArtistAlbum>
  );
};

export default ArtistAlbum;
