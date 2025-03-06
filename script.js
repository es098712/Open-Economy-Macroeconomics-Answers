// Search Functionality
function searchAnswers() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#answer-list li");

    items.forEach((item) => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    loadComments();
});

function postComment() {
    let commentBox = document.getElementById("comment-box");
    let commentText = commentBox.value.trim();

    if (commentText !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];

        // Create a comment object with text and timestamp
        let commentObject = {
            text: commentText,
            timestamp: new Date().toLocaleString(), // Get readable timestamp
        };

        comments.push(commentObject); // Append new comment to the array
        localStorage.setItem("comments", JSON.stringify(comments)); // Save to localStorage

        loadComments(); // Reload the list (this ensures sorting is correct)
        commentBox.value = ""; // Clear input
    }
}

// Function to load and display comments from localStorage
function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = ""; // Clear the list before reloading

    // Ensure the oldest comments appear at the bottom
    comments.forEach(commentObject => addCommentToDOM(commentObject));
}

// Helper function to add a comment with timestamp to the DOM
function addCommentToDOM(commentObject) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="comment-text">${commentObject.text}</div>
        <div class="comment-timestamp">${commentObject.timestamp}</div>
    `;
    document.getElementById("comments-list").appendChild(listItem);
}
