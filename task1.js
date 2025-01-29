"use strict";

//  1. task
function roadTripPlaylist(playlist, maxDuration) {
  playlist.sort((a, b) => a.duration - b.duration);

  let selectedSong = [];
  let totalTime = 0;

  for (let song of playlist) {
    if (totalTime + song.duration <= maxDuration) {
      selectedSong.push(song);
      totalTime + song.duration;
    } else {
      break;
    }
  }

  return selectedSong;
}

const playlist = [
  { title: "Song A", duration: 3.5 },
  { title: "Song B", duration: 4.2 },
  { title: "Song C", duration: 5.1 },
  { title: "Song D", duration: 2.8 },
];

const result = roadTripPlaylist(playlist, 15);
console.log(result);
