document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('session');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
});