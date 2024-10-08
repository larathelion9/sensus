document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.querySelector('.start-screen');
    const moodTracker = document.querySelector('.mood-tracker');
    const logMoodButton = document.querySelector('.start-button');
    const modeToggleButton = document.querySelector('.toggle-mode');
    const body = document.querySelector('body');
    const moodButtons = document.querySelectorAll('.mood-button');
    const lockMoodButton = document.querySelector('.lock-mood');
    const memoryShelfRow = document.querySelector('.memory-shelf-row');
    let selectedEmotion = null;

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
            // Clear previously selected emotion
            selectedEmotion = button;

            // Reset button colors
            moodButtons.forEach(btn => btn.style.backgroundColor = '#e0e0e0');
            // Highlight selected button color
            button.style.backgroundColor = button.dataset.color;
        });
    });

    // Lock Mood Button Click
    lockMoodButton.addEventListener('click', () => {
        if (selectedEmotion) {
            // Create and add memory ball to the shelf
            const memoryBall = document.createElement('div');
            memoryBall.className = 'memory-ball';
            memoryBall.style.backgroundColor = selectedEmotion.dataset.color;
            const ballDetails = document.createElement('div');
            ballDetails.className = 'ball-details';
            ballDetails.textContent = `${selectedEmotion.dataset.emotion} - ${new Date().toLocaleDateString()}`;
            memoryBall.appendChild(ballDetails);
            memoryShelfRow.appendChild(memoryBall);

            // Reset the selected button after locking in
            moodButtons.forEach(btn => btn.style.backgroundColor = '#e0e0e0');
            selectedEmotion = null;
        }
    });
});
