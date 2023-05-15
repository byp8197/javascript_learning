const htmlbody = document.querySelector('body');

const randomclick = function () {
  const colors = ["red", "green", "orange", "yellow"];
  const randomindex = Math.floor(Math.random() * colors.length);
  const randomcolor = colors[randomindex];
  htmlbody.style.backgroundColor = randomcolor;
  console.log("The user clicked and selected the color" + randomcolor);
}

htmlbody.onclick = randomclick;