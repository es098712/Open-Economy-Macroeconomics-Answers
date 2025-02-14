// Search Functionality
function searchAnswers() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#answer-list li");

    items.forEach((item) => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

// Discussion Section - Post Comments
function postComment() {
    let commentBox = document.getElementById("comment-box");
    let commentText = commentBox.value.trim();
    if (commentText !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = commentText;
        document.getElementById("comments-list").appendChild(listItem);
        commentBox.value = "";
    }
}
