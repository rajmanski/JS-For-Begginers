const content = document.getElementById('content');
const button = document.getElementById('show-more');

button.onclick = function() {
    if(content.className == 'open') {
        content.className = '';
        button.innerHTML = 'Show more';
    } else {
        content.className = 'open';
        button.innerHTML = 'Show Less';
    }
};