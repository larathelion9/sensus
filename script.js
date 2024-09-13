// Function to show the mood tracker and hide the start screen
function showMoodTracker() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('mood-tracker').style.display = 'block';
}

// Function to log the selected mood
function logMood(mood) {
    const memoryShelf = document.getElementById('memory-shelf');
    const feedback = document.getElementById('feedback');

    // Get current date
    const today = new Date().toLocaleDateString();
    
    // Check if today's mood has been logged
    if (localStorage.getItem(today)) {
        feedback.textContent = "you've already logged your mood today!";
        return;
    }

    // Save today's mood in localStorage
    localStorage.setItem(today, mood);

    // Add a new ball to the memory shelf with the mood color
    const newBall = document.createElement('div');
    newBall.classList.add('memory-ball');
    
    // Assign color based on mood
    if (mood === 'happy') {
        newBall.style.backgroundColor = '#f1c40f'; // yellow for happy
        feedback.textContent = "you felt happy today!";
    } else if (mood === 'sad') {
        newBall.style.backgroundColor = '#3498db'; // blue for sad
        feedback.textContent = "you felt sad today!";
    } else if (mood === 'neutral') {
        newBall.style.backgroundColor = '#95a5a6'; // grey for neutral
        feedback.textContent = "you felt neutral today.";
    } else if (mood === 'angry') {
        newBall.style.backgroundColor = '#e74c3c'; // red for angry
        feedback.textContent = "you felt angry today!";
    } else if (mood === 'excited') {
        newBall.style.backgroundColor = '#2ecc71'; // green for excited
        feedback.textContent = "you felt excited today!";
    } else if (mood === 'anxious') {
        newBall.style.backgroundColor = '#e67e22'; // orange for anxious
        feedback.textContent = "you felt anxious today.";
    } else if (mood === 'tired') {
        newBall.style.backgroundColor = '#8e44ad'; // purple for tired
        feedback.textContent = "you felt tired today.";
    }

    // Add the new ball to the memory shelf
    memoryShelf.appendChild(newBall);

    // Load previous days' moods
    loadMemoryShelf();
}

// Function to load memory shelf
function loadMemoryShelf() {
    const memoryShelf = document.getElementById('memory-shelf');
    memoryShelf.innerHTML = ''; // Clear the shelf

    for (let i = 0; i < localStorage.length; i++) {
        const date = localStorage.key(i);
        const mood = localStorage.getItem(date);

        const ball = document.createElement('div');
        ball.classList.add('memory-ball');

        if (mood === 'happy') ball.style.backgroundColor = '#f1c40f';
        if (mood === 'sad') ball.style.backgroundColor = '#3498db';
        if (mood === 'neutral') ball.style.backgroundColor = '#95a5a6';
        if (mood === 'angry') ball.style.backgroundColor = '#e74c3c';
        if (mood === 'excited') ball.style.backgroundColor = '#2ecc71';
        if (mood === 'anxious') ball.style.backgroundColor = '#e67e22';
        if (mood === 'tired') ball.style.backgroundColor = '#8e44ad';

        memoryShelf.appendChild(ball);
    }
}

// Load the memory shelf on page load
window.onload = loadMemoryShelf;
