// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert(`You clicked on the ${section.id} section!`);
        });
    });
});