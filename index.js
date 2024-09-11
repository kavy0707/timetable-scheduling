document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button element
    const loginButton = document.getElementById('logbtn');

    // Add click event listener to the button
    loginButton.addEventListener('click', () => {
        // Redirect to login.html when button is clicked
        window.location.href = 'login.html';
    });
});