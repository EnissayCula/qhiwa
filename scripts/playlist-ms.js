 
const audioPlayer = document.getElementById('audio-player');
const playlist = document.getElementById('playlist');
const volumeInput = document.getElementById('volume-input');
const backBtn = document.getElementById('back-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const progressBar = document.getElementById('progress-bar');
const muteBtn = document.getElementById('mute-btn');


const songs = [
    { title: 'Pink Floyd - Marooned  low-q', source: './songes/Pink Floyd - Marooned  low-q.mp3' },
    { title: 'Khaled - Wach Jabek Liy', source: './songes/Wach Jabek Liya.mp3' },
    { title: 'The Weeknd - Cant Feel My Face', source: './songes/The Weeknd - Cant Feel My Face.mp3' },
    { title: 'The Weeknd - I Feel It Coming ft. Daft Punk', source: './songes/The Weeknd - I Feel It Coming ft. Daft Punk.mp3' },
    { title: 'The Weeknd - Save Your Tears', source: './songes/The Weeknd - Save Your Tears.mp3' },
    // Add more songs here
];

songs.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = song.title;
    listItem.addEventListener('click', () => {
        audioPlayer.src = song.source;
        audioPlayer.play();
    });
    playlist.appendChild(listItem);
});
// ... (same as before) ...



let currentIndex = 0;

function playSong(index) {
    if (index >= 0 && index < songs.length) {
        currentIndex = index;
        const song = songs[currentIndex];
        audioPlayer.src = song.source;
        audioPlayer.play();
    }
}

backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
});

pauseBtn.addEventListener('click', () => {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex);
});

// Play the first song initially
playSong(currentIndex);




// Initialize volume to default value
audioPlayer.volume = volumeInput.value;

// Update volume when input changes
volumeInput.addEventListener('input', () => {
    audioPlayer.volume = volumeInput.value;
});

// ... (rest of the code, including button event listeners)

// shuffle 


shuffleBtn.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * songs.length);
    playSong(currentIndex);
});

audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

// ... (same as before) ...

muteBtn.addEventListener('click', () => {
    if (audioPlayer.muted) {
        audioPlayer.muted = false;
        muteBtn.textContent = 'Mute';
    } else {
        audioPlayer.muted = true;
        muteBtn.textContent = 'Unmute';
    }
});

// ... (rest of the code)

