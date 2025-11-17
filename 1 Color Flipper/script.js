const body = document.getElementsByTagName("body")[0]
// body.style.backgroundColor = "green";

function setcolor(name){
    body.style.backgroundColor = name;
    codeDisplay.textContent =color
}
// setcolor("blue")

function randomcolor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
     codeDisplay.textContent =color
}

// randomcolor()
const picker = document.getElementById("colorPicker");
const codeDisplay = document.getElementById("colorCode");

// Update background and show HEX code
picker.addEventListener("input", function() {
  const chosenColor = picker.value;
  document.body.style.backgroundColor = chosenColor;
//   codeDisplay.textContent = chosenColor;
});
