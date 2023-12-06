// script.js
let likeCount = 0;
let dislikeCount = 0;

function updateCount(type) {
  if (type === 'like') {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
  } else if (type === 'dislike') {
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount;
  }
}
