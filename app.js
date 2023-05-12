document.addEventListener("DOMContentLoaded", function() {
  const sendButton = document.querySelector(".input-message button");
  const messageTextarea = document.querySelector(".input-message textarea");
  const messagesContainer = document.querySelector(".messages");

  sendButton.addEventListener("click", sendMessage);
  messageTextarea.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents the Enter key from creating a new line
      sendMessage();
    }
  });

  function sendMessage() {
    const messageText = messageTextarea.value.trim();
    if (messageText !== "") {
      const messageTile = document.createElement("div");
      messageTile.classList.add("message-tile");

      const sender = "You"; // Assuming you are the sender
      if (sender === "You") {
        messageTile.classList.add("sent");
      } else {
        messageTile.classList.add("received");
      }

      messageTile.innerHTML = `
      <p class="message-sender" style=" color: #ffffff; text-align:right">${sender}</p>
      <p class="message-text" style=" color: #ffffff">${messageText}</p>
      `;
      messagesContainer.appendChild(messageTile);
      messageTextarea.value = "";
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
});
