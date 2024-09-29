document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('form').reset();
});
