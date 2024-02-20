import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleDeleteClick(id) {
    setArtists(artists.filter((artist)=>
    {
      return artist.id != id
    }));
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              handleDeleteClick(artist.id);
              //artists.splice(artist.id, 1)
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
