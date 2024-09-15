document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.querySelector('.start-screen');
    const moodTracker = document.querySelector('.mood-tracker');
    const logMoodButton = document.querySelector('.start-button');
    const modeToggleButton = document.querySelector('.toggle-mode');
    const body = document.querySelector('body');
    const moodButtons = document.querySelectorAll('.mood-button');
    const lockMoodButton = document.querySelector('.lock-mood');
    const memoryShelfContainer = document.querySelector('.memory-shelf-container');
    let selectedEmotion = null;
    let memoryBallCount = 0;

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
            selectedEmotion = button;
            moodButtons.forEach(btn => btn.style.backgroundColor = '#e0e0e0');
            button.style.backgroundColor = button.dataset.color;
        });
    });

    // Lock Mood Button Click
    lockMoodButton.addEventListener('click', () => {
        if (selectedEmotion) {
            memoryBallCount++; // Track the number of memory balls
            const currentRow = document.querySelector('.memory-shelf-row:last-child');

            // Create a new row if there are already 7 memory balls in the current row
            if (currentRow && currentRow.children.length >= 7) {
                const newRow = document.createElement('div');
                newRow.className = 'memory-shelf-row';
                memoryShelfContainer.appendChild(newRow);
            }

            // Create and add memory ball to the appropriate row
            const newMemoryBall = document.createElement('div');
            newMemoryBall.className = 'memory-ball';
            newMemoryBall.style.backgroundColor = selectedEmotion.dataset.color;

            const ballDetails = document.createElement('div');
            ballDetails.className = 'ball-details';
            ballDetails.textContent = `${selectedEmotion.dataset.emotion} - ${new Date().toLocaleDateString()}`;
            newMemoryBall.appendChild(ballDetails);

            const currentRowToAdd = document.querySelector('.memory-shelf-row:last-child');
            currentRowToAdd.appendChild(newMemoryBall);

            // Reset the selected emotion
            moodButtons.forEach(btn => btn.style.backgroundColor = '#e0e0e0');
            selectedEmotion = null;
        }
    });
});
