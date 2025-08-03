document.getElementById('saveTrackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const goalName = document.getElementById('goalName').value;
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const goalTimeline = parseInt(document.getElementById('goalTimeline').value);

    if (isNaN(goalAmount) || isNaN(goalTimeline) || goalAmount <= 0 || goalTimeline <= 0) {
        Swal.fire({
            title: 'Validation Error',
            text: 'Please enter valid numbers for amount and timeline.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    const monthlyTarget = goalAmount / goalTimeline;
    const progressPercentage = Math.min((monthlyTarget / goalAmount) * 100, 100).toFixed(2);

    document.getElementById('progressPercentage').textContent = `${progressPercentage}%`;
    document.getElementById('progressBarFill').style.width = `${progressPercentage}%`;

    Swal.fire({
        title: 'Goal Details',
        html: `<p><strong>Goal:</strong> ${goalName}</p><p><strong>Monthly Target:</strong> $${monthlyTarget.toFixed(2)}</p>`,
        icon: 'info',
        confirmButtonText: 'OK'
    });
});

document.getElementById('sideHustleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idea = document.getElementById('idea').value;

    if (!idea.trim()) {
        alert('Please enter a valid business idea.');
        return;
    }

    alert(`Thank you for submitting your idea: ${idea}`);
});
