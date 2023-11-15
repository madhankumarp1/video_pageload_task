let add = document.querySelector("button");
// console.log(add)
let video = document.getElementById("myVideo");

add.addEventListener("click", play_and_pause);
function play_and_pause() {
  console.log(video.paused)
  if (video.paused  ) {
    video.play();
    Btn.innerHTML = ' <i class="fa-solid fa-circle"></i> Pause ';
    Btn.classList.remove("myStyle-green");
  } else {
    video.pause();
    Btn.innerHTML = 'Play <i class="fa-solid fa-circle"></i>';
    Btn.classList.add("myStyle-green");
  }
}
