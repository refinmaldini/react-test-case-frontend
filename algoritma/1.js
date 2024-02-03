function reverseStringWithNumberAtEnd(input) {
    // Pisahkan huruf dan angka
    const letters = input.replace(/\d/g, '');
    const number = input.replace(/\D/g, '');
  
    // Balikkan huruf
    const reversedLetters = letters.split('').reverse().join('');
  
    // Gabungkan hasil dengan angka di akhir
    const result = reversedLetters + number;
  
    return result;
  }
  
  // Contoh penggunaan
  const inputString = "NEGIE1";
  const hasil = reverseStringWithNumberAtEnd(inputString);
  
  console.log(hasil); // Output: "EIGEN1"
  