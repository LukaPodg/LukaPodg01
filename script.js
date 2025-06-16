function prikaziSporocilo() {
    alert("Formula 1 je najboljši šport.");
}

function spremeniBarvoTexta() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.color = `rgb(${r}, ${g}, ${b})`;
    }


document.querySelector(".kontakt-forma").addEventListener("submit", function(e) {
    const ime = document.getElementById("ime").value.trim();
    const email = document.getElementById("email").value.trim();

    if (ime === "" || email === "") {
        alert("Prosim izpolnite vsa polja (ime in e-pošta).");
        e.preventDefault(); // prepreči pošiljanje
    } else {
        alert("Obrazec je uspešno poslan. Hvala!");
    }
});

function showImage(imgElement) {
    const previewSection = document.getElementById('preview');
    const previewImg = document.getElementById('previewImg');
    previewImg.src = imgElement.src;
    previewSection.classList.remove('hidden');
  }