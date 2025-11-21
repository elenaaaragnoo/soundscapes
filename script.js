document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            // Aggiunge la classe .hidden al popup (definito nel CSS)
            // Questo fa sparire il popup e l'effetto sfocatura
            popup.classList.add('hidden');
        });
    }
});
