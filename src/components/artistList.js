import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const list = ({ allArtists }) => {
      if (allArtists) {
        return allArtists.map(item => {
          const style = {
            background: `url('/images/covers/${item.cover}.jpg') no-repeat`
          }
          return (
            <Link
              key={item.id}
              to={`/artist/${item.id}`}
              className="artists-item"
              style={style}
            >
            <div>{item.name}</div>
            </Link>
          )
        });
      }
    }
    return (
      <div className="artists-list">
        <h4>Browse Artists</h4>
        {list(props)}
      </div>
    )
};

export default ArtistList;