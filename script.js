document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.querySelector('.start-screen');
    const moodTracker = document.querySelector('.mood-tracker');
    const logMoodButton = document.querySelector('.start-button');
    const lever = document.querySelector('.lever');
    const moodButtons = document.querySelectorAll('.mood-button');
    const memoryShelfRow = document.querySelector('.memory-shelf-row');
    const instructions = document.querySelector('.instructions');
    
    let selectedMood = null;
    let moodLogged = false;

    // Show Mood Tracker on Log Mood Button Click
    logMoodButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        moodTracker.classList.remove('hidden');
        logMoodButton.style.display = 'none';  // Hide log mood button
    });

    // Mood Button Click
    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!moodLogged) {
                moodButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                selectedMood = button.dataset.emotion;
                instructions.textContent = `You selected "${selectedMood}". Drag the lever to log it!`;
            } else {
                instructions.textContent = "You've already logged a mood today.";
            }
        });
    });

    // Lever Drag Event (Lever to lock emotion)
    lever.addEventListener('input', (event) => {
        if (selectedMood && lever.value == 100 && !moodLogged) {
            const memoryBall = document.createElement('div');
            memoryBall.className = 'memory-ball';
            memoryBall.style.backgroundColor = document.querySelector('.mood-button.active').dataset.color;
            const ballDetails = document.createElement('div');
            ballDetails.className = 'ball-details';
            ballDetails.textContent = `${selectedMood} - ${new Date().toLocaleDateString()}`;
            memoryBall.appendChild(ballDetails);
            memoryShelfRow.appendChild(memoryBall);

            instructions.textContent = "Mood logged successfully! Come back tomorrow.";
            moodLogged = true;
            localStorage.setItem('moodLoggedDate', new Date().toLocaleDateString());
        }
    });

    // One Log Per Day
    const lastLoggedDate = localStorage.getItem('moodLoggedDate');
    if (lastLoggedDate === new Date().toLocaleDateString()) {
        moodLogged = true;
        instructions.textContent = "You've already logged a mood today. Come back tomorrow.";
    }
});
