// Function to create the Pie Chart
function createPieChart() {
    const ctx = document.getElementById('studyPieChart').getContext('2d');
    const studyData = {
        labels: ['Time Spent Studying', 'Time Spent Not Studying'],
        datasets: [{
            data: [70, 30], // Example data: 70% time spent studying, 30% not studying
            backgroundColor: ['#4CAF50', '#f44336'],
            borderColor: ['#4CAF50', '#f44336'],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'pie',
        data: studyData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Function to update Streak and Message
function updateStreak() {
    const streakCount = parseInt(localStorage.getItem('studyStreak') || '0');
    const streakElement = document.getElementById('streak-count');
    const messageElement = document.getElementById('message');
    const streakMessageElement = document.getElementById('streak-message');

    streakElement.textContent = streakCount;

    // Update the message based on streak count
    if (streakCount >= 7) {
        messageElement.textContent = "Good job! You're on a roll!";
        messageElement.parentElement.classList.remove('toxic');
    } else if (streakCount > 0) {
        messageElement.textContent = "You're doing great! Keep going!";
        messageElement.parentElement.classList.remove('toxic');
    } else {
        messageElement.textContent = "Keep going!";
        messageElement.parentElement.classList.remove('toxic');
    }

    // Display appropriate message based on streak
    if (streakCount === 0) {
        streakMessageElement.textContent = "Uh-oh, you've broken your streak!";
    } else {
        streakMessageElement.textContent = `Streak is intact! Keep going!`;
    }
}

// Call the functions on page load
window.onload = function() {
    createPieChart();
    updateStreak();
};
