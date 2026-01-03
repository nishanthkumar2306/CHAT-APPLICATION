// Connect client to Socket.IO server
const socket = io();

// Function called when Send button is clicked
function sendMessage() {

    // Get input box
    let input = document.getElementById("msg");

    // Get message typed by user
    let message = input.value;

    // Check message is not empty
    if (message !== "") {

        // Send message to server
        socket.emit("chatMessage", message);

        // Clear input box after sending
        input.value = "";
    }
}

// Listen for messages coming from server
socket.on("chatMessage", (msg) => {

    // Get message container
    let messagesDiv = document.getElementById("messages");

    // Create a new div for each message
    let messageDiv = document.createElement("div");
    messageDiv.className = "message";

    // Create span to show message text
    let text = document.createElement("span");
    text.innerText = msg;

    // Create Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    // Delete message when button clicked
    delBtn.onclick = function () {
        messageDiv.remove();
    };

    // Add text and delete button to message div
    messageDiv.appendChild(text);
    messageDiv.appendChild(delBtn);

    // Add message to messages area
    messagesDiv.appendChild(messageDiv);
});
