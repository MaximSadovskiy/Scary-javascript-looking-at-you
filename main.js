function length(x, y) {
  return Math.sqrt(x * x + y * y);
}

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function on_mousemove(e) {
  const angle = 35;
  const div = document.getElementById("xd");
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  let degreeY = lerp(-angle, angle, cursorX / window.innerWidth);
  let degreeX = lerp(angle, -angle, cursorY / window.innerHeight);
  div.style.transform = `perspective(1000px) rotateY(${degreeY}deg) rotateX(${degreeX}deg)`;
}

self.onmousemove = (e) => {
  on_mousemove(e);
};
