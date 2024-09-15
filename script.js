// Get the button and the like count element
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

// Check if there is a stored like count in localStorage
let count = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;

// Display the stored count when the page loads
likeCount.textContent = `Like(s): ${count}`;

// Add an event listener to the button
likeBtn.addEventListener('click', () => {
    // Increment the count when the button is clicked
    count++;

    // Update the displayed count
    likeCount.textContent = `Like(s): ${count}`;

    // Store the updated count in localStorage
    localStorage.setItem('likeCount', count);
});
