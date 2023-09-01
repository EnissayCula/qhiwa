const songs = [
    {
      title: 'Pink Floyd - Marooned  low-q',
      source: './songes/Pink Floyd - Marooned  low-q.mp3',
      genre: 'rock'
    },
    {
      title: 'Khaled - Wach Jabek Liy',
      source: './songes/Wach Jabek Liya.mp3',
      genre: 'rai'
    },
    {
      title: 'The Weeknd - Cant Feel My Face',
      source: './songes/The Weeknd - Cant Feel My Face.mp3',
      genre: 'pop'
    },
    {
      title: 'The Weeknd - I Feel It Coming ft. Daft Punk',
      source: './songes/The Weeknd - I Feel It Coming ft. Daft Punk.mp3',
      genre: 'pop'
    },
    {
      title: 'The Weeknd - Save Your Tears',
      source: './songes/The Weeknd - Save Your Tears.mp3',
      genre: 'pop'
    },
  ];
  //add more albums
  console.log(songs)
  
  const rockMusic = songs.filter(song => (song.genre.includes('rock')));
  console.log(rockMusic)
  const raiMusic = songs.filter(song => (song.genre.includes('rai')));
  console.log(raiMusic)
  const popMusic = songs.filter(song => (song.genre.includes('pop')));
  console.log(popMusic)
