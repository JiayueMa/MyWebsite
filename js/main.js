document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    const commentList = document.getElementById('comment-list');

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<strong>${username}</strong>: <p>${comment}</p>`;

    commentList.appendChild(commentElement);

    document.getElementById('comment-form').reset();
});
