document.getElementById("closePopup").addEventListener("click", () => {
  // Invece di nasconderlo bruscamente con "none", 
  // aggiungiamo la classe che fa partire la dissolvenza CSS
  document.getElementById("popup").classList.add("hidden");
});
