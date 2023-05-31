window.onload = function() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
            if (this.className === 'enlarged') {
                this.className = '';
            } else {
                this.className = 'enlarged';
            }
        });
    }
}