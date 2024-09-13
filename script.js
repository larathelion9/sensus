document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.querySelector('.start-screen');
    const moodTracker = document.querySelector('.mood-tracker');
    const logMoodButton = document.querySelector('.start-button');
    const modeToggleButton = document.querySelector('.toggle-mode');
    const body = document.querySelector('body');
    const moodButtons = document.querySelectorAll('.mood-button');
    const logEmotionButton = document.querySelector('.log-emotion');
    const memoryShelfRow = document.querySelector('.memory-shelf-row');

    let currentMode = 'light';

    // Toggle Light/Dark Mode
    modeToggleButton.addEventListener('click', () => {
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

    // Show Mood Tracker
    logMoodButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        moodTracker.classList.remove('hidden');
    });

    // Log Emotion and Add Memory Ball
    logEmotionButton.addEventListener('click', () => {
        const selectedMoodButton = document.querySelector('.mood-button.selected');
        if (selectedMoodButton) {
            const moodColor = selectedMoodButton.getAttribute('data-color');
            const memoryBall = document.createElement('div');
            memoryBall.className = 'memory-ball';
            memoryBall.style.backgroundColor = moodColor;
            memoryBall.innerHTML = `
                <div class="ball-details">Date: ${new Date().toLocaleDateString()}</div>
            `;
            memoryShelfRow.appendChild(memoryBall);
        }
    });

    // Select Mood
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            moodButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });
});
