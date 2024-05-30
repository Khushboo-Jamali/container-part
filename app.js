const video = document.querySelector(".video-container video");
// sconst hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("mouseenter", () => {
  video.play();
  // hoverText.classList.remove("active");
});
video.addEventListener("mouseleave", () => {
  video.pause();
  // hoverText.classList.add("active");
});
