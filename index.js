const divListen = document.getElementById("box");
window.addEventListener("keydown", moveFunction);
window.addEventListener("keydown", event => console.log(event.key))

let x = 0;
let y = 0;


function moveFunction(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 5;
      divListen.style.top=y+"px";
      divListen.textContent="I am going down"
      break;
    case "ArrowUp":
      y -= 5;
      divListen.style.top=y+"px";
      divListen.textContent="I am going up"
      break;
    case "ArrowRight":
      x += 5;
      divListen.style.left=x+"px";
      divListen.textContent="I am going right"
      break;
    case "ArrowLeft":
      x -= 5;
      divListen.style.left=x+"px";
      divListen.textContent="I am going left"
      break;
  }

}
