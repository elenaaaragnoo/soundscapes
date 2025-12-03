// script.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.classList.add('hidden');
        });
    }
});
