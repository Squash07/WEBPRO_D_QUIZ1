let waktu = new Date().getHours()
if (waktu < 12) {
    document.getElementById("menyapa").textContent = "Selamat Pagi :)";
}
else if (waktu < 18) {
    document.getElementById("menyapa").textContent = "Selamat Siang (Panas) :(";
}
else {
    document.getElementById("menyapa").textContent = "Selamat Malam";
}