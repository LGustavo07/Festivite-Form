let input = document.getElementById("choose-file");
let fileName = document.getElementById("file-name")

input.addEventListener("change", () => {
  let file = document.querySelector("input[type=file]").files[0];

  fileName.innerText = file.name;
  fileName.style.color = "#c8cdd0";
})