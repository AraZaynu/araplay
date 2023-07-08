window.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('.player');
  
    players.forEach((player) => {
    const audio = player.querySelector('.audio');
    const playButton = player.querySelector('.play');
      const pauseButton = player.querySelector('.pause');
      const seekBar = player.querySelector('.seek');
      const volumeBar = player.querySelector('.volume');
      const durationLabel = player.querySelector('.duration');
      const volumeButton = player.querySelector('.btn_volume')
      const volumeButton2 = player.querySelector('.btn_volume2')

      // fungsi untuk hidden & mute volume
        const hidden = () => {
            volumeBar.classList.toggle('hidden')
        };
        const hidden2 = () => {
            volumeBar.classList.toggle('hidden')
        };
        const mute = () => {
            audio.muted = true;
            volumeButton.classList.toggle('hidden')
            volumeButton2.classList.toggle('hidden')
        };
        const mute2 = () => {
            audio.muted = false;
            volumeButton2.classList.toggle('hidden')
            volumeButton.classList.toggle('hidden')
        };
  
      // Fungsi untuk memulai atau melanjutkan pemutaran musik
      const play = () => {
        audio.play();
        playButton.classList.toggle('hidden')
        pauseButton.classList.toggle('hidden')
      };
  
      // Fungsi untuk melakukan pause pada pemutaran musik
      const pause = () => {
        audio.pause();
        pauseButton.classList.toggle('hidden')
        playButton.classList.toggle('hidden')
      };
  
      // Fungsi untuk mengatur waktu pemutaran musik
      const seek = () => {
        audio.currentTime = seekBar.value;
      };
  
      // Fungsi untuk mengatur volume musik
      const setVolume = () => {
        audio.volume = volumeBar.value;
      };
  
      // Fungsi untuk mengupdate tampilan durasi pemutaran musik
      const updateDurationLabel = () => {
        const currentMinutes = Math.floor(audio.currentTime / 60);
        const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        const durationMinutes = Math.floor(audio.duration / 60);
        const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
  
        durationLabel.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
      };
      
    // event listener untuk btn volume
      volumeButton.addEventListener('mouseover', hidden);
      volumeButton.addEventListener('mouseout', hidden2);
      volumeButton.addEventListener('click', mute);
      volumeButton2.addEventListener('click', mute2);

      // Event listener untuk tombol Play
      playButton.addEventListener('click', play);
  
      // Event listener untuk tombol Pause
      pauseButton.addEventListener('click', pause);
  
      // Event listener untuk seek bar
      audio.addEventListener('loadedmetadata', () => {
        seekBar.max = audio.duration;
      });
      
      seekBar.addEventListener('input', seek);
  
      // Event listener untuk volume bar
      volumeBar.addEventListener('input', setVolume);
  
      // Event listener untuk memperbarui durasi musik saat sedang diputar
      audio.addEventListener('timeupdate', updateDurationLabel);
    });
  });
  