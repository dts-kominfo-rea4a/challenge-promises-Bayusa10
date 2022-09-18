const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion)=>{
  let dataFilmTheaterIXX  = await promiseTheaterIXX(); //ambil array promise promiseTheaterIXX
  let dataFilmTheaterVGC  = await promiseTheaterVGC(); //ambil array promise promiseTheaterVGC

  return new Promise((resolve, reject)=>{ 
      if(emotion === null){ // jika parameter emosi tidak berisi
        reject('Emosi tidak boleh kosong!'); //kembalian fungsi reject
      } else {
        // hitung panjang array object dengan isian sesuai parameter
        var lenghOfFilterDataIXX = dataFilmTheaterIXX.
                                    filter(len => len.hasil.toLowerCase() === emotion.toLowerCase()).length;
        
        var lengthOfFilterDataVGC= dataFilmTheaterVGC.
                                    filter(len => len.hasil.toLowerCase() === emotion.toLowerCase()).length;

        //jumlahkan kedua array object yang sudah diambil panjang datanya
        var sumLength            = lenghOfFilterDataIXX + lengthOfFilterDataVGC;

        resolve(sumLength);
      }
  });
};

module.exports = {
  promiseOutput,
};
