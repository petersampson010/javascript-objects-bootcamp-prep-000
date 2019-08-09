var playlist = {artistName: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, Slowdrive) {
  delete playlist[Slowdrive]
  return playlist
}