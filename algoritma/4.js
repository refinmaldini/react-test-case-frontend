function selisihDiagonal(matriks) {
    const ukuran = matriks.length;
    let diagonalUtama = 0;
    let diagonalKedua = 0;
  
    // Menghitung jumlah diagonal utama dan diagonal kedua
    for (let i = 0; i < ukuran; i++) {
      diagonalUtama += matriks[i][i];
      diagonalKedua += matriks[i][ukuran - 1 - i];
    }
  
    // Menghitung selisih diagonal
    const selisih = Math.abs(diagonalUtama - diagonalKedua);
  
    return selisih;
  }
  
  // Matriks yang diberikan
  const matriks = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Menghitung selisih diagonal
  const hasilSelisih = selisihDiagonal(matriks);
  
  console.log("Selisih diagonal matriks:", hasilSelisih);
  