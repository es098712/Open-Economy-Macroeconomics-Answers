// Search Functionality
function searchAnswers() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#answer-list li");

    items.forEach((item) => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

// Load comments from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadComments);

function postComment() {
    let commentBox = document.getElementById("comment-box");
    let commentText = commentBox.value.trim();
    
    if (commentText !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || []; // Retrieve stored comments
        comments.push(commentText); // Add new comment
        localStorage.setItem("comments", JSON.stringify(comments)); // Save to localStorage

        addCommentToDOM(commentText); // Display the comment
        commentBox.value = ""; // Clear input
    }
}

// Function to load comments from localStorage
function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(addCommentToDOM);
}

// Helper function to add comments to the webpage
function addCommentToDOM(commentText) {
    let listItem = document.createElement("li");
    listItem.textContent = commentText;
    document.getElementById("comments-list").appendChild(listItem);
}

