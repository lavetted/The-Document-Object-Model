function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  const chatBox = document.getElementById("chat-box");

  if (username === "" || message === "") {
    alert("Please enter your name and message");
    return;
  }

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");

  msgDiv.innerHTML = `<span>${username}:</span> ${message}`;

  chatBox.appendChild(msgDiv);

  document.getElementById("message").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
