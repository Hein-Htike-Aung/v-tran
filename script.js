// JavaScript to render the video on the canvas with transparency
const video = document.getElementById("backgroundVideo");
const canvas = document.getElementById("videoCanvas");
const ctx = canvas.getContext("2d");

// Resize the canvas to cover the whole viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("Canvas resized to:", canvas.width, "x", canvas.height);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Function to render the video frame onto the canvas with transparency
function renderVideoToCanvas() {
  if (!video.paused && !video.ended) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set transparency
    ctx.globalAlpha = 0.5; // Adjust the transparency level here (0.0 to 1.0)

    // Draw the video frame onto the canvas, scaling it to fit the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }

  // Request the next frame
  requestAnimationFrame(renderVideoToCanvas);
}

// Start rendering once the video is ready to play
video.addEventListener("canplay", () => {
  console.log("Video is ready to play.");
  video.play();
});

video.addEventListener("play", () => {
  renderVideoToCanvas();
});
