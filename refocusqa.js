const albumStore = {
  'name': 'Astrovision',
  'location': 'Sm department store',
  'listOfAlbum': [
  {
    'albumName': 'love', 
    'bandName': 'Saosin',
  },
  {
    'albumName': 'death',
    'bandName': 'The Used'
  },
  {
    'albumName': 'life',
    'bandName': 'Taking Back Sunday'
  }],
  'displayAlbum': function(){
    for (item of this.listOfAlbum){
      console.log('Album name: ' + item.albumName + '\n Band Name: ' + item.bandName )
    } 
  },
  'addAlbum': function(albumName,bandName){
    this.listOfAlbum.push({
      'albumName': albumName,
      'bandName': bandName
    })
  }


}


albumStore.addAlbum('echaks', 'lols');
albumStore.displayAlbum();