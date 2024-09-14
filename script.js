document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.querySelector('.start-screen');
    const moodTracker = document.querySelector('.mood-tracker');
    const logMoodButton = document.querySelector('.start-button');
    const modeToggleButton = document.querySelector('.toggle-mode');
    const body = document.querySelector('body');
    const moodButtons = document.querySelectorAll('.mood-button');
    const lockMoodButton = document.querySelector('.lock-mood');
    const memoryShelfRow = document.querySelector('.memory-shelf-row');

    // Show Mood Tracker on Log Mood Button Click
    logMoodButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        moodTracker.classList.remove('hidden');
    });

    // Toggle Light/Dark Mode
    modeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode-body');
        if (body.classList.contains('dark-mode-body')) {
            modeToggleButton.textContent = 'switch to light mode';
            modeToggleButton.classList.replace('light-mode-button', 'dark-mode-button');
        } else {
            modeToggleButton.textContent = 'switch to dark mode';
            modeToggleButton.classList.replace('dark-mode-button', 'light-mode-button');
        }
    });

    // Mood Button Click
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset button colors
            moodButtons.forEach(btn => btn.style.backgroundColor = '#e0e0e0');
            // Set active button color
            button.style.backgroundColor = button.dataset.color;
            
            // Add a new memory ball
            const memoryBall = document.createElement('div');
            memoryBall.className = 'memory-ball';
            memoryBall.style.backgroundColor = button.dataset.color;
            const ballDetails = document.createElement('div');
            ballDetails.className = 'ball-details';
            ballDetails.textContent = `${button.dataset.emotion} - ${new Date().toLocaleDateString()}`;
            memoryBall.appendChild(ballDetails);
            memoryShelfRow.appendChild(memoryBall);
        });
    });

    // Lock Mood Button Click
    lockMoodButton.addEventListener('click', () => {
        moodButtons.forEach(button => button.style.backgroundColor = '#e0e0e0'); // Reset all buttons
    });
});
