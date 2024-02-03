function hitungKemunculanKata(INPUT, QUERY) {
    const output = [];
  
    QUERY.forEach(queryKata => {
      const jumlahKemunculan = INPUT.filter(inputKata => inputKata === queryKata).length;
      output.push(jumlahKemunculan);
    });
  
    return output;
  }
  
  // Contoh penggunaan
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  
  const output = hitungKemunculanKata(INPUT, QUERY);
  
  console.log("OUTPUT:", output);
  