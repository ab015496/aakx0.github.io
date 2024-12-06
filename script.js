// script.js
const statusElement = document.getElementById('status');
const usernameElement = document.getElementById('username');
const activityElement = document.getElementById('activity');

// Set user info
const userInfo = {
  username: "dl0a",
  activity: "streaming ストーカーをやめる",
  status: "dnd" // Change to "offline", "idle", "dnd"
};

// Function to update the profile card
function updateProfile(user) {
  usernameElement.textContent = user.username;
  activityElement.textContent = user.activity;

  // Remove existing status classes
  statusElement.classList.remove('status-online', 'status-idle', 'status-dnd', 'status-offline');

  // Add new status class
  switch (user.status) {
    case 'online':
      statusElement.classList.add('status-online');
      break;
    case 'idle':
      statusElement.classList.add('status-idle');
      break;
    case 'dnd':
      statusElement.classList.add('status-dnd');
      break;
    case 'offline':
      statusElement.classList.add('status-offline');
      break;
  }
}

// Initialize profile
updateProfile(userInfo);
