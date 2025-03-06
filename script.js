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

// Function to post a comment and save it to localStorage
function postComment() {
    let commentBox = document.getElementById("comment-box");
    let commentText = commentBox.value.trim();

    if (commentText !== "") {
        let comments = JSON.parse(localStorage.getItem("comments")) || []; // Get saved comments
        comments.push(commentText); // Add new comment
        localStorage.setItem("comments", JSON.stringify(comments)); // Save back to localStorage

        addCommentToDOM(commentText); // Display new comment
        commentBox.value = ""; // Clear input box
    }
}

// Function to load and display comments from localStorage
function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || []; // Get saved comments
    let commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = ""; // Clear the list before reloading

    comments.forEach(addCommentToDOM); // Add each saved comment to the DOM
}

// Helper function to add a comment to the list
function addCommentToDOM(commentText) {
    let listItem = document.createElement("li");
    listItem.textContent = commentText;
    document.getElementById("comments-list").appendChild(listItem);
}
