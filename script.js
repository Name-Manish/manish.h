// Function to toggle the hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hiddenContent = document.getElementById('hiddenContent');
    const loginPage = document.getElementById('loginPage');

    // Toggle navbar links
    navLinks.classList.toggle('active');

    // Toggle hidden content visibility
    if (hiddenContent.style.display === 'block') {
        hiddenContent.style.display = 'none';
    } else {
        hiddenContent.style.display = 'block';
        loginPage.style.display = 'none'; // Hide login page if visible
    }
}

// Function to show login page
function showLoginPage() {
    const hiddenContent = document.getElementById('hiddenContent');
    const loginPage = document.getElementById('loginPage');

    // Show login page and hide other content
    loginPage.style.display = 'block';
    hiddenContent.style.display = 'none';
}

// Add event listener for login link
document.querySelector('a[href="#login"]').addEventListener('click', function (e) {
    e.preventDefault();
    showLoginPage();
});
