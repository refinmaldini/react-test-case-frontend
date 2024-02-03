function cariKataTerpanjang(kalimat) {
    // Memisahkan kalimat menjadi array kata
    const kataArray = kalimat.split(" ");
  
    // Inisialisasi variabel untuk menyimpan kata terpanjang
    let kataTerpanjang = "";
  
    // Iterasi melalui setiap kata dalam array
    for (let i = 0; i < kataArray.length; i++) {
      // Jika panjang kata saat ini lebih besar dari panjang kata terpanjang yang sudah ditemukan
      if (kataArray[i].length > kataTerpanjang.length) {
        kataTerpanjang = kataArray[i];
      }
    }
  
    return kataTerpanjang;
  }
  
  // Contoh penggunaan
  const kalimat = "Saya sangat senang mengerjakan soal algoritma";
  const kataTerpanjang = cariKataTerpanjang(kalimat);
  
  console.log("Kata terpanjang:", kataTerpanjang);
  