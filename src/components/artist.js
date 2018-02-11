import React, { Component } from 'react';
import Header from './header';
import AlbumList from './albumList';

const URL = 'http://localhost:3004/artists';

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: ''
    };
  }

  componentDidMount() {
    fetch(`${URL}/${this.props.match.params.artistId}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
      this.setState({
        artist: json
      })
    });
  }

  render() {
    const artist = this.state.artist;
    return (
      <div>
        <Header />

        <div className="artist-bio">
          <div className="avatar">
            <span 
              style={{ background:`url('/images/covers/${artist.cover}.jpg') no-repeat`}}>
            </span>
          </div>
          <div className="bio">
            <h3>{artist.name}</h3>
            <div className="bio-text">
              {artist.bio}
            </div>
          </div>
        </div>

        <AlbumList albumList={artist.albums} />
      </div>
    )
  }
}

export default Artist;