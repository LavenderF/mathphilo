// Function to submit user answer
function submitAnswer() {
  const userAnswer = document.getElementById('user-answer').value;
  if (userAnswer.trim() === "") {
    alert("Please write something before submitting!");
    return;
  }

  const responseDiv = document.createElement('div');
  responseDiv.classList.add('response');
  responseDiv.innerHTML = `
    <p><strong>Your Answer:</strong></p>
    <p>${userAnswer}</p>
    <button onclick="voteUp(this)">Upvote</button> <button onclick="voteDown(this)">Downvote</button>
    <div class="votes">Votes: <span class="vote-count">0</span></div>
  `;
  document.getElementById('responses-list').appendChild(responseDiv);
  document.getElementById('user-answer').value = ""; // Clear input after submitting
}

// Function for upvote
function voteUp(button) {
  const voteCount = button.parentElement.querySelector('.vote-count');
  voteCount.textContent = parseInt(voteCount.textContent) + 1;
}

// Function for downvote
function voteDown(button) {
  const voteCount = button.parentElement.querySelector('.vote-count');
  voteCount.textContent = parseInt(voteCount.textContent) - 1;
}
