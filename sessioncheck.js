document.addEventListener('DOMContentLoaded', function() {
    const session = localStorage.getItem('session');
    if (session !== 'loggedin') {
        // alert('You are not logged in!');
        window.location.href = 'login.html';
    } else {
        // document.getElementById('mainContent').classList.remove('hidden');
        document.body.style.display = 'block';
    }
});
