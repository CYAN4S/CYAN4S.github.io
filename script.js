const parallelogram = document.getElementById("parallelogram");

animate({
  timing: (x) => 1 - Math.pow(1 - x, 4),
  draw: (v) => {
    parallelogram.style.width = v * 85 + "%";
  },
  duration: 800,
});

function animate({ timing, draw, duration }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
