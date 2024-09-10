document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    if (email) {
        alert(`Logging in with ${email}`);
        // You can add your backend logic here.
    } else {
        alert('Please enter a valid email or phone number');
    }
});
