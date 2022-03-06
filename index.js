let audio2 = new Audio("Give-Me-Some-Sunshine.mp3");
let audio = new Audio("I Am A Disco Dancer.mp3");
let audio3=new Audio("16 - Gully Boy (2019) - Mere Gully Mein.mp3")
let audio4=new Audio("Bezubaan Kab Se - Street Dancer 3D.mp3")
let audio5=new Audio("Imran-Khan-Satisfya-Official-Music-Video_pfVODjDBFxU.mp3")

audio.addEventListener("timeupdate", () => {
  document.getElementById("rangebar").value = parseInt(
    (audio.currentTime / audio.duration) * 100
  );
});
audio2.addEventListener("timeupdate", () => {
  document.getElementById("rangebar").value = parseInt(
    (audio2.currentTime / audio2.duration) * 100
  );
});
audio3.addEventListener("timeupdate", () => {
    document.getElementById("rangebar").value = parseInt(
      (audio3.currentTime / audio3.duration) * 100
    );
  }
  );
  audio4.addEventListener("timeupdate", () => {
    document.getElementById("rangebar").value = parseInt(
      (audio4.currentTime / audio4.duration) * 100
    );
  }
  );
  audio5.addEventListener("timeupdate", () => {
    document.getElementById("rangebar").value = parseInt(
      (audio5.currentTime / audio5.duration) * 100
    );
  }
  );


document.getElementById("playmini").addEventListener("click", () => {
  if (audio.paused && audio2.paused&&audio3.paused) {
    audio.play();
    audio.currentTime = 0;

    document.getElementById("play").setAttribute("src", "O2.png");
    document.getElementById("playmini").setAttribute("src", "O2.png");
  } else {
    audio.pause();
    document.getElementById("playmini").setAttribute("src", "p1 copy 7.png");
    document.getElementById("play").setAttribute("src", "p1 copy 7.png");
  }

  document.getElementById("play").addEventListener("click", () => {
    if (audio.played) {
      audio.pause();


      document.getElementById("play").setAttribute("src", "p1 copy 7.png");
      document.getElementById("playmini").setAttribute("src", "p1 copy 7.png");
    }
  });
});

document.getElementById("playmini2").addEventListener("click", () => {
    if (audio.paused && audio2.paused&&audio3.paused) {
      audio2.play();
      audio2.currentTime = 0;
  
      document.getElementById("play").setAttribute("src", "O2.png");
      document.getElementById("playmini2").setAttribute("src", "O2.png");
    } else {
      audio2.pause();
      document.getElementById("playmini2").setAttribute("src", "p1 copy 7.png");
      document.getElementById("play").setAttribute("src", "p1 copy 7.png");
    }
  
    document.getElementById("play").addEventListener("click", () => {
      if (audio2.played) {
        audio2.pause();
  
  
        document.getElementById("play").setAttribute("src", "p1 copy 7.png");
        document.getElementById("playmini2").setAttribute("src", "p1 copy 7.png");
      }
    });
  });
document.getElementById("playmini3").addEventListener("click", () => {
  if (audio2.paused && audio.paused&& audio3.paused) {
    audio3.play();
    audio3.currentTime = 0;

    document.getElementById("play").setAttribute("src", "O2.png");
    document.getElementById("playmini3").setAttribute("src", "O2.png");
  } else {
    audio3.pause();
    document.getElementById("playmini3").setAttribute("src", "p1 copy 7.png");
    document.getElementById("play").setAttribute("src", "p1 copy 7.png");
  }
  document.getElementById("play").addEventListener("click", () => {
    if (audio3.played&&audio.paused&&audio2.paused) {
      audio2.pause();
      document.getElementById("play").setAttribute("src", "p1 copy 7.png");
      document.getElementById("playmini2").setAttribute("src", "p1 copy 7.png");
    }
  });
});
document.getElementById("playmini4").addEventListener("click", () => {
  if (audio2.paused && audio.paused&& audio3.paused&&audio4.paused) {
    audio4.play();
    audio4.currentTime = 0;

    document.getElementById("play").setAttribute("src", "O2.png");
    document.getElementById("playmini4").setAttribute("src", "O2.png");
  } else {
    audio4.pause();
    document.getElementById("playmini4").setAttribute("src", "p1 copy 7.png");
    document.getElementById("play").setAttribute("src", "p1 copy 7.png");
  }
  document.getElementById("play").addEventListener("click", () => {
    if (audio4.played&&audio.paused&&audio2.paused) {
      audio4.pause();
      document.getElementById("play").setAttribute("src", "p1 copy 7.png");
      document.getElementById("playmini4").setAttribute("src", "p1 copy 7.png");
    }
  });
});
document.getElementById("playmini5").addEventListener("click", () => {
  if (audio2.paused && audio.paused&& audio3.paused&&audio4.paused&&audio5.paused) {
    audio5.play();
    audio5.currentTime = 0;

    document.getElementById("play").setAttribute("src", "O2.png");
    document.getElementById("playmini5").setAttribute("src", "O2.png");
  } else {
    audio5.pause();
    document.getElementById("playmini5").setAttribute("src", "p1 copy 7.png");
    document.getElementById("play").setAttribute("src", "p1 copy 7.png");
  }
  document.getElementById("play").addEventListener("click", () => {
    if (audio5.played&&audio.paused&&audio2.paused) {
      audio5.pause();
      document.getElementById("play").setAttribute("src", "p1 copy 7.png");
      document.getElementById("playmini5").setAttribute("src", "p1 copy 7.png");
    }
  });
});
// document.getElementById("playmini6").addEventListener("click", () => {
//   if (audio2.paused && audio.paused&& audio3.paused&&audio4.paused&&audio5.paused&& {
//     audio5.play();
//     audio5.currentTime = 0;

//     document.getElementById("play").setAttribute("src", "O2.png");
//     document.getElementById("playmini5").setAttribute("src", "O2.png");
//   } else {
//     audio5.pause();
//     document.getElementById("playmini5").setAttribute("src", "p1 copy 7.png");
//     document.getElementById("play").setAttribute("src", "p1 copy 7.png");
//   }
//   document.getElementById("play").addEventListener("click", () => {
//     if (audio5.played&&audio.paused&&audio2.paused) {
//       audio5.pause();
//       document.getElementById("play").setAttribute("src", "p1 copy 7.png");
//       document.getElementById("playmini5").setAttribute("src", "p1 copy 7.png");
//     }
//   });
// });
