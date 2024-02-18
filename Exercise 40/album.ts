interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums and print each return value
let album1: Album = make_album('Artist1', 'Album1');
let album2: Album = make_album('Artist2', 'Album2', 12); // Including the number of tracks
let album3: Album = make_album('Artist3', 'Album3');

console.log(album1);
console.log(album2);
console.log(album3);
