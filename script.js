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

    // Mood Selection
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedEmotion = {
                color: button.getAttribute('data-color'),
                emotion: button.getAttribute('data-emotion')
            };
            console.log(`Selected: ${selectedEmotion.emotion}`);
        });
    });

    // Lock and Display Emotion Ball
    lockMoodButton.addEventListener('click', () => {
        if (selectedEmotion) {
            const ball = document.createElement('div');
            ball.classList.add('memory-ball');
            ball.style.backgroundColor = selectedEmotion.color;

            const ballDetails = document.createElement('div');
            ballDetails.classList.add('ball-details');
            const currentDate = new Date().toLocaleDateString();
            ballDetails.textContent = `${selectedEmotion.emotion} (${currentDate})`;

            ball.appendChild(ballDetails);

            memoryShelfContainer.appendChild(ball);
        } else {
            alert('Please select an emotion.');
        }
    });
});
