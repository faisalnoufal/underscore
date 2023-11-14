function changeText() {
  let text = document.getElementById("input").value;
  document.getElementById("output").textContent = text.replace(/ /g, "_");
}

function copyToClipboard() {
  const outputText = document.getElementById("output");
  const textToCopy = outputText.textContent;

  // Create a temporary textarea to copy the text
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  // Select and copy the text
  tempTextarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  alert("Text copied to clipboard!");
}

const textarea = document.querySelector("#input");
textarea.addEventListener("input", autoResize, false);

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
