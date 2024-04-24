function toggleVisibility() {
    var element = document.getElementById('side');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}