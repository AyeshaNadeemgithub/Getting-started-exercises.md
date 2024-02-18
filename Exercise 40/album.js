"use strict";
function make_album(artist, title, tracks) {
    let album = {
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
let album1 = make_album('Artist1', 'Album1');
let album2 = make_album('Artist2', 'Album2', 12); // Including the number of tracks
let album3 = make_album('Artist3', 'Album3');
console.log(album1);
console.log(album2);
console.log(album3);
