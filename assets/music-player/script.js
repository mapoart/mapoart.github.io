const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

const songs = [
  {
    title: "MAPO - Beat Pack 2 - 20210104-Second",
    filename: "MarcinMAPOPolak-20210104-Second.mp3",
  },
  {
    title: "Beat Club Competition 2021",
    filename: "MarcinMAPOPolak-BeatClub2021-FlipIT-final369.mp3",
  },
  {
    title: "MAPO - Beat Pack 1 - 202102 - 99BPM",
    filename: "MarcinMAPOPolak_BEATPACK_2021_02_99BPM.mp3",
  },
  {
    title: "MAPO - Beat Pack 1 - Cand 0 - 103BPM",
    filename: "MAPO_BEATPACK_CAND_0_103BPM.mp3",
  },
  {
    title: "MAPO - Beat Pack 1 - 20210103 - 70  BPM",
    filename: "MarcinMAPOPOlak-20210103_70BPM.mp3",
  },
  {
    title: "MAPO - Beat Pack 1 - 25122020 - 110  BPM",
    filename: "MarcinMAPOPolak25-12-2020_1_110BPM.mp3",
  },
];

// keep track of the songs
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song.title;

  audio.src = `assets/music-beats-369/${song.filename}`;
  console.log("Loading Song: ", audio.src);
  cover.src = `assets/music-beats-369/${song.filename}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  //   console.log(e.srcElement.currentTime);
  //   console.log(e.srcElement.duration);
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;

  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Events

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// progress
audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);
