document.addEventListener('DOMContentLoaded', function() {
    const logMoodButton = document.getElementById('log-mood-btn');
    const startScreen = document.getElementById('start-screen');
    const moodTracker = document.getElementById('mood-tracker');
    const memoryShelfRow = document.querySelector('.memory-shelf-row');
    const modeToggleButton = document.getElementById('mode-toggle-btn');
    const lever = document.getElementById('lever');
    const moodButtons = document.querySelectorAll('.mood-button');
    let currentMode = 'light';

    // Dark/Light Mode Toggle
    modeToggleButton.addEventListener('click', () => {
        const body = document.body;
        if (currentMode === 'light') {
            body.classList.add('dark-mode-body');
            startScreen.classList.add('dark-mode');
            modeToggleButton.textContent = 'switch to light mode';
            modeToggleButton.classList.replace('light-mode-button', 'dark-mode-button');
            currentMode = 'dark';
        } else {
            body.classList.remove('dark-mode-body');
            startScreen.classList.remove('dark-mode');
            modeToggleButton.textContent = 'switch to dark mode';
            modeToggleButton.classList.replace('dark-mode-button', 'light-mode-button');
            currentMode = 'light';
        }
    });

    // Log Mood Button Action
    logMoodButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        moodTracker.classList.remove('hidden');
    });

    // Lever Action to Lock Mood and Add to Memory Shelf
    lever.addEventListener('click', () => {
        const activeButton = document.querySelector('.mood-button.active');
        if (activeButton) {
            const memoryBall = document.createElement('div');
            memoryBall.classList.add('memory-ball');
            memoryBall.style.backgroundColor = activeButton.dataset.color;
            memoryBall.innerHTML = `<div class="ball-details">${activeButton.textContent}</div>`;
            memoryShelfRow.appendChild(memoryBall);

            // Clear mood selection after locking in
            moodButtons.forEach(btn => btn.classList.remove('active'));
        }
    });

    // Handle Mood Button Selection
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            moodButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
