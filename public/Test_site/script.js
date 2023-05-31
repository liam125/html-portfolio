window.onload = function() {
    var listItems = document.querySelectorAll('ul li');
    
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (this.style.backgroundColor === 'red') {
                this.style.backgroundColor = '#a7f3d0';
            } else {
                this.style.backgroundColor = 'red';
            }
        });
    });
}
