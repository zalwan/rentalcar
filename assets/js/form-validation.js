document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-transaksi");
  if (form) {
    form.addEventListener("submit", (e) => {
      const nama = form.elements["nama"].value;
      const jumlah = form.elements["jumlah"].value;
      const kategori = form.elements["kategori"].value;
      if (!nama || !jumlah || !kategori) {
        alert("Semua input harus diisi!");
        e.preventDefault();
      }
    });
  }
});
